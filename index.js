#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let answer = await inquirer.prompt([
    {
        message: chalk.magenta("Enter First Number:"),
        type: "number",
        name: "firstNumber",
    },
    {
        message: chalk.magenta("Enter Second Number:"),
        type: "number",
        name: "secondNumber",
    },
    {
        message: chalk.yellow("Select One Of The Operator to Perform Operation:"),
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answer.operator === "Addition") {
    console.log(chalk.blue("Answer ="), chalk.yellow(answer.firstNumber + answer.secondNumber));
}
else if (answer.operator === "Subtraction") {
    console.log(chalk.blue("Answer ="), chalk.yellow(answer.firstNumber - answer.secondNumber));
}
else if (answer.operator === "Multiplication") {
    console.log(chalk.blue("Answer ="), chalk.yellow(answer.firstNumber * answer.secondNumber));
}
else if (answer.operator === "Division") {
    console.log(chalk.blue("Answer ="), chalk.yellow(answer.firstNumber / answer.secondNumber));
}
else {
    console.log(chalk.red("Please select valid operator"));
}
