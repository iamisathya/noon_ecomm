import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Check} from 'lucide-react';
import {useDispatch, useSelector} from 'react-redux';

import {AppDispatch, RootState} from '../store';
import {resetOrder} from '../store/orderSlice';
import * as S from '../styled/OrderConfirmation';
import {OrderConfirmationScreenProps} from '../types';

const OrderConfirmationScreen: React.FC<OrderConfirmationScreenProps> = ({
  route,
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const orderDetails = useSelector(
    (state: RootState) => state.order.currentOrder,
  );
  const orderNumber =
    route?.params?.orderNumber ||
    'ORD-' + Math.random().toString(36).substr(2, 9);

  useEffect(() => {
    // Clean up order data when component unmounts
    return () => {
      dispatch(resetOrder());
    };
  }, [dispatch]);

  const handleReturnHome = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Home'}],
    });
  };

  return (
    <S.Container>
      <S.SuccessCircle>
        <Check color="white" size={50} />
      </S.SuccessCircle>

      <S.MessageText>Order Confirmed!</S.MessageText>
      <S.SubText>Thank you for your purchase</S.SubText>

      <S.OrderNumber>Order #{orderNumber}</S.OrderNumber>

      <S.SubText>
        We'll send you an email with your order details and tracking information
        once your package ships.
      </S.SubText>

      <S.HomeButton onPress={handleReturnHome}>
        <S.ButtonText>Return to Home</S.ButtonText>
      </S.HomeButton>
    </S.Container>
  );
};

export default OrderConfirmationScreen;
