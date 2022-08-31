import StatusBar from '@/components/StatusBar';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';
import { useAtom } from 'jotai';
import React from 'react';
import Navigations from './navs';

import { activeThemeAtom } from './state/theme';

const App = () => {
  const [activeTheme] = useAtom(activeThemeAtom);

  return (
    <NavigationContainer>
      <ThemeProvider theme={activeTheme}>
        <StatusBar />
        <Navigations />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
