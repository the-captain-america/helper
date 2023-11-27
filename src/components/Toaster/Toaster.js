import React, { useEffect, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'

const breadJumps = () => {
  return keyframes`
  0% {
    top: 20px;
    height: 170px;
  }
  80% {
    top: -82px;
    height: 180px;
  }
  95% {
    top: -75px;
    height: 160px;
  }
  100% {
    top: -78px;
    height: 170px;
  }`
}

const Container = styled.div`
  position: relative;
  width: 800px;
  height: 480px;
  display: flex;
  background: #f7bd4f;
  display: flex;
`

const ToasterContainer = styled.div`
  width: 480px;
  height: 280px;
  position: absolute;
  top: 60%;
  transform: translateY(-50%);
  left: 30px;
  z-index: 1;
`

const Toaster = styled.div`
  position: relative;
  width: 480px;
  height: 280px;
  background: #8ceeb8;
  border-top-left-radius: 25%;
  border-top-right-radius: 25%;
  border: 6px solid white;
  z-index: 10;
`

const Bread = styled.div`
  width: 200px;
  height: 170px;
  border-radius: 5px;
  background: #af7953;
  position: absolute;
  top: 20px;
  left: 50%;
  z-index: 2;
  border: 5px solid #805c21;
  transform: translate(-50%);
  transition: top 0.2s ease-in-out;
  ${(props) =>
    props.isActive &&
    css`
      animation-name: ${breadJumps};
      animation-duration: 0.4s;
      animation-timing-function: ease-out;
      animation-fill-mode: forwards;
    `}
  &:before {
    content: '';
    position: absolute;
    background: #c79f72;
    width: 250px;
    height: 80px;
    z-index: -1;
    left: 50%;
    top: -20px;
    border-radius: 50%;
    transform: translateX(-50%);
    border: 5px solid #805c21;
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 80px;
    background: #c79f72;
  }
  ul.top {
    list-style: none;
    z-index: 3;
    padding: 0;
    margin: 0;
    width: 100%;
    position: absolute;
    li {
      border-radius: 50%;
      background: #58421a;
      position: absolute;
      width: 10px;
      height: 12px;
      &:nth-child(1) {
        left: 20px;
        top: 30px;
        width: 9px;
        height: 9px;
      }
      &:nth-child(2) {
        left: 50%;
        width: 6px;
        top: 16px;
        height: 7px;
      }
      &:nth-child(3) {
        top: 20px;
        left: calc(100% - 30px);
        width: 8px;
        height: 8px;
      }
    }
  }
  ul.bottom {
    list-style: none;
    z-index: 3;
    padding: 0;
    margin: 0;
    width: 100%;
    top: 40px;
    position: absolute;
    li {
      border-radius: 50%;
      background: #58421a;
      position: absolute;
      width: 10px;
      height: 12px;
      &:nth-child(1) {
        left: 50%;
        width: 6px;
        top: 16px;
        height: 7px;
      }
      &:nth-child(2) {
        left: 40px;
        top: 20px;
        width: 8px;
        height: 8px;
      }
      &:nth-child(3) {
        top: 20px;
        left: calc(100% - 37px);
        width: 9px;
        height: 9px;
      }
    }
  }
`

const Base = styled.div`
  background: #58421a;
  width: 360px;
  height: 10px;
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  &:before {
    content: '';
    height: 20px;
    width: 30px;
    background: #58421a;
    position: absolute;
    left: 0;
    top: 0;
  }
  &:after {
    content: '';
    height: 20px;
    width: 30px;
    background: #58421a;
    position: absolute;
    top: 0;
    right: 0;
  }
`

const Handle = styled.div`
  width: 15px;
  height: 20px;
  background: #58421a;
  position: absolute;
  bottom: calc(50% - 100px);
  transform: rotate(180deg);
  transform: translateX(-100%);
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`

const CabelContainer = styled.div`
  position: absolute;
  width: 480px;
  height: 100%;
  top: -10px;
  left: 50%;
  z-index: 0;
`

const CabelPowerOutlet = styled.div`
  width: 280px;
  height: 140px;
  background: #b8b29c;
  position: absolute;
  border: 6px solid white;
  left: 140px;
  top: 90px;
  z-index: 2;
`

const TriContainer = styled.div`
  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  ul {
    li {
      width: 10px;
      height: 10px;
      background: #a9a28f;
      &:nth-child(1) {
        position: absolute;
        top: 30px;
        right: 50px;
      }
      &:nth-child(2) {
        position: absolute;
        top: 50%;
        right: 70px;
      }
      &:nth-child(3) {
        position: absolute;
        top: 50%;
        right: 25px;
      }
    }
  }
`

const RectContainer = styled.div`
  position: relative;
  left: 50%;
  top: 20px;
  div {
    &:nth-child(1) {
      position: absolute;
      left: -22px;
      background: #716559;
      height: 24px;
      width: 12px;
    }
    &:nth-child(2) {
      position: absolute;
      background: #716559;
      height: 24px;
      width: 12px;
    }
  }
`

const CabelPlugContainer = styled.div`
  position: absolute;
  top: 40px;
  z-index: -10;
  left: 20px;
`

const CabelPlug = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  background: white;
  &:before {
    content: '';
    width: 20px;
    height: 10px;
    background: white;
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
  }
`

const CabelCordContainer = styled.div`
  position: absolute;
  width: 100%;
  span {
    position: absolute;
    background: transparent;
    width: 200px;
    border-top: 12px solid transparent;
    border-right: 12px solid #58421a;
    border-bottom: 12px solid #58421a;
    border-left: 12px solid transparent;
    height: 195px;
    top: 80px;
    left: -52px;
    border-bottom-right-radius: 50px;
    transform: translateX(-50%);
    &:before {
      content: '';
      width: 0;
      height: 0;
      top: -12px;
      right: -12px;
      position: absolute;
      border-style: solid;
      border-width: 13px 12px 0 0;
      border-color: #58421a transparent transparent transparent;
    }
  }
`

const ToasterApp = () => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    document.body.style.backgroundColor = '#d5ceb4'
  })

  return (
    <Container className="main-container">
      <ToasterContainer className="toaster-container">
        <Toaster className="toaster">
          <Handle onClick={() => setIsActive(!isActive)} />
        </Toaster>
        <Bread isActive={isActive}>
          <ul className="top">
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ul className="bottom">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </Bread>
        <Base className="base" />
      </ToasterContainer>
      <CabelContainer className="cabel-container">
        <CabelPowerOutlet className="cabel-outlet">
          <RectContainer className="rect-container">
            <div></div>
            <div></div>
          </RectContainer>
          <TriContainer>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </TriContainer>
          <CabelPlugContainer className="plug-container">
            <CabelPlug className="cabel=plug">
              <CabelCordContainer className="cord-container">
                <span className="cord-a"></span>
              </CabelCordContainer>
            </CabelPlug>
          </CabelPlugContainer>
        </CabelPowerOutlet>
      </CabelContainer>
    </Container>
  )
}

export default ToasterApp
