import { ThemeProvider } from '../components/Theme'
import Layout from '../components/layouts/main';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  
  )
}

export default MyApp
