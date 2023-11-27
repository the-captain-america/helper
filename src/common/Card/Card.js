import React from 'react'
import styled from 'styled-components'
import { Col } from '@common/Grid'

const CardContainer = styled.div`
  width: 100%;
  border: 6px solid white;
  margin-top: 32px;
`

const Card = ({ children, ...props }) => {
  return (
    <Col {...props}>
      <CardContainer>{children}</CardContainer>
    </Col>
  )
}

export default Card
