import React, { useState, createRef, useRef } from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div`
  h2 {
    span {
      padding: 8px;
      border-radius: 4px;
      background: red;
    }
  }
`
const List = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
  padding: 16px;

  ${(props) =>
    props.isActive &&
    css`
      span {
        height: 100%;
        position: relative;
        &:before {
          content: '';
          position: absolute;
          bottom: -16px;
          left: 0;
          width: 100%;
          height: 2px;
          background: black;
        }
      }
    `}

  }
`

const Group = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`

const Tabs = ({ active, options, callback }) => {
  const buttonRefs = useRef([])

  buttonRefs.current = options.map((_, index) =>
    buttonRefs.current[index] ? buttonRefs.current[index] : createRef(),
  )

  const [index, setActiveIndex] = useState(0)
  const optionsLength = options.length - 1 // 1 (assuming that we have 2 items in the array)

  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter') {
      callback(id)
    }

    if (e.keyCode === 37 && index > 0) {
      console.log('which arrow button was pressed? - LEFT')
      const newIndex = index - 1
      setActiveIndex(newIndex)
      const node = buttonRefs.current[newIndex]?.current
      node?.focus()
    }
    // Have you pressed the RIGHT ARROW KEY AND the `index` state variable is less than the
    // length of the options array [{ label: 'label 1'}, { label: 'lable 2' }] (minus 1) (because arrays are 0 indexed based)

    if (e.keyCode === 39 && index < optionsLength) {
      console.log('which arrow button was pressed? - RIGHT')
      const newIndex = index + 1
      setActiveIndex(newIndex)
      const node = buttonRefs.current[newIndex]?.current
      node?.focus()
    }
  }

  const renderOptions = () => {
    return options.map((item, index) => (
      <List
        onClick={() => callback(item.id)}
        tabIndex={0}
        key={item.id}
        ref={buttonRefs.current[index]}
        onKeyDown={(e) => handleKeyDown(e, item.id)}
        isActive={active === item.id}
      >
        <span>{item.label}</span>
      </List>
    ))
  }

  return (
    <Container>
      <h2>
        Which tab should be "focused"? <span>{index}</span>
      </h2>
      <Group>{renderOptions()}</Group>
    </Container>
  )
}

export { Tabs }
