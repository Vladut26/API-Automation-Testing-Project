const { spec, request } = require("pactum");
const getJsonSchema = require("../data/response/get-users-response-schema.json");
const base_URL = "https://reqres.in/api/";
const getJson = require("../data/response/get-users-list-json.json");

describe("Get users list test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("get user list page 2 test", async () => {
    await spec()
      .get(base_URL + "users?page=2")
      .expectStatus(200)
      .expectResponseTime(3000)
      .expectJsonSchema(getJsonSchema)
      .expectJson(getJson);
  });
  it("Get users list not found test", async () => {
    await spec()
      .get(base_URL + "/users?page=100")
      .expectStatus(404);
  });

  after(() => {
    console.log("The user list test suite had been ran.");
  });
});
