import React from 'react'
import styled, { keyframes } from 'styled-components'
import cup from './cup.png'

const Wrapper = styled.div`
  position: relative;
  height: 300px;
  width: 400px;
  background: #f7bd4f;
`

const Cup = styled.div`
  position: absolute;
  height: 140px;
  width: 180px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: transparent;
  border: 6px solid white;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  border-bottom-right-radius: 70px;
  border-bottom-left-radius: 70px;
  border-radius: 0 0 70px 70px;
`

// short hand

const Handle = styled.div`
  height: 70px;
  width: 40px;
  border: 6px solid white;
  position: relative;
  left: 100%;
  border-radius: 0 25px 80px 0;
`

const LiquidContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  border-radius: 0 0 70px 70px;
`

const animateLiquid = () => {
  return keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }
  33% {
    transform: rotate(-4deg) scale(1.1);
  }
  66% {
    transform: rotate(4deg) scale(1.1);
  }
  100% {
    transform: rotate(0deg) scale(1);
  }
  `
}
const animateLiquidCircle = () => {
  return keyframes`
  0% {
    height: 10px;
  }
  50% {
    height: 14px;
  }
  100% {
    height: 10px;
  }
  `
}

const Liquid = styled.div`
  position: relative;
  width: 170px;
  height: 100%;
  top: -30px;
  animation-name: ${animateLiquid};
  animation-duration: 2s;
  animation-timing-function: ease-out;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 65px;
    background: #805c21;
  }
`

const LiquidCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  width: 100%;
  height: 10px;
  background: #af7953;
  top: 60px;
  left: 0px;
  animation-name: ${animateLiquidCircle};
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
`

const CoffeeCup = () => {
  return (
    <div>
      <Wrapper className="main-wrapper">
        <Cup className="cup">
          <Handle className="handle" />
          <LiquidContainer>
            <Liquid>
              <LiquidCircle className="circle" />
            </Liquid>
          </LiquidContainer>
        </Cup>
      </Wrapper>
      {/* <img src={cup} /> */}
    </div>
  )
}

export default CoffeeCup
