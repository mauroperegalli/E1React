import React from 'react'
import styled  from 'styled-components';

const ContainterGeneral = styled.div`
    background-color: #5f5d5d;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin-left: 10%;
    margin-top: 50px;
    border-radius: 20px;
    row-gap: 30px;
    padding: 30px;

`





export const GeneralWrapper = ({children}) => {
  return (
    <>
    <ContainterGeneral>
        {children}
    </ContainterGeneral>
    </>
  )
}
