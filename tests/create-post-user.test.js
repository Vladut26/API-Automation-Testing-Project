const { spec, request } = require("pactum");
const base_URL = "https://reqres.in/api/";

describe("Create new post user test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("Create new post user test", async () => {
    const requestBody = {
      name: "Vladut",
      job: "QA Tester",
    };
    await spec()
      .post(base_URL + "users")
      .withHeaders("Content-Type", "application/json")
      .expectStatus(201)
      .expectResponseTime(3000)
      .withBody(requestBody)
      .expectBodyContains("Tester");
  });
  after(() => {
    console.log("Create post user test suite had been ran.");
  });
});
