import React, { useContext, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, SafeAreaView, View, Image } from 'react-native';

import IconEnt from 'react-native-vector-icons/Entypo';

import { ThemeContext } from 'contexts/ThemeContext';

import NavBar from 'components/NavBar';
import CustomCarousel from 'components/CustomCarousel';

const _CharacterDetailScreen = ({ navigation, ...props }) => {
  const { theme, color } = useContext(ThemeContext);
  const baseStyles = theme.CharacterDetailScreen;
  
  const [data, setData] = useState(props.route.params.data || {});
  
  const onPressBack = () => {
    navigation.pop();
  };
  
  return (
    <SafeAreaView style={baseStyles.wrapperOuter}>
      <NavBar title={data.name}>
        <IconEnt name="chevron-thin-left" size={30} color={color.alternateBtnBg} onPress={onPressBack} />
      </NavBar>
      <View style={baseStyles.container}>
        <Image source={{ uri: data.image }} style={baseStyles.image} />
        <View style={baseStyles.detailInfoGroup}>
          <View style={baseStyles.detailInfo}>
            <Text style={baseStyles.fieldName}>Name: </Text>
            <Text style={baseStyles.fieldValue}>{data.name}</Text>
          </View>
          <View style={baseStyles.detailInfo}>
            <Text style={baseStyles.fieldName}>Species: </Text>
            <Text style={baseStyles.fieldValue}>{data.species}</Text>
          </View>
          <View style={baseStyles.detailInfo}>
            <Text style={baseStyles.fieldName}>Gender: </Text>
            <Text style={baseStyles.fieldValue}>{data.gender}</Text>
          </View>
          <View style={baseStyles.detailInfo}>
            <Text style={baseStyles.fieldName}>Status: </Text>
            <Text style={baseStyles.fieldValue}>{data.status}</Text>
          </View>
        </View>
      </View>
      <View style={baseStyles.footer}>
        <CustomCarousel navigation={navigation} data={data.episode} />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {},
    dispatch,
  );

const CharacterDetailScreen = connect(mapStateToProps, mapDispatchToProps)(_CharacterDetailScreen);

export { CharacterDetailScreen };
