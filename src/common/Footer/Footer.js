import React from 'react'
import styled, { css } from 'styled-components'
import { Grid, Row, Col } from '@common/Grid'

const FooterContainer = styled.div`
  flex-shrink: 0;
  background: #424242;
  padding: 24px;
  span {
    color: white;
    font-weight: 600;
  }
`

const Footer = () => {
  return (
    <FooterContainer className="footer">
      <Grid marginX={0}>
        <Row>
          <Col>
            <span>Footer</span>
          </Col>
          <Col>
            <span>Footer</span>
          </Col>
          <Col>
            <span>Footer</span>
          </Col>
        </Row>
      </Grid>
    </FooterContainer>
  )
}
export { Footer }
