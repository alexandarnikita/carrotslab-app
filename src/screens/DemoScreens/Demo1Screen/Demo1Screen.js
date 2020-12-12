import React, { useContext, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, SafeAreaView, ScrollView } from 'react-native';

import IconEnt from 'react-native-vector-icons/Entypo';
import Filter from 'react-native-vector-icons/MaterialIcons';
import { ThemeContext } from 'contexts/ThemeContext';

import NavBar from 'components/NavBar';

const _Demo1Screen = ({ navigation}) => {
  const { theme, color } = useContext(ThemeContext);
  const baseStyles = theme.Demo1Screen;
  
  const onPressBack = () => {
    navigation.pop();
  };

  return (
    <SafeAreaView style={baseStyles.wrapperOuter}>
      <NavBar title={'Filter'}>
        <IconEnt name="chevron-thin-left" size={30} color={color.alternateBtnBg} onPress={onPressBack} />
      </NavBar>

      <ScrollView style={baseStyles.scrollWrapper} contentContainerStyle={baseStyles.scrollContentWrapper}>
        <Text>Demo 1 Screen, has scroll view</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {},
    dispatch,
  );

const Demo1Screen = connect(mapStateToProps, mapDispatchToProps)(_Demo1Screen);

export { Demo1Screen };
