import React, { PropTypes } from "react"
import { Link } from "phenomic"
import Svg from "react-svg-inline"

import twitterSvg from "../icons/iconmonstr-twitter-1.svg"
import gitHubSvg from "../icons/iconmonstr-github-1.svg"
import ftSvg from "../icons/ft-logo.svg"
import headerImages from "./header-images.json";

import styles from "./index.css"

const topLevelLinks = [
  {
    path: "/",
    label: "About",
  },
  {
    path: "/blog",
    label: "Blog",
  },
  {
    path: "/projects",
    label: "Projects",
  },
  {
    path: "/contact",
    label: "Contact"
  }
]


const Header = (props, { metadata: { pkg } }) => (
  <header className={ styles.header }>
    <nav className={ styles.nav }>
      <div className={ styles.navPart1 }>
        {topLevelLinks.map(item => (
          <Link
            key={item.label.toLowerCase()}
            className={ styles.link }
            to={item.path}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className={ styles.navPart2 }>
          <a
            href="https://www.ft.com/ændrew-rininsland/"
            className={ styles.link }
          >
            <Svg svg={ ftSvg } />
            { "FT" }
          </a>
          <a
            href={ `https://twitter.com/${pkg.twitter}` }
            className={ styles.link }
          >
            <Svg svg={ twitterSvg } cleanup />
            { "Twitter" }
          </a>
        <a
          href="https://github.com/aendrew"
          className={ styles.link }
        >
          <Svg svg={ gitHubSvg } cleanup />
          { "GitHub" }
        </a>
      </div>
    </nav>
  </header>
)

Header.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export const getRandomHeaderImage = () => {
  return headerImages[Math.floor(Math.random() * headerImages.length)];
};

export default Header;
