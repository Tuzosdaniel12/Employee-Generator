const Questions = require("../lib/Questions");

test("Can instantiate Questions instance", () => {
  const q = new Questions();
  expect(typeof(q)).toBe("object");
});

test("get question back from getGeneralQuestions()", () => {
  const q = new Questions();
  expect(q.generalQuestions).toBe(q.getGeneralQuestions());
});

test("get question back from getManagerQs()", () => {
    const q = new Questions();
    expect(q.managerQ).toBe(q.getManagerQs());
  });

test("get question back from getEngineerQs()", () => {
    const q = new Questions();
    expect(q.engineerQs).toBe(q.getEngineerQs());
  });

  test("get question back from getInternQs()", () => {
    const q = new Questions();
    expect(q.internQs).toBe(q.getInternQs());
  });

  test("get question back from getTypeOfEmployee()", () => {
    const q = new Questions();
    expect(q.typeOfEmployee).toBe(q.getTypeOfEmployee());
  });

  test("get question back from getAnotherEmployee()", () => {
    const q = new Questions();
    expect(q.askForAnotherEmployee).toBe(q.getAnotherEmployee());
  });

 