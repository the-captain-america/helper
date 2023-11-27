import React, { useState } from 'react'
import styled from 'styled-components'
import image from './range.png'
import { Icon } from '../../Icon'

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

const InputContainer = styled.div``

const RangeContainer = styled.div`
  display: flex;
  align-items: center;
  input {
    margin-left: 20px;
    margin-right: 20px;
  }
  span {
    &:first-of-type {
      padding-left: 20px;
    }
    &:last-of-type {
      padding-right: 20px;
    }
  }
`

const RangeApp = () => {
  const [value, setValue] = useState('')

  return (
    <Container>
      <Range
        callback={(val) => {
          setValue(val)
        }}
      />
      <ImageContainer>
        <img style={{ width: '400px' }} src={image} />
      </ImageContainer>
    </Container>
  )
}

const Range = ({ callback }) => {
  const handleChange = (e) => {
    const { value } = e.target
    callback(value)
  }

  return (
    <InputContainer>
      <RangeContainer>
        <Icon name="SAD" size={12} />
        <span>0</span>
        <input type="range" onChange={handleChange} min={0} max={10} />
        <span>10</span>
        <Icon name="SMILE" size={12} />
      </RangeContainer>
      <span>
        Hi this is where we put other text "How happy are yoou blah..."
      </span>
    </InputContainer>
  )
}

export { Range, RangeApp }
