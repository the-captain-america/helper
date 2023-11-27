import React from 'react'

import { Grid, Row } from '@common/Grid'
import Toaster from '@components/Toaster'
import Kettle from '@components/Kettle'

import Cup from '@components/Cup'
import Card from '@common/Card'
import { Footer } from '@common/Footer'
import { Content } from '@common/Content'

const CreativePage = () => (
  <>
    <Content>
      <Grid marginX={0}>
        <Row>
          <Card sm={12}>
            <Toaster />
          </Card>
        </Row>
        <Row>
          <Card>
            <Kettle />
          </Card>
          <Card>
            <Cup />
          </Card>
        </Row>
      </Grid>
    </Content>
    <Footer />
  </>
)

export default CreativePage
