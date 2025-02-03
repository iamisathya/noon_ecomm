import React, {useCallback, useEffect} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import debounce from 'lodash/debounce';

import {AppDispatch, RootState} from '../store';
import {
  searchProductsAsync,
  setSearchQuery,
  clearSearch,
} from '../store/searchSlice';
import SearchBar from '../components/SearchBar';
import ProductCard from '../components/ProductCard';

const SearchScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {query, results, loading} = useSelector(
    (state: RootState) => state.search,
  );

  // Debounce search to avoid too many API calls
  const debouncedSearch = useCallback(
    debounce((text: string) => {
      if (text.trim()) {
        dispatch(searchProductsAsync(text));
      }
    }, 300),
    [dispatch],
  );

  const handleSearch = (text: string) => {
    dispatch(setSearchQuery(text));
    debouncedSearch(text);
  };

  const handleClear = () => {
    dispatch(clearSearch());
  };

  useEffect(() => {
    return () => {
      handleClear();
    };
  }, []);

  const renderItem = ({item}: {item: Product}) => (
    <View style={styles.productContainer}>
      <ProductCard
        product={item}
        onPress={() => navigation.navigate('ProductDetails', {product: item})}
      />
    </View>
  );

  const renderEmptyState = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>
        {query.trim()
          ? 'No products found'
          : 'Start typing to search for products'}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <SearchBar
        value={query}
        onChangeText={handleSearch}
        onClear={handleClear}
        autoFocus={true}
      />
      {loading ? (
        <ActivityIndicator style={styles.loader} size="large" color="#007AFF" />
      ) : (
        <FlatList
          data={results}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
          ListEmptyComponent={renderEmptyState}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  listContainer: {
    padding: 16,
  },
  productContainer: {
    marginBottom: 16,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default SearchScreen;
