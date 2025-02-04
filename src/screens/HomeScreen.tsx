import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Search} from 'lucide-react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppStackParamList} from '../types';

import {AppDispatch, RootState} from '../store';
import {fetchProductsAsync} from '../store/productsSlice';
import {fetchBannersAsync} from '../store/bannersSlice';
import BannerCarousel from '../components/BannerCarousel';
import ProductCard from '../components/ProductCard';
import {AppRoutes} from '../navigation/AppRoutes';

type HomeScreenNavigationProp = NativeStackNavigationProp<AppStackParamList>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const dispatch = useDispatch<AppDispatch>();
  const {items: products, loading: productsLoading} = useSelector(
    (state: RootState) => state.products,
  );

  useEffect(() => {
    dispatch(fetchProductsAsync());
    dispatch(fetchBannersAsync());
  }, [dispatch]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate(AppRoutes.SEARCH)}
          style={{marginRight: 16}}>
          <Search size={24} color="#000" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const renderProductSection = (category: string) => {
    const categoryProducts = products.filter(
      product => product.category === category,
    );

    return (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categoryProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onPress={() =>
                navigation.navigate(AppRoutes.PRODUCT_DETAILS, {product})
              }
            />
          ))}
        </ScrollView>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.bannerContainer}>
        <BannerCarousel />
      </View>

      {productsLoading ? (
        <ActivityIndicator style={styles.loader} size="large" color="#007AFF" />
      ) : (
        <>
          {renderProductSection('electronics')}
          {renderProductSection('sports')}
          {renderProductSection('beauty')}
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  bannerContainer: {
    marginVertical: 16,
  },
  section: {
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
  },
  loader: {
    marginTop: 40,
  },
});

export default HomeScreen;
