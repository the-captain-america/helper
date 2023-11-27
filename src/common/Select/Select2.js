import React, { useState } from 'react'
import styled from 'styled-components'

const Header = styled.div`
  width: 100%;
  border: 2px solid #64d36c;
  padding: 10px;
`

const SelectContainer = styled.div`
  max-width: 220px;
  width: 100%;
  margin-top: 8px;
  margin-left: 8px;
  position: relative;
`

const Group = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  top: calc(100% + 8px);
  width: 100%;
  padding: 10px;
  border: 2px solid #64d36c;
`

const List = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
`

const SelectApp = () => {
  const [state, setState] = useState([
    { label: 'Travel', active: false },
    { label: 'Food/Beverage', active: false },
    { label: 'Automotive', active: false },
  ])

  return (
    <Select
      options={state}
      callback={(payload) => {
        setState(payload)
      }}
    />
  )
}

const updatedArray = (selectedOption, options) => {
  const result = options.map((curr) => {
    if (curr.label === selectedOption.label) {
      return { ...curr, active: !curr.active }
    }
    return curr
  })
  return result
}

const Select = ({ options, callback }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleSelect = (option) => {
    const payload = updatedArray(option, options)
    callback(payload)
  }

  const handleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  const renderOptions = () => {
    const result = options.map((option) => {
      return (
        <List
          key={option.label}
          style={{ background: option.active ? 'Green' : 'White' }}
          onClick={() => handleSelect(option)}
        >
          {option.label}
        </List>
      )
    })
    return <Group className="group">{result}</Group>
  }

  const selectedNumber = () => {
    const result = options.filter((option) => {
      return option.active === true
    })
    return result.length
  }

  return (
    <SelectContainer className="select-container">
      <Header className="header" onClick={handleExpand}>
        <span>Selected: {selectedNumber()}</span>
      </Header>
      {isExpanded && renderOptions()}
    </SelectContainer>
  )
}

export default SelectApp
export { Select }
