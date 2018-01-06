import Typography from 'typography'
import ThemeMoraga from 'typography-theme-moraga'

ThemeMoraga.overrideThemeStyles = () => ({
  a: {
    color: 'rgba(255, 82, 82, 0.83)',
  },
  h3: {
    marginBottom: 0,
  },
  'small.date': {
    color: 'darkgrey',
  },
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
})

const typography = new Typography(ThemeMoraga)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
