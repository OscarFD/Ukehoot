import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import Song from './screens/Song';
import { createStackNavigator } from '@react-navigation/stack';
import SongsList from './screens/SongsList';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={SongsList}
          options={{ title: 'All songs' }}
        />
        <Stack.Screen
          name="Song"
          component={Song}
          options={({ route }) => ({ title: route.params.song.title })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
