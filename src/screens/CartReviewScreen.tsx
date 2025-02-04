import React, {useState} from 'react';
import {ScrollView, ActivityIndicator, Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Camera, CreditCard} from 'lucide-react-native';

import {RootState} from '../store';
import {clearCart} from '../store/cartSlice';
import * as S from '../styled/CartReview';
import {setOrderStatus} from '../store/orderSlice';

interface CartReviewScreenProps {
  navigation: any;
}

const CartReviewScreen: React.FC<CartReviewScreenProps> = ({navigation}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const selectedPaymentMethod = useSelector(
    (state: RootState) => state.payment.selectedMethod,
  );

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 0 ? 5.99 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      dispatch(clearCart());
      dispatch(setOrderStatus('confirmed'));
      navigation.navigate('OrderConfirmation', {
        orderId: `ORD-${Date.now()}`,
        total,
      });
    }, 2000);
  };

  return (
    <S.Container>
      <ScrollView>
        <S.Section>
          <S.SectionTitle>Order Items</S.SectionTitle>
          {cartItems.map(item => (
            <S.ItemRow key={item.id}>
              <S.ItemName>
                {item.name} (x{item.quantity})
              </S.ItemName>
              <S.ItemPrice>
                ${(item.price * item.quantity).toFixed(2)}
              </S.ItemPrice>
            </S.ItemRow>
          ))}
        </S.Section>

        <S.Section>
          <S.SectionTitle>Payment Method</S.SectionTitle>
          <S.PaymentCard
            onPress={() => Alert.alert('Change Payment Method', 'Coming soon')}>
            <CreditCard size={24} color="#333" />
            <S.CardInfo>
              <S.CardNumber>
                •••• •••• •••• {selectedPaymentMethod?.last4}
              </S.CardNumber>
              <S.CardExpiry>
                Expires {selectedPaymentMethod?.expiryDate}
              </S.CardExpiry>
            </S.CardInfo>
            <Camera size={24} color="#666" />
          </S.PaymentCard>
        </S.Section>

        <S.Section>
          <S.SectionTitle>Order Summary</S.SectionTitle>
          <S.SummaryRow>
            <S.SummaryLabel>Subtotal</S.SummaryLabel>
            <S.SummaryValue>${subtotal.toFixed(2)}</S.SummaryValue>
          </S.SummaryRow>
          <S.SummaryRow>
            <S.SummaryLabel>Shipping</S.SummaryLabel>
            <S.SummaryValue>${shipping.toFixed(2)}</S.SummaryValue>
          </S.SummaryRow>
          <S.SummaryRow>
            <S.SummaryLabel>Tax</S.SummaryLabel>
            <S.SummaryValue>${tax.toFixed(2)}</S.SummaryValue>
          </S.SummaryRow>
          <S.TotalRow>
            <S.TotalLabel>Total</S.TotalLabel>
            <S.TotalValue>${total.toFixed(2)}</S.TotalValue>
          </S.TotalRow>
        </S.Section>
      </ScrollView>

      <S.PlaceOrderButton onPress={handlePlaceOrder} disabled={isProcessing}>
        {isProcessing ? (
          <ActivityIndicator color="white" />
        ) : (
          <S.PlaceOrderText>Place Order</S.PlaceOrderText>
        )}
      </S.PlaceOrderButton>
    </S.Container>
  );
};

export default CartReviewScreen;
