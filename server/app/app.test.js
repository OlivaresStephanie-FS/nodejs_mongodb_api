const request = require("supertest");
const app = require("./app");

describe("Express App Tests", () => {
	// Test for the root URL ("/")
	it("GET / should return a 200 status code and a message", async () => {
		const response = await request(app).get("/");
		expect(response.status).toBe(200);
		expect(response.body.message).toBe("Api is Working!");
	});
});
