describe("Django REST framework / React quickstart app", () => {
	const test = {
		name: "John",
		email: "john@gmail.com",
		message: "johns message"
	};

	before(() => {
		cy.exec("npm run dev");
		cy.exec("npm run flush");
	});

	it("should be able to fill a web form", () => {
		cy.visit("/");

		cy
		  .get('input[name="name"]')
		  .type(test.name)
		  .should("have.value", test.name);

		cy
		  .get('input[name="email"]')
		  .type(test.email)
		  .should("have.value", test.email);

		cy
		  .get('textarea[name="message"]')
		  .type(test.message)
		  .should("have.value", test.message);

		cy.get("form").submit();

	});

   // insert after the first "it" block in ./cypress/integration/app_spec.js
	it("should be able to see the table", () => {
		cy.visit("/");
		cy.get("tr").contains(`${test.name}${test.email}${test.message}`);
	});
  // more tests here
});