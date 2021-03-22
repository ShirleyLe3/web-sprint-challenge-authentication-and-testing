const request = require("supertest");
const server = require("../api/server.js");

describe("register", () => {
    it("should return 200 OK", function() {
        return request(server)
            .post("/api/auth/register")
            .send({ username: "simontesting1", password: "passing" })
            .then(res => {
                expect(res.status).toBe(201);
            });
    });

    it("should return json", () => {
        return request(server)
            .post("/api/auth/register")
            .send({ username: "simontest2", password: "pass" })
            .then(res => {
                expect(res.type).toBe("application/json");
            });
    });
});



describe("login", () => {
    it("should return 200 OK", function() {
        return request(server)
            .post("/api/auth/login")
            .send({ username: "simontesting1", password: "passing" })
            .then(res => {
                expect(res.status).toBe(200);
            });
        });

    it("should return json", () => {
        return request(server)
        .post("/api/auth/login")
        .send({ username: "simontest2", password: "pass" })
        .then(res => {
            expect(res.type).toBe("application/json");
        });
    });
});