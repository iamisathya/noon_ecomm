import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f8f8f8;
`;

export const Section = styled.View`
  background-color: white;
  margin-bottom: 12px;
  padding: 16px;
`;

export const SectionTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #333;
`;

export const ItemRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-vertical: 8px;
`;

export const ItemName = styled.Text`
  font-size: 16px;
  color: #333;
  flex: 1;
`;

export const ItemPrice = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #007aff;
  margin-left: 16px;
`;

export const PaymentCard = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 12px;
  border-radius: 8px;
  border-width: 1px;
  border-color: #e0e0e0;
`;

export const CardInfo = styled.View`
  flex: 1;
  margin-left: 12px;
`;

export const CardNumber = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #333;
`;

export const CardExpiry = styled.Text`
  font-size: 14px;
  color: #666;
  margin-top: 4px;
`;

export const SummaryRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const SummaryLabel = styled.Text`
  font-size: 16px;
  color: #666;
`;

export const SummaryValue = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #333;
`;

export const TotalRow = styled(SummaryRow)`
  margin-top: 8px;
  padding-top: 8px;
  border-top-width: 1px;
  border-top-color: #e0e0e0;
`;

export const TotalLabel = styled(SummaryLabel)`
  font-size: 18px;
  font-weight: 600;
  color: #333;
`;

export const TotalValue = styled(SummaryValue)`
  font-size: 18px;
  font-weight: 600;
  color: #007aff;
`;

export const PlaceOrderButton = styled.TouchableOpacity`
  background-color: #007aff;
  padding-vertical: 16px;
  border-radius: 8px;
  margin: 16px;
`;

export const PlaceOrderText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;
