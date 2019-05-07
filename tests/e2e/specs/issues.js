describe("Issues Page", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/issue",
      response: {
        data: [
          {
            id: 2,
            title: "Test title 2",
            description: "Test description2",
            state: "Pending",
            createdAt: "2019-05-07T17:18:51.000Z",
            updatedAt: "2019-05-07T19:30:41.000Z"
          },
          {
            id: 3,
            title: "Test title",
            description: "Test description",
            state: "Closed",
            createdAt: "2019-05-07T19:24:53.000Z",
            updatedAt: "2019-05-07T19:31:42.000Z"
          }
        ]
      }
    });

    cy.route({
      method: "PUT",
      url: "http://localhost:3000/api/v1/issue/2",
      response: {
        data: {
          id: 2,
          title: "Test title 2",
          description: "Test description2",
          state: "Closed",
          createdAt: "2019-05-07T17:18:51.000Z",
          updatedAt: "2019-05-07T19:30:41.000Z"
        }
      }
    });

    cy.visit("/");
  });

  it("Should have issues are shown on list", () => {
    cy.get(".ant-spin-container").contains("Test title 2");
    cy.get(".ant-spin-container").contains("Test title");
  });

  it("Should have first issue on the right side with correct data", () => {
    cy.get(".ant-radio-button-wrapper-disabled").contains("Open");
    cy.get(".ant-card-head-title").contains("Test title 2");
    cy.get(".ant-card-body")
      .find("p")
      .contains("Test description2");
  });

  it("Should properly change status", () => {
    cy.get(".ant-radio-group > :nth-child(3)").click();

    cy.get(".ant-radio-button-wrapper-disabled").contains("Open");
    cy.get(".ant-radio-button-wrapper-disabled").contains("Pending");
    cy.get(".ant-radio-button-wrapper-disabled").contains("Closed");
  });

  it("Should change to another issue", () => {
    cy.get(".ant-list-item-meta-title")
      .eq(1)
      .click();

    cy.get(".ant-radio-button-wrapper-disabled").contains("Open");
    cy.get(".ant-radio-button-wrapper-disabled").contains("Pending");
    cy.get(".ant-radio-button-wrapper-disabled").contains("Closed");
    cy.get(".ant-card-head-title").contains("Test title");
    cy.get(".ant-card-body")
      .find("p")
      .contains("Test description");
  });
});
