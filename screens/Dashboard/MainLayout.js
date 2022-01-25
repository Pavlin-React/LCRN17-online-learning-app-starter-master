import React, {useRef} from 'react';
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
          snapToAlignment='center'
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
               {item.label == constants.screens.home && <Home/>}
               {item.label == constants.screens.search && <Search/>}
               {item.label == constants.screens.profile && <Profile/>}
              </View>
            );
          }}
        />
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      {/* Content */}
      {renderContent()}
      {/* Bottom Tab */}
    </View>
  );
};

export default MainLayout;
