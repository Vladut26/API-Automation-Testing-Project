const { spec, request} = require("pactum");

const base_URL ="https://reqres.in/api/"



describe("Put post user test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("Put post user test", async () => {
const requestBody={
"name": "Vladut",
"job": "Student"
}

    await spec()
      .put(base_URL+"users/2")
      .withHeaders("Content-Type", "application/json")
      .expectStatus(200)
      .expectResponseTime(3000)
      .withBody(requestBody)
      .expectBodyContains(requestBody.job);
});
      




  after(()=>{
    console.log("Put post user test suite had been ran.")
  });


})
