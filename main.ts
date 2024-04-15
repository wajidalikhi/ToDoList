import inquirer from "inquirer";
let todos = []; //this array use, like a shoping bag []
let condition = true;

while (condition) {
  let todoQuestions = await inquirer.prompt([
    {
      name: "firstQuestion",
      type: "input",
      message: "What would you like to add in your todos?",
    },
    {
      name: "secondQuestion",
      type: "confirm", //when type is confirm ansar is yes or no
      message: "Would you like to add more in your todos?",
      default: "true",
    },
  ]);
  if (todoQuestions.firstQuestion === "") {
    console.log("Please Enter Something");
  } else {
    todos.push(todoQuestions.firstQuestion);
    console.log(todos);
    condition = todoQuestions.secondQuestion;
  }
  //the loop is running on tha based of this veriable condition
}
