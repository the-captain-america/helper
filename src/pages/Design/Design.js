import React from 'react'

import { Grid, Row } from '@common/Grid'

import { Footer } from '@common/Footer'
import { Content } from '@common/Content'
import styled from 'styled-components'

const ImageContainer = styled.div`
  margin-top: 24px;
  img {
    width: 100%;
  }
`

const SwatchContainer = styled.div`
  display: flex;
  width: 100%;
  border: 2px solid black;
  margin-bottom: 24px;
  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
    padding: 16px;
    span {
      color: white;
    }
  }
`

const colors = [
  {
    label: 'blue',
    color: '#6a6cff',
  },
  {
    label: 'navy',
    color: '#2a2b66',
  },
  {
    label: 'grey',
    color: '#828282',
  },
]

const Swatches = () => {
  return (
    <SwatchContainer>
      {colors.map((curr) => (
        <li style={{ background: curr.color }}>
          <span>{curr.color}</span>
        </li>
      ))}
    </SwatchContainer>
  )
}

const DesignPage = () => (
  <>
    <Content>
      <Grid marginX={0}>
        <Row>
          <ImageContainer>
            <Swatches />
            <img src={require('./design.png')} />
          </ImageContainer>
        </Row>
      </Grid>
    </Content>
    <Footer />
  </>
)

export default DesignPage
