import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Routes from './src/Routes';
import colors from './src/constants/colors';

function App(): React.JSX.Element {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.white,
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <Routes />
    </NavigationContainer>
  );
}

export default App;
