import React, { useContext, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Text, SafeAreaView, View, TouchableOpacity, ScrollView} from 'react-native';
import styled, { css } from 'styled-components/native';
import IconEnt from 'react-native-vector-icons/Entypo';
import { ThemeContext } from 'contexts/ThemeContext';

import { setFilterOptions, getCharacters } from '../../store/actions/character';

import NavBar from 'components/NavBar';
import PrimaryButton from '../../components/PrimaryButton';

const filters = {
  name: {
    name: 'Status',
    options: ['Alive', 'Dead', 'unknown'],
  },
  species: {
    name: 'Species',
    options: ['Human', 'Alien'],
  },
  type: {
    name: 'Type',
    options: [
      'Genetic Experiment',
      'Superhuman (Ghost trains summoner)',
      'Parasite',
      'Human with antennae',
      'Human with ants in his eyes',
    ],
  },
  gender: {
    name: 'Gender',
    options: ['Male', 'Female', 'genderless', 'unknown'],
  },
};

const _Demo1Screen = ({ navigation, filterOptions, setFilterOptions, getCharacters }) => {
  const { theme, color } = useContext(ThemeContext);
  const baseStyles = theme.FilterScreen;

  const [options, setOptions] = useState({ ...filterOptions });

  const onPressBack = () => {
    navigation.pop();
  };

  const handleChange = (option, value) => {
    const newOptions = { ...options };
    newOptions[option] = value;
    setOptions(newOptions);
  };

  const onPressApplyBtn = () => {
    setFilterOptions(options);
    getCharacters(options);
    navigation.pop();
  };

  return (
    <SafeAreaView style={baseStyles.wrapperOuter}>
      <NavBar title={'Filter'}>
        <IconEnt name="chevron-thin-left" size={30} color={color.alternateBtnBg} onPress={onPressBack} />
      </NavBar>
      <ScrollView>
        <View style={baseStyles.container}>
          <FilterGroup styles={baseStyles} data={filters.name} currentOptions={options} handleChange={handleChange} />
          <FilterGroup styles={baseStyles} data={filters.species} currentOptions={options} handleChange={handleChange} />
          <FilterGroup
              styles={baseStyles}
              data={filters.type}
              currentOptions={options}
              handleChange={handleChange}
              isVertical={true}
          />
          <FilterGroup styles={baseStyles} data={filters.gender} currentOptions={options} handleChange={handleChange} />
        </View>

        <View style={baseStyles.footer}>
          <PrimaryButton title="Apply Filter" onPress={onPressApplyBtn} style={baseStyles.buttons} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const FilterGroup = ({ styles, data, currentOptions, handleChange, isVertical }) => {
  return (
    <View style={styles.filterGroup}>
      <Text style={styles.filterName}>{data.name}: </Text>
      <Filters isVertical={isVertical}>
        {data.options.map(item => (
          <FilterItem
            key={item}
            isActive={item === currentOptions[data.name.toLowerCase()]}
            onPress={() => handleChange(data.name.toLowerCase(), item)}
          >
            <Text style={styles.optionText}>{item}</Text>
          </FilterItem>
        ))}
      </Filters>
    </View>
  );
};

const Filters = styled.View`
  flex-direction: row;
  ${props =>
    props.isVertical &&
    css`
      flex-direction: column;
    `}
`;

const FilterItem = styled(TouchableOpacity)`
  background-color: gray;
  color: white;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0);
  padding: 5px 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  ${props =>
    props.isActive &&
    css`
      background-color: #8cc178;
    `}
`;

const mapStateToProps = state => ({
  filterOptions: state.rootReducer.character.filterOptions,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setFilterOptions,
      getCharacters,
    },
    dispatch,
  );

const FilterScreen = connect(mapStateToProps, mapDispatchToProps)(_Demo1Screen);

export { FilterScreen };
