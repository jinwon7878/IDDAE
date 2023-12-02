import React from 'react'
import styled from 'styled-components';

const Title = styled.div`
    margin: 40px auto 20px auto;
    display:flex;
    width: 100%;
    height: auto;
    justify-content:center;
    text-align:center;
    font-size: 2rem;
    font-weight: 800;
`

const Box = styled.div`
    margin: 0 auto;
    padding: 20px 0;
    display:flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 90%;
    height: auto;
    border: 3px solid black;
    border-radius: 12px;

    font-size: 1.2rem;
    font-weight: 600;
`

const Container = ({ title, children }) => {
  return (
    <>
    <Title>{title}</Title>
    <Box>
        {children}
    </Box>
    </>
  )
}

export default Container