import React, { useState, useEffect } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { Icon } from '../../Icon'
import image from './credit.png'

const AccordionContainer = styled.div`
  width: 100%;
  box-shadow: 2px 2px 13px -6px rgba(0, 0, 0, 0.24);
  border-radius: 4px;
  padding-right: 56px;
  padding-left: 56px;
  padding-bottom: 56px;
  background: white;
  max-height: 90px;
  height: 90px;
  user-select: none;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  margin-bottom: 16px;
  ${(props) =>
    props.isActive &&
    css`
      height: 100%;
      max-height: 300px;
      transform: scale(1.05);
      margin-top: 20px;
      margin-bottom: 20px;
    `}
  button {
    background: #fe6c0a;
    border: none;
    padding: 16px;
    border-radius: 10px;
    margin-top: 16px;
    color: white;
    font-size: 16px;
    font-weight: 500;
  }
`

const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
`

const Title = styled.h2`
  margin: 0;
`

const SubTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  margin-top: 8px;
`

const AccordionContent = styled.div`
  padding-top: 32px;
`

const AccordionIcon = styled.div`
  margin-left: auto;
  transition: all 0.2s ease-in-out;
  svg path {
    fill: black;
  }
  ${(props) =>
    props.isActive &&
    css`
      transform: rotate(180deg);
    `}
`
const AccordionGraphic = styled.div`
  width: 48px;
  height: 48px;
  ${(props) =>
    props.imageSrc &&
    css`
      background-image: url(${props.imageSrc});
      background-size: 100% 100%;
      background-repeat: no-repeat;
    `}
`

const HeadingContent = styled.div`
  margin-left: 16px;
`

const Accordion = ({ title, image, detail, children }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <AccordionContainer isActive={isExpanded}>
      <AccordionHeader onClick={() => setIsExpanded(!isExpanded)}>
        <AccordionGraphic imageSrc={image}></AccordionGraphic>
        <HeadingContent>
          <Title>{title}</Title>
          <SubTitle>{detail}</SubTitle>
        </HeadingContent>
        <AccordionIcon isActive={isExpanded}>
          <Icon name="CHEVRON" size={48} />
        </AccordionIcon>
      </AccordionHeader>
      <AccordionContent>{children}</AccordionContent>
    </AccordionContainer>
  )
}

const AccordionWrapper = styled.div`
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 72px;
`

const AccordionApp = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#dedde5'
  }, [])
  return (
    <AccordionWrapper>
      <Accordion
        title="Credit Card"
        image={image}
        detail="New adventures and shopping delights, ready for you"
      >
        <span>Interest free credit</span>
        <div>
          <button>Try bank card</button>
        </div>
      </Accordion>
    </AccordionWrapper>
  )
}

export { Accordion, AccordionApp }
