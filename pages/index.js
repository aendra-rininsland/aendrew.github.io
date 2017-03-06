import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import './index.scss';

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Portfolio site for Ændrew Rininsland"},
            {"name": "keywords", "content": "portfolio,Ændrew"},
          ]}
        />
        <h1 className="party">
          o shit waddup
        </h1>
        <p>ændrew rininsland is a journalist and developer in London.</p>
        <p>he's super serious. super serious journalist. mmhmm.</p>
        <h3>Selected work</h3>
        <ul>
          <li>
            <strong>Financial Times</strong>
            <ul>
              <li><Link to={prefixLink('/markdown/')}>Markdown</Link></li>
              <li><Link to={prefixLink('/markdown/')}>Markdown</Link></li>
              <li><Link to={prefixLink('/markdown/')}>Markdown</Link></li>
              <li><Link to={prefixLink('/markdown/')}>Markdown</Link></li>
            </ul>
          </li>
          <li>
            <strong>The Times and Sunday Times</strong>
            <ul>
              <li><Link to={prefixLink('/markdown/')}>Markdown</Link></li>
              <li><Link to={prefixLink('/markdown/')}>Markdown</Link></li>
              <li><Link to={prefixLink('/markdown/')}>Markdown</Link></li>
              <li><Link to={prefixLink('/markdown/')}>Markdown</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}
