
function generateMarkdown(data) {
  return `
# ${data.title}

${data.description}

## Table of Contents
${data.TOC}

## Installing
${data.install}

## Usage
${data.usage}

## Running the tests
${data.testing}

## Contributing
${data.contributing}

## Author
${data.username} 

<img src="${data.avatar}" width="200" height="200" />

Contact Email: ${data.email}

## License
${data.license}

`;
}

module.exports = generateMarkdown;
