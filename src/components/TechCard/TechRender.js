import React from 'react'
import { TechCard } from './TechCard'
import { media } from '@utils/media'
import styled from 'styled-components'

const technologiesCard = [
  { label: 'JS', name: 'JS_GRAPHIC' },
  { label: 'HTML', name: 'HTML_GRAPHIC' },
  { label: 'CSS', name: 'CSS_GRAPHIC' },
  { label: 'React', name: 'REACT_GRAPHIC' },
  { label: 'Styled', name: 'STYLED_GRAPHIC' },
]

const TechGroup = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
`

const TechRender = () => {
  return (
    <TechGroup>
      {technologiesCard.map((tech) => {
        return <TechCard key={tech.label} label={tech.label} name={tech.name} />
      })}
    </TechGroup>
  )
}

export { TechRender }
