import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Routes from './src/Routes';
import colors from './src/constants/colors';
import { Provider } from 'react-redux';
import store from './src/store';

function App(): React.JSX.Element {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.white,
    },
  };

  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
