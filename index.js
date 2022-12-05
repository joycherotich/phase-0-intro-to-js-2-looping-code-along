// Code your solutions in this file
function writeCards(name, event) {
    let newName = [];
    for(let k=0; k<name.length; k++) {
        let message = `Thank you, ${name[k]}, for the wonderful ${event} gift!`
        newName.push(message);
    }
    return newName
}

function countDown(num){
    for(let i=num ; i>=0; i--){
        console.log(i);
    }
}
console.log(countDown(10));