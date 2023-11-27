import React, { useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { useContext } from 'react'
import { NavigationContext } from '@components/Route'
import { Icon } from '@common/Icon'
import { Grid } from '@common/Grid'
import { media } from '@utils/media'

const groupAppear = () => {
  return keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }`
}

const listAppear = () => {
  return keyframes`
  0% { 
    transform: translateX(400px);
  }
  50% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0px);
  }`
}

const Container = styled.div`
  width: 100%;
  height: 70px;
  background: white;
  position: fixed;
  top: 0;
  z-index: 9999;
  button.github-mobile {
    border: none;
    cursor: pointer;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: relative;
    background: white;
    padding: 48px 0px 48px 0px;
    animation-duration: 0.6s;
    animation-fill-mode: both;
    animation-timing-function: ease-in-out;
    animation-delay: 90ms;
    ${(props) =>
      props.isActive &&
      css`
        animation-name: ${listAppear};
      `};
    span {
      font-size: 16px;
      margin-right: 8px;
      line-height: 21px;
      color: black;
    }
    img {
      height: 24px;
    }
    ${media.xs`
        display: none;
      `}
  }
  button.github-desktop {
    background: none;
    border: none;
    cursor: pointer;
    display: none;
    background: white;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0px;
    top: 50%;
    height: 100%;
    transform: translateY(-50%);
    background: #ffffff;
    transition: all 0.3s ease-in-out;
    &:hover {
      box-shadow:
        7px 7px 17px #cecece,
        -7px -7px 17px #f2f2f2;
    }
    span {
      font-size: 16px;
      margin-right: 8px;
      line-height: 21px;
      color: black;
    }
    img {
      height: 24px;
    }
    ${media.xs`
      display: flex;
    `}
  }
  button.menu {
    position: absolute;
    width: 42px;
    cursor: pointer;
    height: 42px;
    top: 12px;
    right: 10px;
    display: flex;
    background: white;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 0;
    margin: 0;
    ${media.xs`
      display: none;
    `};
  }
  ${media.xs`
    background: white;
  `};
`

const ListItem = styled.li`
  list-style: none;
  padding: 0;
  cursor: pointer;
  margin: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 0px 48px 0px;
  position: relative;
  animation-duration: 0.6s;
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
  &:hover {
    &:after {
      content: '';
      background: rgba(130, 130, 130, 0.2);
      width: 100%;
      height: 2px;
      position: absolute;
      bottom: 0;
    }
    span {
      color: rgba(130, 130, 130, 1);
    }
  }
  ${(props) =>
    props.isActive &&
    css`
      &:nth-child(1) {
        animation-delay: 0s;
      }
      &:nth-child(2) {
        animation-delay: 30ms;
      }
      animation-name: ${listAppear};
    `};

  &.active {
    &:hover {
      span {
        color: black;
      }
    }
    span {
      font-weight: 600;
      font-size: 16px;
    }
  }
  ${media.xs`
    padding: 0px 10px 0px 10px;
    width: unset;
    transform: translateX(0px);
    height: 100%;
    &.active {
      &:after {
        content: '';
        background: black;
        width: 100%;
        height: 2px;
        position: absolute;
        bottom: 0;
      }
    }
  `};
`

const Group = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 0px;
  overflow: hidden;
  position: relative;
  flex-direction: column;
  background: white;
  top: 70px;
  animation-duration: 0.4s;
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
  ${(props) =>
    props.isActive &&
    css`
      height: 100vh;
      animation-name: ${groupAppear};
    `};
  ${media.xs`
    display: flex;
    align-items: center;
    flex-direction: row;
    height: 70px;
    top: 0;
  `};
`
// 420 > =desktop
const NavBar = ({ routes }) => {
  const [isActive, setIsActive] = useState(false)
  const { currentPath, navigate } = useContext(NavigationContext)

  const handleMenu = (path) => {
    navigate(path)
    setIsActive(false)
  }

  const handleGitHub = () => {
    window.open(
      'https://github.com/vinu-codes',
      '_blank',
      'noopener,noreferrer',
    )
  }

  const renderItems = () => {
    if (!routes || !routes.length) return null
    return routes.map((route) => {
      return (
        <ListItem
          isActive={isActive}
          onClick={() => handleMenu(route.path)}
          className={currentPath === route.path ? 'active' : ''}
          key={route.label}
        >
          <span>{route.label}</span>
        </ListItem>
      )
    })
  }

  return (
    <Container isActive={isActive} className="navbar">
      <Grid marginX={0}>
        <Group isActive={isActive} className="group">
          {renderItems()}
          <button onClick={handleGitHub} className="github-mobile">
            <span>Github</span>
            <img src={require('./github.png')} />
          </button>
        </Group>
        <button onClick={handleGitHub} className="github-desktop">
          <span>Github</span>
          <img src={require('./github.png')} />
        </button>
        <button className="menu" onClick={() => setIsActive(!isActive)}>
          <Icon name={isActive ? 'CLOSE' : 'MENU'} stroke="black" size={20} />
        </button>
      </Grid>
    </Container>
  )
}

NavBar.defaultProps = {
  routes: [
    { label: 'Home', path: '/' },
    { label: 'Creative', path: '/creative' },
  ],
}

export default NavBar
