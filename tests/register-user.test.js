const { spec, request} = require("pactum");
const { faker } = require('@faker-js/faker');
const base_URL ="https://reqres.in/api/"

describe("Register user test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });
  it("Register user test", async () => {
const requestBody={
    "email": "eve.holt@reqres.in",
    "password": "pistol"
}
    await spec()
      .post(base_URL+"register")
      .expectStatus(200)
      .withHeaders("Content-Type", "application/json")
      .expectResponseTime(3000)
      .withBody(requestBody)
      .expectBodyContains("QpwL5tke4Pnpja7X4");
});   
it("Register user without password  test", async () => {
    const randomEmail=faker.internet.email();
    const requestBody={
        "email": randomEmail
    }
    
        await spec()
          .post(base_URL+"register")
          .expectStatus(400)
          .withHeaders("Content-Type", "application/json")
          .expectResponseTime(3000)
          .withBody(requestBody)
          .expectBodyContains("Missing password");
    });
  after(()=>{
    console.log("Register user test suite had been ran.")
  });


})
