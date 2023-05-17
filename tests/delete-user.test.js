const { spec, request} = require("pactum");

const base_URL ="https://reqres.in/api/"



describe("Delete user test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("Delete existing user test", async () => {
        const postID=2;
    await spec()
      .delete(base_URL+"users/"+postID)
      .expectStatus(204)
      .expectResponseTime(3000);

    await spec()
  .get(base_URL+"users/"+postID)
  .expectStatus(200);
});

      
  after(()=>{
    console.log("Delete user test suite had been ran.")
  });


})
