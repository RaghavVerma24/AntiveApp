//React Shit
import React, { useEffect, useState } from "react";

//Database
import db from "../Signin/firebase";

//Styles
import {
  Card,
  CardContent,
  Typography,
  Box,
  makeStyles,
} from "@material-ui/core";
import "../Budget/styles.css";
import styled from "styled-components";

//Context
import { useAuth } from "../Signin/context/AuthContext";

const IncomeContainerDash = styled.div`
  color: #edeeee;
  font-size: 1.5rem;
  font-weight: bold;
`;

const ExpenseContainerDash = styled.div`
  color: #edeeee;
  font-size: 1.5rem;
  font-weight: bold;
`;

function DashboardExpenseCard() {
  let [bal, setBal] = useState(0);
  let [income, setIncome] = useState(0);
  let [expense, setExpense] = useState(0);
  const { currentUser } = useAuth();

  const useStyle = makeStyles({
    container: {
      display: "flex",
      marginBottom: "20px",
      // flexDirection: "column",
      border: "none",
      borderColor: "yellow",

      "& > *": {
        // padding: 10,
        flex: 1,
        background: "transparent",
        border: "none",
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
  //   container: {
  //     display: "flex",
  //     flexDirection: "row",
  //     width: "100%",
  //   },

  //   header: {
  //     color: "white",
  //     fontSize: 35,
  //     margin: "40px 30px",
  //     textTransform: "uppercase",
  //     background: "blue",
  //     padding: "30",
  //   },
  //   box: {
  //     background: "none",
  //     //   width: "80%",
  //     margin: "10px 10px",
  //     padding: 10,
  //     borderRadius: 20,
  //     display: "flex",
  //     // alignItems : "center",
  //     "&>*": {
  //       width: "50%",
  //       padding: 10,
  //       height: "700",
  //     },
  //     flewDirection: "row",
  //   },
  // });

  const applyStyle = useStyle();

  useEffect(() => {
    db.collection("budget").onSnapshot(function (querySnapshot) {
      var transactions = 0;
      bal = 0;
      income = 0;
      expense = 0;
      querySnapshot.forEach(function (doc) {
        transactions++;
        if (currentUser.uid === doc.data().userId) {
          // console.log(doc.data().name, doc.data().amount)
          console.log(typeof doc.data().amount);
          bal += parseInt(doc.data().amount);
          if (parseInt(doc.data().amount) > 0) {
            income += parseInt(doc.data().amount);
          } else if (parseInt(doc.data().amount) < 0) {
            expense += parseInt(doc.data().amount);
          }
        }
      });
      if (transactions === 0) {
        bal = 0;
        income = 0;
        expense = 0;
      }
      console.log(bal);
      setBal(bal);
      setIncome(income);
      setExpense(expense);
    });
  }, []);

  return (
    <div>
      <Box className={applyStyle.container}>
        <Card>
          <CardContent>
            <IncomeContainerDash>Income</IncomeContainerDash>
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
            <ExpenseContainerDash>Expense</ExpenseContainerDash>
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

export default DashboardExpenseCard;
