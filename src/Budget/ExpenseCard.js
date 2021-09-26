//React Shit
import React from "react";

//Styles
import {
  Card,
  CardContent,
  Typography,
  Box,
  makeStyles,
} from "@material-ui/core";
import "./styles.css";
import styled from "styled-components";

const IncomeContainer = styled.div`
  color: #edeeee;
  font-size: 1.5rem;
  font-weight: bold;
`;

const ExpenseContainer = styled.div`
  color: #edeeee;
  font-size: 1.5rem;
  font-weight: bold;
`;

const useStyle = makeStyles({
  container: {
    display: "flex",
    // flexDirection: "column",
    border: "2px",
    borderColor: "yellow",

    "& > *": {
      // padding: 10,
      flex: 1,
      background: "transparent",
      border: "0px",
    },
  },
  income: {
    color: "#EDEEEE",
    // backgroundColor: "#EDEEEE",
    fontSize: "1.1rem",
    fontWeight: "bold",
  },
  expense: {
    color: "#EDEEEE",
    // backgroundColor: "#EDEEEE",
    fontSize: "1.1rem",
    fontWeight: "bold",
  },
});

function ExpenseCard({ transaction, income, expense }) {
  const applyStyle = useStyle();
  // const amount = transaction.map((tran) => tran.amount);
  // const income = amount
  //   .filter((item) => item > 0)
  //   .reduce((acc, item) => (acc += item), 0)
  //   .toFixed(2);
  // const expense = (
  //   amount.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
  //   -1
  // ).toFixed(2);

  let total = income - expense;
  //   alert(total, temp, temp2)
  let perIncome = (income / total) * 100;
  let perExpense = (expense / total) * -100;
  //   console.log(temp, temp2, perIncome, perExpense)
  perIncome = perIncome.toFixed(2);
  perExpense = perExpense.toFixed(2);

  const incomeCss = {
    width: `${perIncome}%`,
    backgroundColor: "#4CAF50",
    margin: "0px",
    height: "30px",
    marginLeft: "-5px",
  };

  const expenseCss = {
    width: `${perExpense}%`,
    backgroundColor: "#E04949",
    margin: "0px",
    height: "30px",
    marginLeft: "-5px",
  };

  return (
    <div>
      <Box className={applyStyle.container}>
        <Card>
          <CardContent>
            {/* <Typography>Income</Typography> */}
            <IncomeContainer>Income</IncomeContainer>
            <Typography className={applyStyle.income}> $ {income}</Typography>
            {/* <div class="distribution">
              <div class="skill" style={incomeCss}>
                ${income}
              </div>
            </div> */}
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <ExpenseContainer>Expense</ExpenseContainer>
            <Typography className={applyStyle.expense}> $ {expense}</Typography>
            {/* <div class="distribution">
              <div class="skill" style={expenseCss}>
                ${expense}
              </div>
            </div> */}
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default ExpenseCard;
