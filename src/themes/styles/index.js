import { StyleSheet } from 'react-native';
import { dark, light } from 'themes/colors';

import HomeScreen from './screens/HomeScreen.style';
import Demo1Screen from './screens/DemoScreens/Demo1Screen.style';
import CharacterListScreen from './screens/CharacterListScreen.style';
import CharacterDetailScreen from './screens/CharacterDetailScreen.style';
import EpisodeDetailScreen from './screens/EpisodeDetailScreen.style';
import FilterScreen from './screens/FilterScreen.style';

import NavBar from './components/NavBar.style';
import PrimaryButton from './components/PrimaryButton.style';
import LoadingIndicator from './components/LoadingIndicator.style';
import CharacterListItem from './components/CharacterListItem.style';
import CustomCarousel from './components/CustomCarousel.style';

import fonts from '../fonts';

const createThemedStyles = colors => ({
  name: colors.name,

  HomeScreen: HomeScreen(colors),
  Demo1Screen: Demo1Screen(colors),
  CharacterListScreen: CharacterListScreen(colors),
  CharacterDetailScreen: CharacterDetailScreen(colors),
  EpisodeDetailScreen: EpisodeDetailScreen(colors),
  FilterScreen: FilterScreen(colors),
  
  components: {
    NavBar: NavBar(colors),
    PrimaryButton: PrimaryButton(colors),
    LoadingIndicator: LoadingIndicator(colors),
    CharacterListItem: CharacterListItem(colors),
    CustomCarousel: CustomCarousel(colors),
  },

  fonts: StyleSheet.create(fonts),
});

export const darkTheme = createThemedStyles(dark);
export const lightTheme = createThemedStyles(light);
