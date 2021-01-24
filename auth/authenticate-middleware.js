/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/
const jwt = require("jsonwebtoken");

function restrict() {
	return async (req, res, next) => {
		try {
      const token = req.cookies.token
			if (!token) {
				return res.status(401).json({
					message: "Invalid credentials",
				});
      }
			jwt.verify(token, process.env.JWT_SECRET || "secretString", (err, decoded) => {
				if (err) {
					return res.status(401).json({
						message: "Invalid credentials",
					});
				}
				next();
			});
		} catch (err) {
			res.status(401).json({ you: "shall not pass!" });
			next(err);
		}
	};
};
module.exports = {
  restrict,
}