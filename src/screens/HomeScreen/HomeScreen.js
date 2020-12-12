import React, { useContext, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Text, SafeAreaView, Image } from 'react-native';

import { ThemeContext } from 'contexts/ThemeContext';

import HipsLogoBlueSvg from 'assets/images/HipsLogoBlueSvg';
import imgHipsLogo from 'assets/images/HipsLogo.png';

import PrimaryButton from 'components/PrimaryButton';

const _HomeScreen = ({ navigation }) => {
  const { theme, toggle } = useContext(ThemeContext);
  const baseStyles = theme.HomeScreen;

  const onPressButton1 = () => {
    console.log('App: HomeScreen: goto demo page');

    navigation.reset({
      index: 0,
      routes: [{ name: 'CharacterListScreen' }],
    });
  };

  return (
    <SafeAreaView style={baseStyles.wrapperOuter}>
      <HipsLogoBlueSvg style={baseStyles.imgLogo} />

      <Text>Home Screen</Text>

      <Button title="Toggle Theme" onPress={toggle} style={baseStyles.buttons} />

      <PrimaryButton title="Goto Demo Page1" onPress={onPressButton1} style={baseStyles.buttons} />

      <Image source={imgHipsLogo} style={baseStyles.imgLogo2} />
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {},
    dispatch,
  );

const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(_HomeScreen);

export { HomeScreen };
