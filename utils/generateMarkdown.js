// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  if (license === "IBM") {
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
  }else 
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache") {
    return "https://opensource.org/licenses/Apache-2.0";
  }else if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  }else if (license === "IBM") {
    return "https://opensource.org/licenses/IPL-1.0";
  }else
    return '';
  }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "Apache") {
    return `You have chosen the Apache license.  Here is a link to the license:  ${renderLicenseLink(license)}`;
  }
  if (license === "MIT") {
    return `You have chosen the MIT license.  Here is a link to the license: ${renderLicenseLink(license)}`;
  }
  if (license === "IBM") {
    return `You have chosen the IBM license.  Here is a link to the license: ${renderLicenseLink(license)}`;
  }else 
  return "";

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## ${data.title}

  ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)


## Installation

${data.installation}

## Usage

${data.usage}

## License

${renderLicenseSection(data.license)}
    
## How to Contribute

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions, please reach out to ${data.githubname}.
Here is a link to their Github profile ${data.githubprofile}
You may also reach them at the email address ${data.email}.`;
}

module.exports = generateMarkdown;
