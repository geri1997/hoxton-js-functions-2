/* 
The users and todos variables have all the data for you to work with
Check your console to see the result of the following console.logs, 
and inspect the data
*/

// console.log("users: ", window.users);

// console.log("todos: ", window.todos);


// let userLetter = prompt("Insert a letter:");

// let userLetterArray = users.filter(function(user){
//     return user.name.includes(userLetter)
// })

function returnArrayWhichContainsLetter(letter){
   
    return users.filter(function(user){ 
        return user.name.includes(letter);
    });
}

let userLetterArray = returnArrayWhichContainsLetter(prompt("Insert a letter:"));
let i =0;
function greet(userArr){
    if(i===userArr.length-1)clearInterval(greetInterval);
    console.log(`Hi ${userArr[i].name}`);
   i++
}

const greetInterval = setInterval(greet,2000,userLetterArray)

function logIncompleteTasks(id){
    console.log(todos.filter(function(todo){
        return todo.completed ===false
    }).filter(function(todo){
        return todo.userId===id
     }))
}

setTimeout(logIncompleteTasks(),14000,1)

