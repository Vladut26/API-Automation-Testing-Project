const { spec, request} = require("pactum");

const base_URL ="https://reqres.in/api/"
describe("Get single user endpoint test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("get user with id 2 test", async () => {
    await spec()
      .get(base_URL +"users/2")
      .expectStatus(200)
      .expectResponseTime(3000)
      .expectBodyContains("To keep ReqRes free, contributions towards server costs are appreciated!");
  });

   it("get a non-existing user test",async()=>{
     await spec()
     .get(base_URL+ "users/23")
    .expectStatus(404);

  });

  after(()=>{
    console.log("The single-user test suite had been ran.")
  });


});
