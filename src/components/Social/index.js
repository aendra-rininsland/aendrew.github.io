/**
 * Social links component
 */

import React from 'react';
import styles from './index.css';

const items = [
  {
    label: 'FT.com',
    url: 'https://www.ft.com/ændrew-rininsland',
  },
  {
    label: 'Twitter',
    url: 'https://www.twitter.com/aendrew/'
  },
  {
    label: 'GitHub',
    url: 'https://www.github.com/aendrew',
  },
  {
    label: 'Keybase',
    url: '',
  },
  {
    label: 'Soundcloud',
    url: '',
  },
  {
    label: 'Flickr',
    url: '',
  },
  {
    label: 'Instagram',
    url: '',
  }
];

export default function SocialLinks() {
  return (
    <aside>
      <h2>Elsewhere online</h2>
      <ul>
        {
          items.map(item =>
            <li>
              <a href={item.url}>
                <img src={item.icon} className={styles.icon} />
                {item.label}
              </a>
            </li>
          )
        }
      </ul>
    </aside>
  );
}
