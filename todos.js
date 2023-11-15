let input = prompt('What would you like to do?');
const todos = ['(This is one of the tasks)'];

while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('--------------------- \n \n');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`)
        }
        console.log('\n ---------------------');
    } else if (input === 'new') {
        let newTask = prompt('Add new task:');
        todos.push(newTask);
        console.log(`New task added: ${newTask}`)
    } else if (input === 'delete') {
        const index = parseInt(prompt('Which task are you going to delete?'))
        if (!Number.isNaN(index)) {
            console.log(`You deleted '${index}: ${todos[index]}' from the list.`)
            const deleted = todos.splice(index, 1)
        } else {
            console.log('Invalid input.')
        }
    }
    input = prompt('What would you like to do?')
}

console.log('You have quit the app.')