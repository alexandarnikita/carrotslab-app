import React, {useContext, useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, SafeAreaView, ScrollView, Image, View } from 'react-native';
import moment from 'moment';
import IconEnt from 'react-native-vector-icons/Entypo';

import { ThemeContext } from 'contexts/ThemeContext';
import { getEpisode } from '../../store/actions/character';

import NavBar from 'components/NavBar';
import LoadingIndicator from '../../components/LoadingIndicator';

const _EpisodeDetailScreen = ({ navigation, episode, getEpisode, isFetching, ...props }) => {
  const { theme, color } = useContext(ThemeContext);
  const baseStyles = theme.EpisodeDetailScreen;
  
  useEffect(() => {
    getEpisode(props.route.params.episodeId);
  }, [getEpisode, props.route.params.episodeId]);
  
  const onPressBack = () => {
    navigation.pop();
  };
  
  return (
    <SafeAreaView style={baseStyles.wrapperOuter}>
      <LoadingIndicator isLoading={isFetching} />
      
      <NavBar title={episode.name}>
        <IconEnt name="chevron-thin-left" size={30} color={color.alternateBtnBg} onPress={onPressBack} />
      </NavBar>
      <View style={baseStyles.container}>
        <View style={baseStyles.detailInfoGroup}>
          <View style={baseStyles.detailInfo}>
            <Text style={baseStyles.fieldName}>Name: </Text>
            <Text style={baseStyles.fieldValue}>{episode.name}</Text>
          </View>
          <View style={baseStyles.detailInfo}>
            <Text style={baseStyles.fieldName}>Air Date: </Text>
            <Text style={baseStyles.fieldValue}>{episode.air_date}</Text>
          </View>
          <View style={baseStyles.detailInfo}>
            <Text style={baseStyles.fieldName}>Episode: </Text>
            <Text style={baseStyles.fieldValue}>{episode.episode}</Text>
          </View>
          <View style={baseStyles.detailInfo}>
            <Text style={baseStyles.fieldName}>Created: </Text>
            <Text style={baseStyles.fieldValue}>{moment(episode.created).format('DD.MM.yyyy hh:mm:ss')}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  episode: state.rootReducer.character.episode,
  isFetching: state.rootReducer.character.isFetching,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getEpisode,
    },
    dispatch,
  );

const EpisodeDetailScreen = connect(mapStateToProps, mapDispatchToProps)(_EpisodeDetailScreen);

export { EpisodeDetailScreen };
