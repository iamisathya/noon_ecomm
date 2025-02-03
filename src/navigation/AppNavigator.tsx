import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Import screens
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import CartScreen from '../screens/CartScreen';
import CartReviewScreen from '../screens/CartReviewScreen';

// Define types for navigation parameters
export type AppStackParamList = {
  Home: undefined;
  Search: undefined;
  ProductDetails: {productId: string};
  Cart: undefined;
  CartReview: undefined;
};

const Stack = createStackNavigator<AppStackParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: '#ffffff',
          },
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: '600',
          },
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ProductDetails"
          component={ProductDetailsScreen}
          options={{
            title: 'Product Details',
          }}
        />

        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{
            title: 'Shopping Cart',
          }}
        />

        <Stack.Screen
          name="CartReview"
          component={CartReviewScreen}
          options={{
            title: 'Review Order',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
