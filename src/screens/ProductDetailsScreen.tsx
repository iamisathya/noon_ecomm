import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {Minus, Plus} from 'lucide-react-native';

import {addToCart} from '../store/cartSlice';
import CartButton from '../components/CartButton';
import {Product} from '../types';

interface ProductDetailsScreenProps {
  route: {
    params: {
      product: Product;
    };
  };
  navigation: any;
}

const ProductDetailsScreen: React.FC<ProductDetailsScreenProps> = ({
  route,
  navigation,
}) => {
  const {product} = route.params;
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: Date.now().toString(),
        productId: product.id,
        quantity,
        name: product.name,
        price: product.price,
        image: product.image,
      }),
    );
    // Show success feedback
    // You could add a toast or modal here
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={{uri: product.image}} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>${product.price.toFixed(2)}</Text>

          <View style={styles.tagsContainer}>
            {product.tags.map((tag, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>

          <View style={styles.quantityContainer}>
            <Text style={styles.quantityLabel}>Quantity:</Text>
            <View style={styles.quantityControls}>
              <TouchableOpacity
                onPress={decrementQuantity}
                style={[
                  styles.quantityButton,
                  quantity <= 1 && styles.disabled,
                ]}
                disabled={quantity <= 1}>
                <Minus size={24} color={quantity <= 1 ? '#999' : '#000'} />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity
                onPress={incrementQuantity}
                style={styles.quantityButton}>
                <Plus size={24} color="#000" />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>
      </ScrollView>

      <SafeAreaView style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={handleAddToCart}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
        <CartButton onPress={() => navigation.navigate('Cart')} />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  content: {
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    color: '#007AFF',
    fontWeight: '600',
    marginBottom: 16,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  tag: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    fontSize: 14,
    color: '#666',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  quantityLabel: {
    fontSize: 16,
    marginRight: 16,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
  },
  quantityButton: {
    padding: 8,
  },
  disabled: {
    opacity: 0.5,
  },
  quantityText: {
    fontSize: 16,
    paddingHorizontal: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
  },
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    backgroundColor: 'white',
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    borderRadius: 8,
    marginRight: 16,
  },
  addToCartText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default ProductDetailsScreen;
