import React from "react"

import styles from "./index.css"

const Footer = () => (
  <footer className={ styles.footer }>
    { /* If you like Phenomic, this is a way to share the love ;) */ }
    <p>
      <a href="https://facebook.github.io/react/" className={ styles.phenomicReference }>
        <span className={ styles.phenomicReferenceName }>
        Built with React
        <img alt="" src="assets/react.svg" width="12" height="12" />
        </span>
      </a>&nbsp;|&nbsp;
      <a
        href={ process.env.PHENOMIC_HOMEPAGE }
        className={ styles.phenomicReference }
      >
        { "Website generated with " }
        <span className={ styles.phenomicReferenceName }>
          {  `<${ process.env.PHENOMIC_NAME} />` }
        </span>
      </a>
    </p>
  </footer>
)

export default Footer
