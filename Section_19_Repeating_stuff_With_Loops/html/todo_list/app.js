
let input = "";
const array_todo = [];
do {
    input = prompt("What would you like to do?");
    if (input === 'new'){
        input = prompt("Enter new todo");
        array_todo.push(input);
        console.log(`${input} added to list`);
    }else{
        if (input === 'list'){
            console.log("************");
            for(let i = 0; i < array_todo.length;i++){
                console.log(i, array_todo[i]);
            }
            console.log("************");
        }else{
            if (input === 'delete'){
                const indexStr = prompt("What index you would like to remove?");
                const index = parseInt(indexStr);
                if (!Number.isNaN(index)){
                    array_todo.splice(index,1);
                    console.log("TODO LIST REMOVED")
                }else{
                    console.log("Unknown index");
                }
            }
        }
    }

} while( input !== "quit");
console.log("BYE!!!");
