function renderLicenseSelection(response) {
  if(response.licenseSelection==="MIT"){
    return `MIT License

    Copyright (c) ${response.year} ${response.name}
    `
  }else if(response.licenseSelection==="Apache"){
    return `Apache License.

      Version 2.0, January 2004

      http://www.apache.org/licenses/`
  }else if(response.licenseSelection==="GPL"){
    return `GNU GENERAL PUBLIC LICENSE

    Version 3, 29 June 2007

Copyright (C) 2007 Free Software Foundation, Inc. <http://fsf.org/>
Everyone is permitted to copy and distribute verbatim copies
of this license document, but changing it is not allowed.`
}
  return "";
}

function renderLicenseBadge(response) {
  if(response.licenseSelection==="MIT"){
    console.log("LICENSE BADGE: MIT");
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }else if (response.licenseSelection==="Apache"){
    console.log("LICENSE BADGE: Apache");
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }else if (response.licenseSelection==="GPL"){
    console.log("LICENSE BADGE: GPL");
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }
  return "";
}

// Function to generate markdown for README
function generateMarkdown(response) {
  return `# **${response.projectTitle}** ${renderLicenseBadge(response)}
<h2>By ${response.name}</h2>

---

## Description

${response.description}

<summary>Table of Contents</summary>
  <ol>
    <li><a href="#Installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contribution">Contributing</a></li>
    <li><a href="#tests">Tests</a></li>
    <li><a href="#questions">Questions</a></li>
  </ol>

---

## Installation

To get started:

  * ${response.installation}


## Usage

${response.usage}


## License

Distributed under the ${renderLicenseSelection(response)}


## Contribution
Any contributions you make are **greatly appreciated**, 
please follow these guidelines.

${response.contribution}


## Tests

Testing Instructions that are recommended for optimization: 
  * ${response.tests}

---

## Questions
For further questions and inquiries please feel free send me an email or a direct message on GitHub

${response.name} - ${response.email}

GitHub Profile: [https://github.com/${response.githubName}/](https://github.com/${response.githubName})
`;
}

module.exports = generateMarkdown;