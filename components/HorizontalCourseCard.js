import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS, FONTS, SIZES, icons } from '../constants';
import { IconLabel } from '../components';

const HorizontalCourseCard = ({containerStyle, course}) => {
  return (
    <TouchableOpacity style={{
      flexDirection: 'row',
      ...containerStyle
    }} >
      {/* Thumbnail */}
      <ImageBackground
        source={course.thumbnail}
        resizeMode='cover'
        style={{
          width: 130,
          height: 130,
          marginBottom: SIZES.radius
        }}
        imageStyle={{
          borderRadius: SIZES.radius
        }}
      >

      </ImageBackground>
    </TouchableOpacity>
  );
};

export default HorizontalCourseCard;
