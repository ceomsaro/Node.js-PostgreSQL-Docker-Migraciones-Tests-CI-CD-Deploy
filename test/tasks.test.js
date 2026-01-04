const request = require("supertest");
const app = require("../src/app");

jest.mock("../src/db/pool", () => ({
  query: jest.fn().mockResolvedValue({ rows: [] }),
}));

describe("Tasks", () => {
  it("should return tasks list", async () => {
    const res = await request(app).get("/tasks");
    expect(res.statusCode).toBe(200);
  });
});
