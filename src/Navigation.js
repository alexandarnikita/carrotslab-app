import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CharacterListScreen from 'screens/CharacterListScreen';
import CharacterDetailScreen from 'screens/CharacterDetailScreen';
import EpisodeDetailScreen from 'screens/EpisodeDetailScreen';
import FilterScreen from 'screens/FilterScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CharacterListScreen" headerMode="none">
        <Stack.Screen name="CharacterListScreen" component={CharacterListScreen} />
        <Stack.Screen name="CharacterDetailScreen" component={CharacterDetailScreen} />
        <Stack.Screen name="EpisodeDetailScreen" component={EpisodeDetailScreen} />
        <Stack.Screen name="FilterScreen" component={FilterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { Navigation };
