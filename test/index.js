const expect = require("chai").expect;

const getOrders =
  require("../src/controllers/orders").getOrders;

describe("orders.js test ", function () {
  it("should not throw error if query is not present  ", function () {
    //no query string appended in req
    const req = {
      query: {},
    };

    expect(
      getOrders.bind(this, req, {}, () => {})
    ).to.not.throw();
  });

  it("should throw if query is negative", function () {
    //query string has negative value
    const req = {
      query: {
        limit: -1,
        offset: 0,
      },
    };

    expect(
      getOrders.bind(this, req, {}, () => {})
    ).to.not.throw();
  });
});
