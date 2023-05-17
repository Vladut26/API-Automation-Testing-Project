const { spec, request} = require("pactum");
const getResourcesJsonSchema = require("../data/response/get-resources-schema.json")
const base_URL ="https://reqres.in/api/"

const getResourcesJson= { 
    "page": 1,
    "per_page": 6,
    "total": 12,
    "total_pages": 2,
    "data": [
        {
            "id": 1,
            "name": "cerulean",
            "year": 2000,
            "color": "#98B2D1",
            "pantone_value": "15-4020"
        },
        {
            "id": 2,
            "name": "fuchsia rose",
            "year": 2001,
            "color": "#C74375",
            "pantone_value": "17-2031"
        },
        {
            "id": 3,
            "name": "true red",
            "year": 2002,
            "color": "#BF1932",
            "pantone_value": "19-1664"
        },
        {
            "id": 4,
            "name": "aqua sky",
            "year": 2003,
            "color": "#7BC4C4",
            "pantone_value": "14-4811"
        },
        {
            "id": 5,
            "name": "tigerlily",
            "year": 2004,
            "color": "#E2583E",
            "pantone_value": "17-1456"
        },
        {
            "id": 6,
            "name": "blue turquoise",
            "year": 2005,
            "color": "#53B0AE",
            "pantone_value": "15-5217"
        }
    ],
    "support": {
        "url": "https://reqres.in/#support-heading",
        "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
} ;


describe("Get resources  test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("get resources list  test", async () => {
    await spec()
      .get(base_URL+"unknown")
      .expectStatus(200)
      .expectResponseTime(3000)
      .expectJsonSchema(getResourcesJsonSchema)
      .expectJson(getResourcesJson );
});
      

      it("Get resources list not found test", async () => {
        await spec()
        .get(base_URL+"/resources")
        .expectStatus(404);


  });

  it("get single resource fuchsia rose test", async () => {
    await spec()
      .get(base_URL+"unknown/2")
      .expectStatus(200)
      .expectResponseTime(3000)
      .expectBodyContains("fuchsia rose");
});

it("get a non-existing resource test",async()=>{

    await spec()
    .get(base_URL+"unknown/23")
    .expectStatus(404)
    .expectResponseTime(3000);

});


  after(()=>{
    console.log("The resources test suite had been ran.")
  });


})
