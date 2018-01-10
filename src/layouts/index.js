import React from 'react'
import { Container } from 'react-responsive-grid'
import DynamicBackground from '../components/DynamicBackground'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { rhythm } from '../utils/typography'

const Template = ({ location, children }) => {
  let header

  let rootPath = `/`
  if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
    rootPath = __PATH_PREFIX__ + `/`
  }

  return (
    <div>
      <DynamicBackground />
      <Container
        style={{
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          margin: '0 auto',
          background: 'white',
        }}
      >
        <Header rootPath={rootPath} pathname={location.pathname} />
        {children()}
        <Footer />
      </Container>
    </div>
  )
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
