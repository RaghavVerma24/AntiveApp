import "./budget.css";
import { Typography, makeStyles, Box } from "@material-ui/core";
import Balance from "../Budget/Balance";
import ExpenseCard from "../Budget/ExpenseCard";
import NewTransaction from "../Budget/NewTransaction";
import Transaction from "../Budget/Transaction";
import { useState, useEffect, useLayoutEffect } from "react";
import db from "../Signin/firebase";
import { useAuth } from "../Signin/context/AuthContext";
import { useHistory } from "react-router";
import OfficialNav from "../OfficialNavbar/OfficialNav";
import ResizeHeight from "../ResizeHeight/PageResize";
import SideNavBar from "../Sidebar&Header/SideNavbar";

//Icons
import { FaMoneyCheck } from "react-icons/fa";

//Styles
import "../Dashboard/dashboard.css";

const useStyle = makeStyles({
  header: {
    color: "white",
    fontSize: 35,
    margin: "40px 30px",
    textTransform: "uppercase",
    background: "blue",
    padding: "30",
  },
  box: {
    background: "none",
    width: "100%",
    margin: "10px 10px",
    padding: 10,
    borderRadius: 20,
    display: "flex",
    gap: "30px",
    // alignItems : "center",
    "&>*": {
      width: "50%",
      padding: 10,
      height: "700",
    },
    ["@media (max-width:1000px)"]: {
      display: "flex",
      flexDirection: "column",
      "&>*": {
        width: "100%",
        padding: 10,
        height: "700",
      },
    },
    // flexDirection: "row",
  },
});

function Budget() {
  const applyStyle = useStyle();
  let [bal, setBal] = useState(0);
  let [income, setIncome] = useState(0);
  let [expense, setExpense] = useState(0);
  let [id, setId] = useState("id");
  const history = useHistory();
  // let bal = 0
  const { currentUser } = useAuth();

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

  const [transaction, setTransaction] = useState([]);

  function deleteTransaction(name) {
    setTransaction(transaction.filter((tran) => tran.id !== id));

    db.collection("budget")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          if (name === doc.data().name) {
            id = doc.id;
            // console.log(id)
          }
        });
        setId(id);
        db.collection("budget").doc(id).delete();
      });

    console.log(id);
  }

  const addTrans = (trans) => {
    setTransaction((transaction) => [trans, ...transaction]);
    console.log(typeof trans);
    //  history.go(0)
  };

  return (
    <>
      <div className="ResizeHeight">
        {/* <ResizeHeight /> */}
        <SideNavBar currentUser={currentUser} />
      </div>
      <div className="WholeDashboard">
        <OfficialNav />
      </div>
      <div className="BudgetTitle">
        <FaMoneyCheck className="BudgetIcon" />
        <div className="BudgetName">Budget</div>
      </div>
      <div className="budget">
        <Box className={applyStyle.box}>
          <Box>
            <Balance bal={bal} />
            <ExpenseCard
              transaction={transaction}
              income={income}
              expense={expense}
            />
            <NewTransaction addTrans={addTrans} />
          </Box>
          <Box>
            <Transaction
              transaction={transaction}
              deleteTransaction={deleteTransaction}
            />
          </Box>
        </Box>
      </div>
    </>
  );
}

export default Budget;
