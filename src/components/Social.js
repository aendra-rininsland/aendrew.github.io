import React from 'react'
import GitHub from 'react-icons/lib/fa/github'
import Twitter from 'react-icons/lib/fa/twitter'
import LinkedIn from 'react-icons/lib/ti/social-linkedin'
import SoundCloud from 'react-icons/lib/fa/soundcloud'
import Instagram from 'react-icons/lib/fa/instagram'
import FTLogo from './ft-icon'
import Tinder from './tinder-icon'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

class Social extends React.Component {
  constructor(props) {
    super(props)
    this.platforms = [
      {
        title: 'Financial Times',
        icon: <FTLogo />,
        url: 'https://www.ft.com/ændrew-rininsland',
      },
      {
        title: 'Twitter',
        icon: <Twitter />,
        url: 'https://twitter.com/aendrew',
      },
      {
        title: 'GitHub',
        icon: <GitHub />,
        url: 'https://github.com/aendrew',
      },
      {
        title: 'LinkedIn',
        icon: <LinkedIn />,
        url: 'https://www.linkedin.com/in/aendrew/',
      },
      {
        title: 'SoundCloud',
        icon: <SoundCloud />,
        url: 'https://soundcloud.com/aendrew',
      },
      {
        title: 'Instagram',
        icon: <Instagram />,
        url: 'https://instagram.com/aendrewdotcom',
      },
      {
        title: 'Tinder?!lol',
        icon: <Tinder />,
        url: 'https://gotinder.com/@aendrew',
      },
    ]
  }

  render() {
    return (
      <div>
        {this.platforms.map((item, idx) => (
          <a
            key={idx}
            style={{ fontSize: '3em' }}
            href={item.url}
            title={item.title}
          >
            {item.icon}
          </a>
        ))}
      </div>
    )
  }
}

export default Social
