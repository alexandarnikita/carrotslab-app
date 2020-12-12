import React, { useContext } from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';

import { ThemeContext } from 'contexts/ThemeContext';
import profile_img from 'assets/images/profile.png';

const CharacterListItem = ({ name, status, image, handleClick, ...props }) => {
  const { theme } = useContext(ThemeContext);
  const baseStyles = theme.components.CharacterListItem;
  const statusStyles =
    status === 'Alive' ? [baseStyles.alive] : status === 'Dead' ? [baseStyles.dead] : [baseStyles.unknown];

  return (
    <TouchableOpacity style={baseStyles.wrapper} onPress={handleClick}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={profile_img} style={baseStyles.image} alt="Character Image" />
        <Text style={baseStyles.name}>{name}</Text>
      </View>
      <Text style={[baseStyles.status, statusStyles]}>{status}</Text>
    </TouchableOpacity>
  );
};

export { CharacterListItem };
