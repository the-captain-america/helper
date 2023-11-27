import React, { useState } from 'react'

import { Grid, Row } from '@common/Grid'

import { Footer } from '@common/Footer'
import Card from '@common/Card'
import { Content } from '@common/Content'
import { Tabs } from '@common/Tabs'
import { TechRender } from '@components/TechCard'

const options = [
  { label: 'label 1', id: 'label1' },
  { label: 'label 2', id: 'label2' },
]

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState('')

  const handleCallback = (data) => {
    setActiveTab(data)
  }

  return (
    <>
      <Content>
        <Grid marginX={0}>
          <Row>
            <Card sm={12}>
              <Tabs
                options={options}
                callback={handleCallback}
                active={activeTab}
              />
            </Card>
          </Row>
          <Row>
            <TechRender />
          </Row>
        </Grid>
      </Content>
      <Footer />
    </>
  )
}

export default LandingPage
