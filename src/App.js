import { useEffect, useState } from 'react';
import './App.css';
import ToDoForm from './features/ToDoForm';
import ListItem from './features/ListItem';
import getToDoList from './api/getTodo';
import addToDoToBe from './api/addToDoToBE';
import Modal from './components/Modal';
import Button from './components/Button';

function App() {
  const [list, setList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editToDo, setEditToDo] = useState('')

  const addToDo = (title) => {
    const found = list.find((toDo) => toDo.title === title)
    if (found || !title) return alert(found ? 'To do should be uniqe' : 'Title shouldn\'t be empty')
    const newList = [...list, { title: title, checked: false }]
  
    setList(newList)
    addToDoToBe(newList)
    setIsOpen(false)
  };

  const openEditModal = (title) => {
    setEditToDo(title)
  }

  const handleEditToDo = (title) => {
    const newList = list.map((toDo) => {
      if (toDo.title === editToDo) {
        return { ...toDo, title }
      }     
      return toDo
    })

    setList(newList)
    addToDoToBe(newList)
    setEditToDo('')
  }

  const toggleTodo = (title) => {
    const newArr = list.map((toDo) => {
      if (toDo.title === title) {
        return { ...toDo, checked: !toDo.checked }
      }
      return toDo
    })
    setList(newArr)
    addToDoToBe(newArr)
  }

  useEffect(() => {
    const result = getToDoList()
    console.log(result)
    setList(result)
  }, [])



  const renderDoneToDo = list.filter(item => item.checked).map((item) => {
    return <ListItem
      title={item.title}
      checked={item.checked}
      toggle={toggleTodo}
      edit={openEditModal}
      key={item.title} />
  });

  const renderIncompliteToDo = list.filter(item => !item.checked).map((item) => {
    return <ListItem
      title={item.title}
      checked={item.checked}
      toggle={toggleTodo}
      edit={openEditModal}
      key={item.title} />
  });

  return (
    <div>
      <div>
        <Button name={'Add to do'} onClick={() => {
          setIsOpen(true)
        }} />
      </div>

      <div className='toDoListWrapper'>
        <div>
          <h1>In progress:</h1>
          <div className='toDoList'>
            {renderIncompliteToDo}
          </div>
        </div>
        <div>
          <h1>Done</h1>
          <div className='toDoList'>
            {renderDoneToDo}
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <ToDoForm handleChange={addToDo} value='' />
      </Modal>
      <Modal isOpen={editToDo} setIsOpen={setEditToDo}>
        <ToDoForm handleChange={handleEditToDo} value={editToDo} />
      </Modal>
    </div>
  );
}

export default App;
