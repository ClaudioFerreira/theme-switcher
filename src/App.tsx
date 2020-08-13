import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components'
import usePersistedState from './utils/usePersistedState'

import light from './styles/themes/light'
import dark from './styles/themes/dark'
import GlobalStyles from './styles/global'
import Header from './components/header'

function App() {

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const tootleTheme = () => {
    setTheme(theme.tittle === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <Header tootleTheme={tootleTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
