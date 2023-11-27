import React from 'react'
import styled from 'styled-components'

const ContentContainer = styled.div`
  margin-top: 70px;
  flex: 1 0 auto;
  background: white;
  padding-bottom: 96px;
`

const Content = ({ children }) => {
  return <ContentContainer className="content">{children}</ContentContainer>
}

export { Content }
