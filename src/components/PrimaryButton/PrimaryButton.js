import React, { useContext } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { ThemeContext } from 'contexts/ThemeContext';

const PrimaryButton = ({ title, style, titleStyle, disabled, ...props }) => {
  const { theme } = useContext(ThemeContext);
  const baseStyles = theme.components.PrimaryButton;

  const styles = [baseStyles.wrapper];
  const titleStyles = [baseStyles.title];

  if (disabled) {
    styles.push(baseStyles.wrapperDisabled);
    titleStyles.push(baseStyles.titleDisabled);
  }

  styles.push(style);
  titleStyles.push(titleStyle);

  return (
    <TouchableOpacity style={styles} {...props} disabled={disabled}>
      <Text style={titleStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

export { PrimaryButton };
