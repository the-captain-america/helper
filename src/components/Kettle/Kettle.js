import React from 'react'
import styled, { css, keyframes } from 'styled-components'

const waterMove = () => {
  return keyframes`
  0%{
    height: 20px;
  }

  50%{
    height: 40px;
  } 
  
  100%{
    height: 100%;
  }`
}

const steam = () => {
  return keyframes`
  0% {
    transform: translateY(10px) scale(.6);
    opacity: 1;
  }
  100% {
    transform: translateY(-30px) scale(1.2);
    opacity: 0;
  }
  `
}

const KettleContainer = styled.div`
  height: 300px;
  display: flex;
  background: #f7bd4f;
  width: 400px;
  position: relative;
`

const Rhombus = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(1.4);
  width: 80px;
  height: 120px;
  z-index: 1;

  span.steam {
    position: absolute;
    top: -20px;
    right: -20px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    filter: blur(2px);
    background: rgba(255, 255, 255, 0.5);
    animation-name: ${steam};
    animation-duration: 2s;

    animation-timing-function: ease-out;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
    &:nth-child(2) {
      filter: blur(3px);
      background: white;
    }
    &:nth-child(3) {
      filter: blur(1px);
      background: white;
    }
    &:nth-child(4) {
      filter: blur(5px);
      background: white;
    }
    &:nth-child(5) {
      filter: blur(1px);
      background: white;
    }
  }

  &:before {
    content: '';
    position: absolute;
    width: 40px;
    height: 100%;
    background: white;
    transform: skewX(10deg);
    right: 0;
  }
  &:after {
    content: '';
    position: absolute;
    left: 0;
    width: 40px;
    height: 100%;
    background: white;
    transform: skewX(-10deg);
  }

  span.fill {
    position: absolute;
    background: white;
    width: 40px;
    height: 60px;
    top: 60px;
    left: 20px;
  }
`

const Water = styled.div`
  background: #8accdf;
  height: 96px;
  width: 18px;
  position: absolute;
  z-index: 1;
  border-radius: 9px;
  left: 50%;
  transform: translateX(-50%);
  top: 12px;
  overflow: hidden;
  &:before {
    content: '';
    background: #036990;
    position: absolute;
    height: 20px;
    width: 100%;
    bottom: 0px;
    animation-name: ${waterMove};
    animation-duration: 3s;
    animation-timing-function: ease-out;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
  }

  &:hover {
    &:before {
      animation-name: ${waterMove};
    }
  }
`

const Base = styled.div`
  width: 116px;
  height: 16px;
  background: white;
  border-radius: 9px;
  position: absolute;
  top: calc(100% + 3px);
  left: 50%;
  transform: translateX(-50%);
`

const HandleContainer = styled.div`
  position: absolute;
  top: 0;
  width: 80px;
  height: 100px;
  left: -53px;
  top: 10px;

  span {
    display: block;
  }

  span.main-handle {
    position: absolute;
    height: 70px;
    background: white;
    top: 18px;
    left: 30px;
    transform: skew(-10deg);
    width: 6px;

    &:before {
      content: '';
      position: absolute;
      width: 6px;
      height: 20px;
      background: white;
      transform: rotate(90deg);
      left: 10px;
      top: -7px;
    }
    &:after {
      content: '';
      position: absolute;
      width: 6px;
      height: 20px;
      background: white;
      transform: rotate(90deg);
      left: 10px;
      bottom: -7px;
    }
  }
`

const WaterPout = styled.div`
  position: absolute;
  right: -6px;
  top: 10px;
  width: 0;
  height: 0;
  z-index: -2;
  border-top: 12px solid transparent;
  border-left: 20px solid white;
  border-bottom: 12px solid transparent;
  transform: rotate(-30deg);
`

const Kettle = () => {
  const renderSteam = () => {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8].map((l, index) => {
      const style = {
        animationDelay: `${index * 0.2}s`,
      }
      return <span key={index} className="steam" style={style}></span>
    })
  }

  return (
    <KettleContainer>
      <Rhombus>
        <span className="fill"></span>
        <Water />
        <Base />
        {renderSteam()}
        <HandleContainer>
          <span className="main-handle">
            <span className="small-handle"></span>
          </span>
        </HandleContainer>
        <WaterPout />
      </Rhombus>
    </KettleContainer>
  )
}

export default Kettle
