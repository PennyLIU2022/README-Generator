// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if(license != "None"){
    badge = "![License Badge](https://shields.io/badge/license-" + license + "-green)";
  }
  return badge;
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;

  switch(license){
    case 'Apache':
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";
      break;
    case 'AGPL':
      licenseLink = "https://www.gnu.org/licenses/agpl-3.0.en.html";
      break;
    case 'MIT':
      licenseLink = "https://mit-license.org/";
      break;
    case 'BSD':
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    default:
      licenseLink = "";
      break;
  }
  return licenseLink;
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";

  if (license != "None"){
    licenseSection += "## License\n";
    licenseSection += "This section of a high-quality README file is the license. For more detailed information of the license, please visit"+renderLicenseLink(license)+"\n";
  }
  return licenseSection;
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  const section = ["Description", "Installation", "Usage", "License", "Badges", "Features","How to Contribute", "Tests"];

  // title
  let markdown = "# "+data.tile+"\n";

  // description section
  markdown += "## "+section[0]+"\n";
  markdown += data.description+"\n";

  // table of contents
  markdown += "## Table of Contents"
  for (let i=0; i<section.length; i++){
    if (!(section[i]==="License" && data.license === "None")){
      markdown += i +".["+ section[i]+"](#" + section[i][0].toLowerCase() + secion[i].substring(1) +")\n";
    }
  }
  markdown += "\n";

  // Installation section
  markdown += "## "+section[1]+"\n";
  markdown += data.install+"\n";

  // Usage section
  markdown += "## "+section[2]+"\n";
  markdown += data.usage+"\n";

  // License section
  markdown += renderLicenseSection(data.license)+"\n";

  // Badges section
  markdown += "## "+section[4]+"\n";
  markdown += renderLicenseBadge(data.license)+"\n";

  // Features section
  markdown += "## "+section[5]+"\n";
  markdown += data.features+"\n";

  // Contribute section
  markdown += "## "+section[6]+"\n";
  markdown += data.contribute+"\n";

  // Test section
  markdown += "## "+section[7]+"\n";
  markdown += data.test+"\n";

  return markdown;
}

module.exports = generateMarkdown;
