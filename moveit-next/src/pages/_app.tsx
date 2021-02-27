import '../styles/global.css';

import { ChallengesContextProvider } from '../contexts/ChallengesContext';

function MyApp({ Component, pageProps }) {
  return (
    < Component {...pageProps} />
  )
}

export default MyApp
