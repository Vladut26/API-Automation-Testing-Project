const { spec, request } = require("pactum");
const getResourcesJsonSchema = require("../data/response/get-resources-schema.json");
const base_URL = "https://reqres.in/api/";

describe("Get resources  test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("get resources list  test", async () => {
    await spec()
      .get(base_URL + "unknown")
      .expectStatus(200)
      .expectResponseTime(3000)
      .expectJsonSchema(getResourcesJsonSchema);
  });

  it("Get resources list not found test", async () => {
    await spec()
      .get(base_URL + "/resources")
      .expectStatus(404);
  });

  it("get single resource fuchsia rose test", async () => {
    await spec()
      .get(base_URL + "unknown/2")
      .expectStatus(200)
      .expectResponseTime(3000)
      .expectBodyContains("fuchsia rose");
  });

  it("get a non-existing resource test", async () => {
    await spec()
      .get(base_URL + "unknown/23")
      .expectStatus(404)
      .expectResponseTime(3000);
  });

  after(() => {
    console.log("The resources test suite had been ran.");
  });
});
