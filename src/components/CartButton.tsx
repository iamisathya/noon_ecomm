import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {ShoppingCart} from 'lucide-react-native';

import {useSelector} from 'react-redux';
import {RootState} from '../store';

interface CartButtonProps {
  onPress: () => void;
}

const CartButton: React.FC<CartButtonProps> = ({onPress}) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <ShoppingCart size={24} color="#007AFF" />
      {itemCount > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{itemCount}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#FF3B30',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    paddingHorizontal: 4,
  },
});

export default CartButton;
