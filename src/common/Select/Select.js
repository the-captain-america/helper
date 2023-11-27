import React, { useState, useEffect, useRef } from 'react'

import styled, { css } from 'styled-components'
import { Icon } from '@common/Icon'
import image from './select.png'

const ImageContainer = styled.div`
  border: 3px solid black;
  margin-top: 32px;
  margin-bottom: 32px;
  border-radius: 5px;
`

const Container = styled.div`
  margin: 32px 32px 0px 32px;
`

const Group = styled.ul`
  padding: 0;
  padding-top: 12px;
  padding-bottom: 12px;
  margin: 0;
  list-style: none;
  border-radius: 3px;
  border: 1px solid lightgrey;
  overflow: hidden;
  position: absolute;
  top: calc(100% + 12px);
  width: 100%;
  background: white;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
`

const List = styled.li`
  padding: 0;
  margin: 0;
  list-style: none;
  background: white;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  span {
    margin-left: 8px;
    user-select: none;
  }
  &:hover {
    background: #effaf0;
  }
`

const GroupContainer = styled.div`
  max-width: 220px;
  position: relative;
`

const Header = styled.div`
  padding: 8px;
  border: 2px solid #64d36c;
  display: flex;
  width: 100%;
  border-radius: 5px;
  span {
    user-select: none;
  }
  button {
    border: none;
    background-color: #effaf0;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    margin: 0;
    padding: 0;
    margin-left: auto;
    ${(props) =>
      props.isActive &&
      css`
        transform: rotate(180deg);
      `}
  }
`

const updatedOptions = (label, options) => {
  const result = options.map((curr) => {
    if (curr.label === label) {
      return { ...curr, active: !curr.active }
    }
    return curr
  })
  return result
}

const Select = ({ name, callback, options }) => {
  const ref = useRef()
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const body = document.querySelector('body')

    const handleClick = (event) => {
      if (ref?.current && !ref.current.contains(event.target)) {
        setIsExpanded(false)
      }
    }

    body.addEventListener('click', handleClick)
    ;() => {
      return body.removeEventListener('click', handleClick)
    }
  }, [])

  const renderOptions = options.map((option) => {
    return (
      <List
        onClick={() =>
          callback({ name: name, data: updatedOptions(option.label, options) })
        }
      >
        <Icon name={option.active ? 'CHECKBOX_FILLED' : 'CHECKBOX'} />
        <span>{option.label}</span>
      </List>
    )
  })

  return (
    <GroupContainer ref={ref}>
      <Header isActive={isExpanded} onClick={() => setIsExpanded(!isExpanded)}>
        <span>
          {
            options.filter((option) => {
              return option.active
            }).length
          }
          {' Selected'}
        </span>
        <button>
          <Icon name="CHEVRON" />
        </button>
      </Header>
      {isExpanded && <Group>{renderOptions}</Group>}
    </GroupContainer>
  )
}

const SelectApp = () => {
  const [state, setState] = useState({
    Select1: [
      { label: 'Travel', value: 'Travel', active: false },
      { label: 'Food / Beverage', value: 'Food / Beverage', active: false },
      { label: 'Automotive', value: 'Automotive', active: false },
    ],
  })

  const handleCallback = ({ name, data }) => {
    const newState = { ...state, [name]: data }
    setState(newState)
  }

  return (
    <Container>
      <Select
        name="Select1"
        callback={handleCallback}
        options={state.Select1}
      />
      <ImageContainer className="image">
        <img style={{ width: '400px' }} src={image} />
      </ImageContainer>
    </Container>
  )
}

export default SelectApp
export { Select }
