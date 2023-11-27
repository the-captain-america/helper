import React, { useState } from 'react'
import styled from 'styled-components'
import image from './search.png'

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
    transform: scale(1);
    transform-origin: 50% 50%;
  }
`

const SearchContainer = styled.div`
  margin-bottom: 64px;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    margin: 0;
    padding: 0;
    list-style: none;
    padding: 32px;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
  }
  input {
    padding: 16px;
    border-radius: 4px;
    width: 100%;
    margin-bottom: 24px;
  }
`

const options = [
  { label: 'Sunsets', description: 'Noun', value: 'Sunsets' },
  { label: 'Blue skies', description: 'Adjective', value: 'Blue skies' },
  { label: 'Dark night', description: 'Noun', value: 'Dark night' },
  { label: 'Fairy lights', description: 'Noun', value: 'Fairy lights' },
  { label: 'Ocean shores', description: 'Noun', value: 'Ocean shores' },
]

const SearchApp = () => {
  const [state, setState] = useState([]) // [{ label: 'Sunsets', value: 'Sunsets'}]

  const handleCallback = (val) => {
    console.log(val) // [{ label: 'Sunsets', value: 'Sunsets'}]
    setState(val)
  }

  const renderItems = () => {
    if (!state || !state.length) return null
    const result = state.map((item) => (
      <li key={item.label}>
        <span>{item.label}</span>
        <strong>{item.description}</strong>
      </li>
    ))

    return <ul>{result}</ul>
  }

  return (
    <Container>
      <SearchContainer>
        <Search options={options} callback={handleCallback} />
        {renderItems()}
      </SearchContainer>
      <ImageContainer>
        <img style={{ width: '400px' }} src={image} />
      </ImageContainer>
    </Container>
  )
}

const Search = ({ callback, options }) => {
  // Search needs to receive 2 things,  lists of options (options) and callback
  const [state, setState] = useState('')

  const onChange = (e) => {
    const { value } = e.target
    setState(value)
  }

  const handleCallback = (e) => {
    e.preventDefault()
    if (!state || !state.length) return
    console.log('options', options)
    const payload = options.filter((item) => item.label.includes(state))
    callback(payload)
  }

  return (
    <div>
      <h2>What word do you want to look up?</h2>
      <form onSubmit={handleCallback}>
        <input placeholder="Search..." onChange={onChange} value={state} />
      </form>
    </div>
  )
}

export { Search, SearchApp }
