import React from 'react'
import  styled  from 'styled-components';


const Taskk = styled.div`
    background-color: red;
    height: auto;
    width: 80%;
`

export const Task = (tarea) => {
  return (
    <>

        <Taskk>{tarea}</Taskk>
        
    </>
  )
}
