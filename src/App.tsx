import React from 'react';
import { ThemeProvider } from 'styled-components'

import light from './styles/themes/light'
import dark from './styles/themes/dark'
import GlobalStyles from './styles/global'
import Header from './components/header'

function App() {

  const [theme, setTheme] = React.useState(light)

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
