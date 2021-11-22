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
    users.filter(function(user){ 
        return user.name.includes(letter)
    })
}

let userLetterArray = returnArrayWhichContainsLetter(prompt("Insert a letter:"))

console.log(userLetterArray)
function greet(userArr){
    
    let i =0
    console.log(`Hi ${userArr[i].name}`)

   i++
}

// setInterval(greet,2000,userLetterArray)