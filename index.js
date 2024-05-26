#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let condition = true;
console.log(chalk.magenta.bold("\n \t Welcom To My Todo - List Application \n"));
// while(condition) {
// let todoQuestion = await inquirer.prompt(
//     [
//         {
//             name: "firstQuestion",
//             message: chalk.blue("Enter your  task:"),
//             type:"input"
//         },
//         {
//             name: "secondQuestion",
//             type:"confirm",
//             message: chalk.blue("Do you want to add more task in your todos:"),
//             default: "false"
//         }
//     ]
// )
// todos.push(todoQuestion.firstQuestion)
// console.log(todos)
// condition = todoQuestion.secondQuestion
// }
let task = async () => {
    while (condition) {
        let option = await inquirer.prompt([
            {
                name: "select",
                type: "list",
                message: chalk.blue("Select your options"),
                choices: ["Add Task", "Delete Task", "Update Task", "View Todo List", "Exit"]
            }
        ]);
        if (option.select === "Add Task") {
            await addTask();
        }
        else if (option.select === "Delete Task") {
            await deleteTask();
        }
        else if (option.select === "Update Task") {
            await updateTask();
        }
        else if (option.select === "View Todo List") {
            await viewTask();
        }
        else if (option.select === "Exit") {
            condition = false;
        }
    }
};
// function to add new task in todos list
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.blue("Enter your new task:")
        }
    ]);
    todos.push(newTask.task);
    console.log(chalk.greenBright(`\n ${newTask.task}.\n   task addedd succsessfully in your todos \n`));
};
// fuction to view all todo - List task
let viewTask = () => {
    console.log("\n Here  your Todo-List \n");
    todos.forEach((task2, index) => {
        console.log(chalk.greenBright(`${index + 1}: ${task2} `));
    });
    console.log("\n");
};
//Function to delete a task from list
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: chalk.blue("Enter the 'index no' of the task you want to delete:")
        }
    ]);
    let deletedTask = todos.splice(taskIndex.index - 1, 1);
    console.log(chalk.greenBright(`\n ${deletedTask} this task has been deletd from your list`));
};
//Function to update a task
let updateTask = async () => {
    await viewTask();
    let updatedTaskIndex = await inquirer.prompt([
        {
            name: "update_Index",
            type: "number",
            message: chalk.blue("Enter the 'index no' of the task you want to update:")
        },
        {
            name: "task_name",
            type: "input",
            message: chalk.blue("NOw Enter the new task name:")
        }
    ]);
    todos[updatedTaskIndex.update_Index - 1] = updatedTaskIndex.task_name;
    console.log(chalk.greenBright(`\n Task at index no.${updatedTaskIndex.update_Index - 1} updated succeessfully [For updated lis check option:] "view todo List"]`));
};
task();
