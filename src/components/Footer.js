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
    noted.
  </div>
)
