import React, { useState } from 'react'
import styled  from 'styled-components';



const Input = styled.input`
  width: 80%;
  height: 30px;
`

const AddButton = styled.button`
  width: 150px;
  height: 30px;
`

const RemoveButton = styled.button`
  width: 150px;
  height: 30px;
`

const Form = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: center;
`

export const TodoList = () => {

  let tasklistt = JSON.parse(localStorage.getItem('tasks')) || []

  const saveLocalStorage = (tasks) => {
      localStorage.setItem('tasks', JSON.stringify(tasks))}

  const [task, settask] = useState(tasklistt);

  const deleteall = () => {
    settask([])
  }

  saveLocalStorage(task);
  console.log("tasklist -->", [task])
  return (
    <>
      <Form onSubmit={e =>{
        e.preventDefault();
        const newtask = e.target.input.value
        settask([...task, newtask])
        }}>
        <Input type="text" placeholder='Ingrese su tarea' name='input'/>
          <AddButton type='submit'>Agregar</AddButton>
      </Form>
      <RemoveButton onClick={deleteall}>Eliminar</RemoveButton>  
      {task.map((e) => <p> {e}</p> )}
    </>
  )
}
