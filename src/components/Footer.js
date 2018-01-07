import React from 'react'
import { rhythm, scale } from '../utils/typography'

export default () => (
  <div
    style={{
      fontSize: rhythm(1 / 2),
      lineHeight: rhythm(3 / 4),
      color: 'darkgrey',
    }}
  >
    © {new Date().getFullYear()} Ændrew Rininsland, except where otherwise
    noted. <br />
    Ændrew would like to thank{' '}
    <a href="https://twitter.com/naomipgreen">Naomi Prescod-Green</a> for a
    tremendous number of design and content suggestions over the course of this
    site's development.
  </div>
)
