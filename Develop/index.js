const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js");
const api = require("./utils/api.js");

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Tell me a description for your project:"
    },
    {
        type: "input",
        name: "TOC",
        message: "Table of contents?"
    },
    {
        type: "input",
        name: "install",
        message: "How does some one install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use it?"
    },
    {
        type: "input",
        name: "license",
        message: "What is it licensed under?"
    },
    {
        type: "input",
        name: "contributing",
        message: "How can people contribute to your project?"
    },
    {
        type: "input",
        name: "testing",
        message: "How do you test your project?"
    },
    {
        type: "input",
        name: "badgeimg",
        message: "What is the image for your badge?"
    },
    {
        type: "input",
        name: "badgelink",
        message: "What is the link for your badge?"
    }
];

function writeToFile(fileName, data) {
    const readMe = generateMarkdown(data);
    return writeFileAsync(fileName, readMe)
}

function init() {
    inquirer.prompt(questions)
        .then((data) => {
            api.getUser(data.username).then(function (gitRes) {
                let newData = Object.assign(data, gitRes);
                console.log(newData);
                writeToFile("README.md", newData)
            });
        });
};
init();
