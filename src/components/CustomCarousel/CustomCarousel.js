import React, { useContext, useState, useEffect } from 'react';
import { Dimensions, View, Text, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';
import Carousel, { getInputRangeFromIndexes } from 'react-native-snap-carousel';

import { ThemeContext } from 'contexts/ThemeContext';

// Prepare animated
const { interpolate, Extrapolate } = Animated;

// Get window dimensions
const { width } = Dimensions.get('window');

// Prepare carousel item width (20px "peak" area)
const itemWidth = 100;
const data = ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7'];

const CustomCarousel = ({ navigation, data }) => {
  const { theme } = useContext(ThemeContext);
  const baseStyles = theme.components.CustomCarousel;

  const [active, setActive] = useState(0);
  const [episodeIds, setEpisodeIds] = useState([]);

  useEffect(() => {
    const ids = [];
    data &&
      data.map(item => {
        ids.push(item.split('/').pop());
      });

    setEpisodeIds([...ids]);
  }, []);

  const onClickEpisodeItem = id => {
    navigation.navigate('EpisodeDetailScreen', { episodeId: id });
  };

  const renderItem = ({ item }) => {
    return (
      <View style={baseStyles.renderView}>
        <TouchableOpacity style={baseStyles.renderContent} onPress={() => onClickEpisodeItem(item)}>
          <Text style={baseStyles.episodeText}>E {item}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={baseStyles.container}>
      <Carousel
        data={episodeIds}
        onBeforeSnapToItem={setActive}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={itemWidth}
        firstItem={0}
        autoplay={true}
        activeSlideAlignment={'start'}
      />
    </View>
  );
};

export { CustomCarousel };
