import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Import screens
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import CartScreen from '../screens/CartScreen';
import CartReviewScreen from '../screens/CartReviewScreen';
import OrderConfirmationScreen from '../screens/OrderConfirmationScreen';
import {AppRoutes} from './AppRoutes';
import {AppStackParamList} from '../types';

const Stack = createStackNavigator<AppStackParamList>();

const screenOptions = {
  headerBackTitleVisible: false,
  headerStyle: {
    backgroundColor: '#ffffff',
  },
  headerTintColor: '#000000',
  headerTitleStyle: {
    fontWeight: '600' as const,
  },
};

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name={AppRoutes.HOME} component={HomeScreen} />

        <Stack.Screen
          name={AppRoutes.SEARCH}
          component={SearchScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={AppRoutes.PRODUCT_DETAILS}
          component={ProductDetailsScreen}
          options={{
            title: 'Product Details',
          }}
        />

        <Stack.Screen
          name={AppRoutes.CART}
          component={CartScreen}
          options={{
            title: 'Shopping Cart',
          }}
        />

        <Stack.Screen
          name={AppRoutes.CART_REVIEW}
          component={CartReviewScreen}
          options={{
            title: 'Review Order',
          }}
        />
        <Stack.Screen
          name={AppRoutes.ORDER_CONFIRMATION}
          component={OrderConfirmationScreen}
          options={{
            title: 'Order Confirmation',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
