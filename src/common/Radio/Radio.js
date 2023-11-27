import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import image from './radio.png'

const Container = styled.div`
  margin: 32px 32px 0px 32px;
`

const ImageContainer = styled.div`
  border: 3px solid black;
  margin-top: 32px;
  margin-bottom: 32px;
  border-radius: 5px;
  overflow: hidden;
  img {
    transform: scale(1.2);
    transform-origin: 50% 50%;
  }
`
const Group = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const List = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: flex-start;
  padding: 16px;
  background: white;
  margin-top: 4px;
  position: relative;
  cursor: pointer;
  user-select: none;
  &:before {
    content: '';
    position: relative;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: rgb(100, 211, 108);
  }
  &:after {
    content: '';
    position: absolute;
    background: white;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    top: 21px;
    left: 21px;
    display: none;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.22);
  }
  span {
    font-weight: 700;
    margin-left: 16px;
  }
  ${(props) =>
    props.isActive &&
    css`
      &:after {
        display: block;
      }
    `}
`

const RadioApp = () => {
  const [state, setState] = useState({
    radio1: '',
  })

  const options = [
    { label: 'Option 1', value: 'A', id: 'A' },
    { label: 'Option 2', value: 'B', id: 'B' },
    { label: 'Option 3', value: 'C', id: 'C' },
    { label: 'Option 4', value: 'D', id: 'D' },
  ]

  return (
    <Container>
      <Radio
        name="radio1"
        options={options}
        value={state.radio1}
        callback={({ name, data }) => {
          setState({ ...state, [name]: data })
        }}
      />
      <ImageContainer>
        <img style={{ width: '400px' }} src={image} />
      </ImageContainer>
    </Container>
  )
}

const Radio = ({ options, value, callback, name }) => {
  const renderOptions = () => {
    if (!options || !options.length) return null
    const result = options.map((option) => {
      return (
        <List
          isActive={option.label === value}
          onClick={() => callback({ name: name, data: option.label })}
        >
          <span> {option.label}</span>
        </List>
      )
    })
    return <Group>{result}</Group>
  }

  return (
    <div>
      <h3>Q3: Which radio button do you prefer?</h3>
      {renderOptions()}
    </div>
  )
}

export { RadioApp }
