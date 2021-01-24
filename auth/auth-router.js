const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require("./auth-models");
const { restrict } = require("./authenticate-middleware");

router.post("/register", async (req, res, next) => {
	try {
    const { username, password } = req.body;
    if (!username) {
      	return res.status(401).json({
					message: "username required",
				});
    }
		const credentials = await db.add({
			username,
			password: await bcrypt.hash(password, 14),
		});
		res.status(201).json(credentials);
	} catch (err) {
		next(err);
	}
});

router.post("/login", async (req, res, next) => {
	try {
		const { username, password } = req.body;
		const user = await db.findByUsername(username);
		const passwordValid = await bcrypt.compare(password, user.password);
		if (!passwordValid) {
			return res.status(401).json({
				message: "Invalid Credentials",
			});
		}
		const token = jwt.sign(
			{
				userID: user.id,
			},
			process.env.JWT_SECRET || "secretString"
		);
		res.cookie("token", token);
		res.json({
			message: `Welcome ${user.username}`,
		});
	} catch (err) {
    console.log(err)
		next(err);
	}
});

module.exports = router;
