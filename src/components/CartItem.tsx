import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import {Trash, Plus, Minus} from 'lucide-react-native';
import {CartItem as CartItemType} from '../types';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (quantity: number) => void;
  onRemove: () => void;
}

const CartItem: React.FC<CartItemProps> = ({
  item,
  onUpdateQuantity,
  onRemove,
}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        <View style={styles.controls}>
          <View style={styles.quantityControls}>
            <TouchableOpacity
              onPress={() => onUpdateQuantity(item.quantity - 1)}
              disabled={item.quantity <= 1}
              style={[styles.button, item.quantity <= 1 && styles.disabled]}>
              <Minus size={20} color={item.quantity <= 1 ? '#999' : '#000'} />
            </TouchableOpacity>
            <Text style={styles.quantity}>{item.quantity}</Text>
            <TouchableOpacity
              onPress={() => onUpdateQuantity(item.quantity + 1)}
              style={styles.button}>
              <Plus size={20} color="#000" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={onRemove} style={styles.removeButton}>
            <Trash size={20} color="#FF3B30" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  details: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
    marginBottom: 8,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
  },
  button: {
    padding: 8,
  },
  disabled: {
    opacity: 0.5,
  },
  quantity: {
    paddingHorizontal: 12,
    fontSize: 16,
  },
  removeButton: {
    padding: 8,
  },
});

export default CartItem;
