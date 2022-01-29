import React, {useRef, createRef} from 'react';
import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {Home, Profile, Search} from '../../screens';
import {constants, COLORS, FONTS, SIZES} from '../../constants';
import {Shadow} from 'react-native-shadow-2';

let bottom_tabs = constants.bottom_tabs.map(bottom_tab => ({
  ...bottom_tab,
  ref: createRef(),
}));

let Tabs = ({scrollX}) => {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      {/* Tabs */}
      {bottom_tabs.map((item, index) => {
        return (
          <TouchableOpacity
            key={`Bottom-Tab${index}`}
            ref={item.ref}
            style={{
              flex: 1,
              paddingHorizontal: 15,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={item.icon}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
              }}
            />
            <Text
              style={{
                marginTop: 3,
                color: COLORS.white,
                ...FONTS.h3,
              }}>
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const MainLayout = () => {
  let flatList = useRef();
  let scrollX = useRef(new Animated.Value(0)).current;
  let renderContent = () => {
    return (
      <View style={{flex: 1}}>
        <Animated.FlatList
          ref={flatList}
          pagingEnabled
          horizontal
          snapToAlignment="center"
          snapToInterval={SIZES.width}
          decelerationRate="fast"
          showHorizontalScrollIndicator={false}
          data={constants.bottom_tabs}
          keyExtractor={item => `Main-${item.id}`}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          renderItem={({item, index}) => {
            return (
              <View style={{width: SIZES.width, height: SIZES.height}}>
                {item.label == constants.screens.home && <Home />}
                {item.label == constants.screens.search && <Search />}
                {item.label == constants.screens.profile && <Profile />}
              </View>
            );
          }}
        />
      </View>
    );
  };
  let renderBottomTab = () => {
    return (
      <View
        style={{
          marginBottom: 20,
          paddingHorizontal: SIZES.padding,
          paddingVertical: SIZES.radius,
        }}>
        <Shadow size={[SIZES.width - SIZES.padding * 2, 85]}>
          <View
            style={{
              flex: 1,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.primary3,
            }}>
            <Tabs scrollX={scrollX} />
          </View>
        </Shadow>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      {/* Content */}
      {renderContent()}
      {/* Bottom Tab */}
      {renderBottomTab()}
    </View>
  );
};

export default MainLayout;
