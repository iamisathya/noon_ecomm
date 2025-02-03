import React from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import {Banner} from '../types';

const {width: screenWidth} = Dimensions.get('window');

const BannerCarousel: React.FC = () => {
  const {items, loading} = useSelector((state: RootState) => state.banners);

  if (loading) {
    return <View style={styles.loadingContainer} />;
  }

  const renderBannerItem = ({item}: {item: Banner}) => (
    <View style={styles.bannerItem}>
      <Image
        source={{uri: item.image}}
        style={styles.bannerImage}
        resizeMode="cover"
      />
    </View>
  );

  return (
    <Carousel
      data={items}
      renderItem={renderBannerItem}
      sliderWidth={screenWidth}
      itemWidth={screenWidth - 40}
      autoplay
      loop
      autoplayInterval={3000}
    />
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    height: 200,
    backgroundColor: '#f0f0f0',
  },
  bannerItem: {
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
});

export default BannerCarousel;
