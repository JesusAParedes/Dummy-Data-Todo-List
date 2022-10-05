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
  console.log('arrayofTodos', arrayOfTodos)
  // clear elements on page
  let clear = document.getElementById("todo-list").innerHTML = ""
  // let newList = olItem.
  // get input element by id 
  let input = document.getElementById('id-input')
  //  get input value
  let newInput = input.value
    console.log('newInput', newInput)
  let num1 = parseInt(newInput)
  
  console.log('num1', parseInt(newInput))
  // filter through array of todos to find userId === input.value

  const todo = arrayOfTodos
  console.log('userId', todo['userId'])
  console.log('todo.userId === num1', todo[1].userId === num1)
  
  const fx = todo.filter((filter) => {
      // const filter = todo[i].userId
      console.log('arrayofTodos[i]***', filter)
      if (filter.userId === num1) {
        console.log('do they match')
        return filter;
      }
  }
  )
  console.log('they match', fx)


  // get ol parent element
  // create list item
  // create textNode and add filtered todo.title
  // append textNode to list item
  // append list item to parent element

  
  for (let i = 0; i < fx.length; i++) {

  let olerItem = document.getElementById("todo-list")

    let text = document.createTextNode(fx[i].title)
    

    
    let newerListItem = document.createElement('LI')
    newerListItem.appendChild(text)
    
    console.log('text ->', text)

    olerItem.appendChild(newerListItem)

    console.log('fx.title is ->', fx[i].title)
  
} }

    // My other attempts at the filter method //

            //   if (userId.value === num1) {
  //   return filteredArray } 
  //   else return false
  // })
  // console.log('filteredArray', filteredArray)



  // const filteredArray = arrayOfTodos.filter((userId) => {
  //   for (let i = 0; i < arrayOfTodos.length; i++) {
  //     console.log('arrayofTodos[i]***', arrayOfTodos[i])
  //     if (userId === num1) {
  //       fTodo.push(arrayOfTodos)
  //       console.log('they match')
  //     }
  //   }
  // })
  // console.log('fTodo ->', fTodo)
  //   }
//     // (userId === num1) {
//     //   return fTodo
//     // } else return false
    
//   })


const removeTodos = () => {}

const completeTodos = () => {}