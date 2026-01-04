const request = require("supertest");
const app = require("../src/app");

jest.mock("../src/db/pool", () => ({
  query: jest.fn().mockResolvedValue({}),
}));

describe("Healthcheck", () => {
  it("should return api ok", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
  });
});
