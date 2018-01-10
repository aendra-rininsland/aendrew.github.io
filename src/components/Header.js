import React from 'react'
import Link from 'gatsby-link'
import { rhythm, scale } from '../utils/typography'

export default ({ pathname, rootPath }) => {
  if (pathname === rootPath) {
    return (
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
    return (
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
}
