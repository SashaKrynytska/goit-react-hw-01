import styled from "@emotion/styled";

export const TransactionTable = styled.table`
  width: 50%;
  margin: 20px auto;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 5%) 0px 5px 5px;
  text-align: center;
`;

export const TransactionHead = styled.thead`
  font-size: 15px;
  text-transform: uppercase;
  background-color: #4ebdd6;
  color: white;
`;

export const TransactionBody = styled.tbody`
  color: darkgrey;
  font-size: 15px;
  background-color: #ecf1f5;
  tr: nth-of-type(2n) {
    background-color: white;
  }
`;

export const TransactionType = styled.td`
  text-transform: capitalize;
  height: 35px;
`;
