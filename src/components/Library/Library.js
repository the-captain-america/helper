import React, { useState } from 'react'
import { Toggle } from '@common/Toggle'
import styled from 'styled-components'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    margin: 0;
    font-size: 14px;
  }
`

const CardGroup = styled.div`
  background: #f4f4f4;
  border-radius: 10px;
  padding: 16px;
`

const Card = ({ children, title }) => {
  return (
    <CardContainer>
      <CardGroup>{children}</CardGroup>
      <h2> {title}</h2>
    </CardContainer>
  )
}

const Library = () => {
  const [state, setState] = useState({
    Toggle1: true,
  })

  const handleCallback = (data) => {
    setState({ [data.name]: data.value })
  }
  return (
    <Card title="Toggle">
      <Toggle value={state.Toggle1} name="Toggle1" callback={handleCallback} />
    </Card>
  )
}

export { Library }
