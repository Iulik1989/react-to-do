
const addToDoToBe = (list) => {
    return localStorage.setItem('myToDo', JSON.stringify(list))
}

export default addToDoToBe