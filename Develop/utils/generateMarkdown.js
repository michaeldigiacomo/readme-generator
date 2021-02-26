// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license != 'NONE') {
      return `\n* [License](#license)\n`
    } else {
      return''
    }
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license != 'NONE') {
      return `## License
    ${renderLicenseLink(license)}`
    } else {
      return''
    }
  }
  
  // TODO: Create a function to generate markdown for README
  
  function generateMarkdown(data) {
    return `
    # Title
    ${data.title}
  
    ## Description
    ${data.description}
  
    ## Contents
    ${data.contents}
  
    ## Installation
    ${data.intallation}
  
    ## Usage
    ${data.usage}
  
    ## User License
    ${data.license}
  
    ## Contributing
    ${data.contributing}
  
    ## Tests
    ${data.tests}
  
    ## Github User
    ${data.github}
  
    ## Github Email
    ${data.email}
  
    ${renderLicenseSection(data.license)}`
  }
  
  module.exports = generateMarkdown;
  