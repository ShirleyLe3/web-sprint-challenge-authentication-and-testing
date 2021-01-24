const db = require("../database/dbConfig");

function findById(id) {
	return db("users").where("id", id).first();
}

function findByUsername(filter) {
	return db("users")
		.select("id", "username", "password")
		.where("username", filter)
		.first();
}

async function add(data) {
	const [id] = await db("users").insert(data);
	return findById(id);
}

module.exports = {
    findById,
    findByUsername,
    add,
};