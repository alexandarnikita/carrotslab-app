import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import { ThemeContext } from 'contexts/ThemeContext';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const LoadingIndicator = ({ isLoading }) => {
  const { theme } = useContext(ThemeContext);
  const baseStyles = theme.components.LoadingIndicator;
  const [spinValue] = useState(new Animated.Value(0));

  // First set up animation
  Animated.timing(spinValue, {
    toValue: 1,
    duration: 3000,
    easing: Easing.linear,
    useNativeDriver: true,
  }).start();

  useEffect(() => {
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
      boomerang: true,
    }).start();
  }, []);

  // Second interpolate beginning and end values (in this case 0 and 1)
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  if (isLoading) {
    return (
      <View style={baseStyles.wrapper}>
        <Animated.View style={{ transform: [{ rotate: spin }], width: 60, height: 60 }} iterationCount={'infinite'} direction="alternate">
          <FontAwesome name="spinner" color="#000000" size={60} />
        </Animated.View>
      </View>
    );
  } else {
    return false;
  }
};

export { LoadingIndicator };
