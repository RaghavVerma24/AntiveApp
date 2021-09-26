import React from "react";

//Styles
import styled from "styled-components";
import "./BudgetPages.css";

//Icons
import * as FaIcons from "react-icons/fa";

const BudgetTitle = styled.div`
  
`;

const BudgetContainer = styled.div`
  display: flex;
  margin-left: 3rem;
  overflow-x: hidden;
  /* justify-content: center; */
  /* align-items: center; */
`;

const LeftBudgetContainer = styled.div`
background-color: pink;
`

const TopLeftContainer = styled.div`
background-color: yellow;
`

const BottomLeftContainer = styled.div`
background-color: black;
`

const RightBudgetContainer = styled.div`
background-color: red;
`

const TitleTransactionHistory = styled.div`
background-color: grey;
`

const TransactionHistory = styled.div`
background-color: white;
`

const BudgetPages = () => {
  return (
    <>
      <BudgetTitle>
        <FaIcons.FaMoneyCheck className="BudgetIcon" />
        <h1 className="BudgetName">Budget</h1>
      </BudgetTitle>
      <BudgetContainer>
        <LeftBudgetContainer>
          <TopLeftContainer></TopLeftContainer>
          <BottomLeftContainer></BottomLeftContainer>
        </LeftBudgetContainer>
        <RightBudgetContainer>
          <TitleTransactionHistory>Transaction History</TitleTransactionHistory>
          <TransactionHistory></TransactionHistory>
        </RightBudgetContainer>
      </BudgetContainer>
    </>
  );
};

export default BudgetPages;
