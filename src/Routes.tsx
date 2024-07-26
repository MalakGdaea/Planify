import React, { useState, useEffect } from 'react';
import Onboarding from './screens/auth/Onboarding';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import colors from './constants/colors';
import RootStackParamList from './types/RootStackParamList';
import RootDrawerParamList from './types/RootDrawerParamList.ts';
import SignIn from './screens/auth/SignIn';
import SignUp from './screens/auth/SignUp';
import auth from '@react-native-firebase/auth';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { User } from './types/User';
import Tabs from './components/Tabs';
import AddTask from './screens/app/AddTask';
import DrawerContent from './components/DrawerContent';


function Routes(): React.JSX.Element {
  const Stack = createStackNavigator<RootStackParamList>();
  const Drawer = createDrawerNavigator<RootDrawerParamList>();

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<User>();

  console.log('user => ', user);

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    // return null;
    return <></>;
  }



  if (user) {
    return (
      <Drawer.Navigator screenOptions={{ headerShown: false }} drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Tabs" component={Tabs} />
        <Drawer.Screen name="AddTask" component={AddTask} />
      </Drawer.Navigator>
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: colors.white } }}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

export default React.memo(Routes);
