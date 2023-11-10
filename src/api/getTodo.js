

const getToDoList = () => {
    return localStorage.getItem('myToDo') ? JSON.parse(localStorage.getItem('myToDo')) : []
}

export default getToDoList