import Typography from 'typography'
import ThemeMoraga from 'typography-theme-moraga'

ThemeMoraga.overrideThemeStyles = () => ({
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
