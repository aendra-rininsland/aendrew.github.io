import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import Social from './Social'
import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

const Bio = () => (
  <div
    style={{
      display: 'flex',
      marginBottom: rhythm(1.5),
    }}
  >
    <img
      src={profilePic}
      alt={`Ændrew Rininsland`}
      style={{
        marginRight: rhythm(1 / 2),
        marginBottom: 0,
        width: rhythm(1.5),
        height: rhythm(1.5),
      }}
    />
    <Social />
  </div>
)

export default Bio
