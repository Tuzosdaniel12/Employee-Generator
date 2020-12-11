const path = require("path");
const fs = require("fs");

const templatesDir = path.resolve(__dirname, "../templates");

/**
 * 
 * @param {array} employees - takes a list of employees
 * @fires renderManager - filters employees list to Managers list, then makes an array of formatted html for each Mangers 
 * @fires renderManager - filters employees list to Engineers list, then makes an array of formatted html for each Engineers 
 * @fires renderEngineer - filters employees list to Intern list, then makes an array of formatted html for each Intern 
 * @returns - Always returns nicely formatted Html file of all employees
 */
const render = employees => {
  const html = [];

  html.push(...employees
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => renderManager(manager))
  );
  html.push(...employees
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => renderEngineer(engineer))
  );
  html.push(...employees
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => renderIntern(intern))
  );

  return renderMain(html.join(""));

};

/**
 * 
 * @param {object} manager - accepts a Manager object to be formatted to a Html file
 * @fires fs.readFileSync - to read "manager.html" to write into the file"
 * @fires replacePlaceholder - replaces place holder to the data contain in the manager object
 */
const renderManager = manager => {
  let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
  template = replacePlaceholders(template, "name", manager.getName());
  template = replacePlaceholders(template, "role", manager.getRole());
  template = replacePlaceholders(template, "email", manager.getEmail());
  template = replacePlaceholders(template, "id", manager.getId());
  template = replacePlaceholders(template, "officeNumber", manager.getOfficeNumber());
  return template;
};

/**
 * 
 * @param {object} engineer - accepts a Manager object to be formatted to a Html file
 * @fires fs.readFileSync - to read "engineer.html" to write into the file"
 * @fires replacePlaceholder - replaces place holder to the data contain in the engineer object
 * @returns - Always returns formatted engineer.html
 */
const renderEngineer = engineer => {
  let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
  template = replacePlaceholders(template, "name", engineer.getName());
  template = replacePlaceholders(template, "role", engineer.getRole());
  template = replacePlaceholders(template, "email", engineer.getEmail());
  template = replacePlaceholders(template, "id", engineer.getId());
  template = replacePlaceholders(template, "github", engineer.getGithub());
  return template;
};

/**
 * 
 * @param {object} intern - accepts a Intern object to be formatted to a Html file
 * @fires fs.readFileSync - to read "intern.html" to write into the file"
 * @fires replacePlaceholder - replaces place holder to the data contain in the intern object
 * @returns - Always returns formatted inter.html
 */
const renderIntern = intern => {
  let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
  template = replacePlaceholders(template, "name", intern.getName());
  template = replacePlaceholders(template, "role", intern.getRole());
  template = replacePlaceholders(template, "email", intern.getEmail());
  template = replacePlaceholders(template, "id", intern.getId());
  template = replacePlaceholders(template, "school", intern.getSchool());
  return template;
};

/**
 * 
 * @param {string} html - accepts a string that is nicely formatted into divs for part of a html file
 * @fires fs.readFileSyn - reads main.html
 * @return - Always return updated main.html with html param
 */
const renderMain = html => {
  const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
  return replacePlaceholders(template, "team", html);
};

const replacePlaceholders = (template, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return template.replace(pattern, value);
};

module.exports = render;
