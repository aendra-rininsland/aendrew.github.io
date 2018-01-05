import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'
import DynamicBackground from '../components/DynamicBackground'
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
            color: 'inherit',
          }}
          to={'/'}
        >
          ændrew.com <sub>v8</sub>
        </Link>
      </h3>
    )
  }
  return (
    <Container
      style={{
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <DynamicBackground />
      {header}
      {children()}
    </Container>
  )
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
