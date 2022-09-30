  // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

  let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
}]

const fetchTodos = () => {
    // fetch('https://jsonplaceholder.typicode.com/todos')
    // .then( (response) => response.json())
    // .then( (json) => arrayOfTodos = json)

    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      console.log('response:', response)
    //   console.log('response.json():', response.json())
      return response.json()
    })
    .then((json) => {
      console.log('json:', json)
      arrayOfTodos = json
      console.log('arrayOfTodos:', arrayOfTodos)
    });

}

const logTodos = () => {
    console.log(arrayOfTodos)
}

const populateTodos = () => {
  console.log('arrayOfTodos IN POPULATE:', arrayOfTodos)
  let olItem = document.getElementById("todo-list")
  for (let i = 0; i < arrayOfTodos.length; i++) {
    const todo = arrayOfTodos[i];
    console.log('todo:', todo)
    console.log('todo["title"]:', todo['title'])
    
    let text = document.createTextNode(arrayOfTodos[i].title)
    
    let newListItem = document.createElement('LI')
    newListItem.appendChild(text)
    

    console.log('text ->', text)


    olItem.appendChild(newListItem)

    console.log('arrayOfTodos[i].title is ->', arrayOfTodos[i].title)
      
      }
      
    


}

const filterTodos = () => {
  console.log('filterTodos')
  
  // clear elements on page
  // let newList = olItem.
   let newList = olItem
  // get input element by id & // get input value
  let newInput = document.getElementById('id-input').value
  console.log('newInput', newInput)
  
 
  // filter through array of todos to find userId === input.value
  const fTodo = arrayOfTodos.userId

  // get ol parent element
  // create list item
  // create textNode and add filtered todo.title
  // append textNode to list item
  // append list item to parent element
}