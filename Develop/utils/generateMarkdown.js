//TODO: Create a function that returns a license badge based on which license is passed in
//If there is no license, return an empty string
function renderLicenseBadge(license) {}

//TODO: Create a function that returns the license link
//If there is no license, return an empty string
function renderLicenseLink(license) {}

//TODO: Create a function that returns the license section of README
//If there is no license, return an empty string
function renderLicenseSection(license) {}

//TODO: Create a function to generatemarkdown for README
function generateMarkdown(data) {
        return `
        # ${data.title}

        https://img.shields.io/badge/license-${data.license}-brightgreen?style=for-the-badge

        ## Table of Contents

        1. [Description] (#Description)
        2. [Installation](#Installation)
        3. [Usage](#Usage)
        4. [License](#License)
        5. [Contributions](#How to Contribute)
        6. [Contact Me](#Contact)

        ## Description

        ${data.description}

        ## Installation

        ${data.installation}

        ## Usage

        ${data.usage}

        ## License

        ${data.licenses}

        ##Badges

        https://img.shields.io/badge/license-${data.license}-brightgreen?style=for-the-badge

        ## How to Contribute

        ${data.contributionGuidelines}

        ## Tests

        ${data.testInstructions}

        ## Contact

        **GitHub Profile:** <https://github.com/${data.gitHubUsername}>
        **Email:** <${data.email}>
        `;
}


module.exports = generateMarkdown;