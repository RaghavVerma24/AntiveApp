import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { MailOutlineSharp } from "@material-ui/icons";
import "./styles.css";
import { useAuth } from "../Signin/context/AuthContext";
import db from "../Signin/firebase";
import { useHistory } from "react-router";

const useStyle = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    "& > *": {
      marginTop: 30,
    },
    color: "white",
  },
  button: {
    background: "#445A6F",
    color: "#fff",
  },
  multilineColor: {
    color: "white",
  },
});
function NewTransaction({ addTrans }) {
  const history = useHistory();
  const apply = useStyle();
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { currentUser } = useAuth();

  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  let year = newDate.getFullYear();
  let fulldate = `${date}/${month}/${year}`;
  let balance = 0;

  const newTrans = () => {
    const transaction = {
      id: Math.floor(Math.random() * 1000),
      text: text,
      amount: +amount,
    };
    if (amount >= 0 || amount <= 0) {
      if (text == undefined) {
        db.collection("budget").add({
          name: "",
          amount: transaction.amount,
          userId: currentUser.uid,
          date: fulldate,
        });
      } else {
        db.collection("budget").add({
          name: transaction.text,
          amount: transaction.amount,
          userId: currentUser.uid,
          date: fulldate,
        });
      }
    }

    addTrans(transaction);
    setAmount(0);
  };

  return (
    <Box className={apply.container}>
      <Typography variant="h5">New Transaction</Typography>
      <TextField
        label="Enter Transaction Label"
        InputLabelProps={{
          style: { color: "#fff" },
        }}
        InputProps={{
          className: apply.multilineColor,
        }}
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <TextField
        label="Total Amount (Enter negative value to indicate expense)"
        InputLabelProps={{
          style: { color: "#fff", lineHeight: "150%" },
        }}
        InputProps={{
          className: apply.multilineColor,
        }}
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <div className="btnbackground">
        <button className="addbtn" onClick={newTrans} variant="contained">
          +
        </button>
        <div className="textbtn">
          <h5 className="text">Add Income or Expense</h5>
          <h6 className="text1">Date: {fulldate}</h6>
        </div>
      </div>
      {/* <Button className={apply.button} onClick={newTrans} variant="contained">Add New Transaction</Button> */}
    </Box>
  );
}

export default NewTransaction;
