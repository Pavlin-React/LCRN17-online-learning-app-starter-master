import React from 'react';
import {View, Text, ImageBackground, Image, ScrollView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {dummyData, SIZES, COLORS, FONTS, images, icons} from '../../constants';
import {IconButton, TextButton} from '../../components';

const Home = () => {
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 10,
          marginTop: 40,
          paddingHorizontal: SIZES.padding,
          alignItems: 'center',
        }}>
        {/* Greetings */}
        <View style={{flex: 1}}>
          <Text style={{...FONTS.h2}}>Hello Programers</Text>
          <Text style={{color: COLORS.gray50, ...FONTS.body3}}>
            Thursday 9th September 2021
          </Text>
        </View>
        <IconButton
          icon={icons.notification}
          iconStyle={{tintColor: COLORS.black}}
        />
        {/* Notification */}
      </View>
    );
  }
  let renderStartLearning = () => {
    return (
      <ImageBackground
        source={images.featured_bg_image}
        style={{
          alignItems: 'flex-start',
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          padding: 15,
        }}
        imageStyle={{
          borderRadius: SIZES.radius,
        }}>
        {/* Info */}
        <View>
          <Text style={{color: COLORS.white, ...FONTS.body2}}>HOW TO</Text>
          <Text style={{color: COLORS.white, ...FONTS.h2}}>
            Make your brand more visible with your check list
          </Text>
          <Text
            style={{
              marginTop: SIZES.radius,
              color: COLORS.white,
              ...FONTS.body4,
            }}>
            By Scot Harris
          </Text>
        </View>
        {/* Image */}
        <Image
          source={images.start_learning}
          style={{width: '100%', height: 110, marginTop: SIZES.padding}}
        />
        {/* Button */}
        <TextButton
          label="Start Learning"
          contentContainerStyle={{
            height: 40,
            paddingHorizontal: SIZES.padding,
            borderRadius: 20,
            backgroundColor: COLORS.white,
          }}
          labelStyle={{color: COLORS.black}}
        />
      </ImageBackground>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      {/* Header */}
      {renderHeader()}
      {/* Content */}
      <ScrollView
        contentContainerStyle={{paddingBottom: 150}}
        showsVerticalScrollIndicator={false}>
        {/* Start Learning */}
        {renderStartLearning()}
      </ScrollView>
    </View>
  );
};

export default Home;
