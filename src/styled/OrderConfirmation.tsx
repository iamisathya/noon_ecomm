import styled from 'styled-components/native';

// Styled Components
export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 20px;
`;

export const SuccessCircle = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: #4caf50;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`;

export const MessageText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333333;
  text-align: center;
  margin-bottom: 12px;
`;

export const SubText = styled.Text`
  font-size: 16px;
  color: #666666;
  text-align: center;
  margin-bottom: 32px;
`;

export const HomeButton = styled.TouchableOpacity`
  background-color: #2196f3;
  padding: 16px 32px;
  border-radius: 8px;
  margin-top: 24px;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
`;

export const OrderNumber = styled.Text`
  font-size: 18px;
  color: #333333;
  margin-bottom: 48px;
`;
