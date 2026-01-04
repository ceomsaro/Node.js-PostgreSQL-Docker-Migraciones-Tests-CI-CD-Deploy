const request = require("supertest");

describe("Tasks", () => {
  it("should return tasks list", async () => {
    const res = await request("http://localhost:3000").get("/tasks");
    expect(res.statusCode).toBe(200);
  });
});
