const request = require("supertest");
const server = require("../api/server.js");

describe("jokes", () => {
    it("should return an array", () => {
        return request(server)
            .get("/api/jokes")
            .then(res => {
                expect(Array.isArray([res.body])).toBe(true);
            });
        });

    it("should return json", () => {
        return request(server)
            .get("/api/jokes")
            .then(res => {
                expect(res.type).toBe("application/json");
            });
        });
});