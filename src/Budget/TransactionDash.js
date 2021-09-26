import { Box, Divider, makeStyles, Typography, List } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import TransactionIterate from "./TransactionIterate";
import "./styles.css";
import { useAuth } from "../Signin/context/AuthContext";
import db from "../Signin/firebase";
import Balance from "./Balance";
import { useHistory } from "react-router";

const useStyle = makeStyles({
  component: {
    "& >*": {
      marginBottom: 10,
      color: "white",
      //    overflowY: "scroll",
    },
  },
  text: {
    marginTop: 0,
    // position: "relative",
    // overflowY: "scroll",
    alignItems: "start",
  },
  overflow: {
    overflowY: "auto",
    maxHeight: "500px",
    marginLeft: "10px",
  },
});

function TransactionDash({ transaction, deleteTransaction }) {
  let [name, setName] = useState([]);
  let [amount, setAmount] = useState([]);
  let [date, setDate] = useState([]);
  let [values, setValues] = useState([]);
  let [docId, setDocId] = useState("");
  const { currentUser } = useAuth();
  const [transactions, setTransactions] = useState([]);
  let [id, setId] = useState("id");

  function deleteTransaction(name) {
    // setTransaction(transaction.filter((tran) => tran.id !== id));

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

  useEffect(() => {
    db.collection("budget").onSnapshot((changes) => {
      var newTransactions = [];
      changes.forEach((c) => {
        if (currentUser.uid === c.data().userId) {
          newTransactions.push(c.data());
        }
      });
      setTransactions(newTransactions);
    });
  }, []);
  useEffect(() => {
    setName([]);
    setAmount([]);
    setDate([]);
    setValues([]);

    db.collection("budget")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          if (currentUser.uid === doc.data().userId) {
            setName([]);
            setAmount([]);
            setDate([]);
            setValues([]);
            name.push(doc.data().name);
            amount.push(doc.data().amount);
            date.push(doc.data().date);
            console.log(doc.data());
            // setName(...name, doc.data().name)
            // setAmount(...amount,doc.data().amount)
            // setDate(...date,doc.data().date)
          }
        });
        // setName([])
        // setAmount([])
        // setDate([])
        // setValues([])
        setName(name);
        setAmount(amount);
        setDate(date);
      });
  }, [transaction]);

  const apply = useStyle();
  // window.location.reload(false);
  return (
    <div>
      <Box className={apply.component}>
        <Typography className={apply.text} variant="h5">
          Transaction History
        </Typography>
        <Divider />
        <List className={apply.overflow}>
          {/* {
                        amount.map((value, index) =>{
                            return <TransactionIterate key={index} name={name[index]} amount={value} date={date[index]} deleteTransaction={deleteTransaction}/>
                        })
                    } */}
          {transactions.map((v, index) => {
            // console.log(v)
            return (
              <TransactionIterate
                key={index}
                name={v.name}
                amount={v.amount}
                date={v.date}
                deleteTransaction={deleteTransaction}
              />
            );
          })}
        </List>
      </Box>
    </div>
  );
}

export default TransactionDash;
