// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) return "";
  
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "GPL":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "LGPL":
      return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) return "";
  
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "Apache":
      return "https://opensource.org/licenses/Apache-2.0";
    case "GPL":
      return "https://www.gnu.org/licenses/gpl-3.0";
    case "LGPL":
      return "https://www.gnu.org/licenses/lgpl-3.0";
    default:
      return "";
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) return "";
  
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);
  
  return `## License

This project is licensed under the ${license} license ${badge}.

For more information, see the [LICENSE](${link}) file.`;
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseSection(data.license)}

## Description
  
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [credits](#contributors)

- [Questions](#questions)
   

## <a name="installation"></a>Installation

${data.installation}

## <a name="usage"></a>Usage

${data.usage}

## <a name="credits"></a>Credits

${data.credits}



## <a name="questions"></a>Questions

If you have questions regarding the ready-to-README application,
  you can contact me directly by email at ${data.email} or reach out
  to me on GitHub at https://www.github.com/${data.github}.`
}

module.exports = generateMarkdown;

