const supertest = require("supertest");
const server = require("../api/server.js");
const db = require("../database/dbConfig");

afterAll(async () => {
	await db.destroy();
});

test("POST /register", async () => {
	const res = await supertest(server).post("/api/auth/register").send({
		username: "test5",
		password: "password19",
	});
	expect(res.statusCode).toBe(201);
});
test("POST /register", async () => {
	const res = await supertest(server).post("/api/auth/register").send({
		password: "password19",
	});
	expect(res.statusCode).toBe(401);
	expect(res.type).toBe("application/json");
	expect(res.body.message).toBe("username required");
});
test("POST /login", async () => {
	const res = await supertest(server).post("/api/auth/login").send({
		username: "test5",
		password: "password1",
	});
	expect(res.statusCode).toBe(401);
	expect(res.type).toBe("application/json");
	expect(res.body.message).toBe("Invalid Credentials");
});

test("POST /login", async () => {
	const res = await supertest(server).post("/api/auth/login").send({
		username: "test5",
		password: "password19"
    });
	expect(res.statusCode).toBe(200);
	expect(res.type).toBe("application/json");
	expect(res.body.message).toBe("Welcome test5");
});

test("GET /", async () => {
	const res = await supertest(server).get("/api/jokes");
	expect(res.statusCode).toBe(401);
    expect(res.type).toBe("application/json");
    expect(res.body.message).toBe("Invalid credentials");
});

