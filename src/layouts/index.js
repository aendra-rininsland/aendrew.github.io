import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'
import DynamicBackground from '../components/DynamicBackground'
import Footer from '../components/Footer'
import { rhythm, scale } from '../utils/typography'

const Template = ({ location, children }) => {
  let header

  let rootPath = `/`
  if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
    rootPath = __PATH_PREFIX__ + `/`
  }

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
          }}
          to={'/'}
        >
          ændrew.com <sub>v8</sub>
        </Link>
      </h1>
    )
  } else {
    // Interior page
    header = (
      <h3
        style={{
          fontFamily: 'Montserrat, sans-serif',
          marginTop: 0,
          // marginBottom: rhythm(-1),
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'rgba(255, 82, 82, 0.83)',
          }}
          to={'/'}
        >
          ændrew.com <sub>v8</sub>
        </Link>
      </h3>
    )
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
        {header}
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
