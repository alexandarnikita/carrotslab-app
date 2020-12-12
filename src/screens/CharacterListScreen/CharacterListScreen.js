import React, { useContext, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SafeAreaView, ScrollView, View, TextInput } from 'react-native';

import { ThemeContext } from 'contexts/ThemeContext';
import { getCharacters, setFilterOptions } from 'store/actions/character';

import PrimaryButton from 'components/PrimaryButton';
import LoadingIndicator from '../../components/LoadingIndicator';
import CharacterListItem from '../../components/CharacterListItem';
import MeterialIcon from 'react-native-vector-icons/MaterialIcons';
import useDebounce from '../../utils/useDebounce';

const _CharacterListScreen = ({
  navigation,
  characters,
  filterOptions,
  isFetching,
  getCharacters,
  setFilterOptions,
}) => {
  const { theme, color } = useContext(ThemeContext);
  const [searchKey, setSearchKey] = useState(filterOptions.name);
  const [currentPageIndex, setCurrentPageIndex] = useState(1);

  const debounceValue = useDebounce(searchKey, 1000);

  const baseStyles = theme.CharacterListScreen;

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  const onPressNextBtn = () => {
    getCharacters({ page: currentPageIndex + 1 }).then(setCurrentPageIndex(currentPageIndex + 1));
  };

  const onPressPrevBtn = () => {
    getCharacters({ page: currentPageIndex - 1 }).then(setCurrentPageIndex(currentPageIndex - 1));
  };

  const onPressCharacterItem = data => {
    navigation.navigate('CharacterDetailScreen', { data: data });
  };

  const onPressFilterBtn = () => {
    navigation.navigate('FilterScreen');
  };

  const onChangeSearchKey = key => {
    setSearchKey(key);
  };

  useEffect(() => {
    if (debounceValue !== '') {
      setFilterOptions({ ...filterOptions, name: debounceValue });
      getCharacters({ name: debounceValue });
    }
  }, [debounceValue]);

  return (
    <SafeAreaView style={baseStyles.wrapperOuter}>
      <LoadingIndicator isLoading={isFetching} />

      <View style={baseStyles.header}>
        <TextInput
          style={baseStyles.searchInput}
          placeholder={'Search'}
          onChangeText={e => onChangeSearchKey(e)}
          value={searchKey}
        />

        <MeterialIcon name="tune" size={35} style={baseStyles.filterBtn} onPress={onPressFilterBtn} />
      </View>
      <ScrollView style={baseStyles.scrollWrapper} contentContainerStyle={baseStyles.scrollContentWrapper}>
        {characters.results &&
          characters.results.map(item => (
            <CharacterListItem key={item.id} {...item} handleClick={() => onPressCharacterItem(item)} />
          ))}
      </ScrollView>
      <View style={baseStyles.footer}>
        <PrimaryButton
          title="Prev Page"
          onPress={onPressPrevBtn}
          style={baseStyles.buttons}
          disabled={!characters.info || !characters.info.prev}
        />
        <PrimaryButton
          title="Next Page"
          onPress={onPressNextBtn}
          style={baseStyles.buttons}
          disabled={!characters.info || !characters.info.next}
        />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  characters: state.rootReducer.character.characters,
  filterOptions: state.rootReducer.character.filterOptions,
  isFetching: state.rootReducer.character.isFetching,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getCharacters,
      setFilterOptions,
    },
    dispatch,
  );

const CharacterListScreen = connect(mapStateToProps, mapDispatchToProps)(_CharacterListScreen);

export { CharacterListScreen };
