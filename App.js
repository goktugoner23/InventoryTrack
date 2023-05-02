import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import AddItemScreen from './screens/AddItem';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{
          headerTitle: 'Home',
          headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen 
          name="AddItem" 
          component={AddItemScreen}
          options={{
          headerTitle: 'Add Item',
          headerTitleAlign: 'center',
          }}        
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


