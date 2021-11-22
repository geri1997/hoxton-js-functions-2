/* 
The users and todos variables have all the data for you to work with
Check your console to see the result of the following console.logs, 
and inspect the data
*/

// console.log("users: ", window.users);

// console.log("todos: ", window.todos);


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

function logIncompleteTasks(){
    let id = Number(prompt('Enter User Id:'))
    console.log(todos.filter(function(todo){
        return todo.completed ===false
    }).filter(function(task){
        return task.userId === id
    }))
}
//"It's perfectly okay to prompt a user for details while other stuff (i.e. the interval) is running."
//Didnt see this until after I finished the exercise.
setTimeout(logIncompleteTasks,(userLetterArray.length) * 2000)


//Challenge
let list = '';
function displayEmailOrAddress(){
    let emailOrAddressInput = prompt('Email or Address:').toLowerCase()
    for(const user of users){
        list +=`${user.name} - ${user[emailOrAddressInput]}\n`
    }
    console.log(list)
}

displayEmailOrAddress()