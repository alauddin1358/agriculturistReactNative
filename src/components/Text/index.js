import React, { Component } from 'react';
import { Text as Typography, StyleSheet } from 'react-native';

import { colors, sizes, fonts } from '../../styles/theme';

export default class Text extends Component {
  render() {
    const {
      h1,
      h2,
      h3,
      title,
      body,
      caption,
      header,
      small,
      size,
      transform,
      align,
      // styling
      regular,
      bold,
      medium,
      weight,
      light,
      upperCase,
      bottom,
      center,
      right,
      spacing,
      height, // line-height
      // colors
      color,
      red,
      primary,
      primary2,
      secondary,
      green,
      lime,
      black,
      white,
      gray,
      lightGrey,
      textColorDark,
      textColorBlue,
      textColorPink,
      textColor,
      textColor2,
      textColor3,
      dodgerBlue,
      tacha,
      style,
      children,
      ...props
    } = this.props;

    const textStyles = [
      styles.text,
      h1 && styles.h1,
      h2 && styles.h2,
      h3 && styles.h3,
      title && styles.title,
      body && styles.body,
      caption && styles.caption,
      header && styles.header,
      small && styles.small,
      size && { fontSize: size },
      transform && { textTransform: transform },
      align && { textAlign: align },
      height && { lineHeight: height },
      spacing && { letterSpacing: spacing },
      weight && { fontWeight: weight },
      regular && styles.regular,
      bold && styles.bold,
      medium && styles.medium,
      light && styles.light,
      upperCase && styles.upperCase,
      center && styles.center,
      bottom && styles.bottom,
      right && styles.right,
      color && styles[color],
      color && !styles[color] && { color },
      // color shortcuts
      primary && styles.primary,
      primary2 && styles.primary2,
      secondary && styles.secondary,
      red && styles.red,
      green && styles.green,
      lime && styles.lime,
      black && styles.black,
      white && styles.white,
      tacha && styles.tacha,
      gray && styles.gray,
      lightGrey && styles.lightGrey,
      textColorDark && styles.textColorDark,
      textColor && styles.textColor,
      textColor2 && styles.textColor2,
      textColor3 && styles.textColor3,
      textColorBlue && styles.textColorBlue,
      textColorPink && styles.textColorPink,
      dodgerBlue && styles.dodgerBlue,
      style
    ];

    return (
      <Typography style={textStyles} {...props}>
        {children}
      </Typography>
    );
  }
}

const styles = StyleSheet.create({
  // default style
  text: {
    fontSize: sizes.font,
    color: colors.textColorLight,
  },
  // Font Weight
  regular: {
    fontWeight: "normal",
  },
  bold: {
    fontWeight: "bold",
  },
  medium: {
    fontWeight: "500",
  },
  light: {
    fontWeight: "200",
  },
  upperCase: {
    textTransform: "uppercase",
  },
  // position
  center: { textAlign: "center" },
  bottom: { alignSelf: "flex-end" },
  right: { textAlign: "right" },
  // colors
  red: { color: colors.red },
  primary: { color: colors.primary },
  primary2: { color: colors.primary2 },
  secondary: { color: colors.secondary },
  green: { color: colors.green },
  lime: { color: colors.lime },
  black: { color: colors.black },
  white: { color: colors.white },
  tacha: { color: colors.tacha },
  gray: { color: colors.gray },
  lightGrey: { color: colors.lightGrey },
  textColorDark: { color: colors.textColorDark },
  textColor: { color: colors.textColor },
  textColor2: { color: colors.textColor2 },
  textColor3: { color: colors.textColor3 },
  textColorBlue: { color: colors.textColorBlue },
  textColorPink: { color: colors.textColorPink },
  dodgerBlue: { color: colors.dodgerBlue },
  // fonts
  h1: fonts.h1,
  h2: fonts.h2,
  h3: fonts.h3,
  title: fonts.title,
  body: fonts.body,
  caption: fonts.caption,
  header: fonts.header,
  small: fonts.small
});