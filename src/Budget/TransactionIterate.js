import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { useAuth } from "../Signin/context/AuthContext";

const useStyle = makeStyles({
  lists: {
    marginTop: 10,
    border: "1px solid #f6f6f6",
    // width: "95%",
  },
});

function TransactionIterate({ name, amount, date, deleteTransaction }) {
  const apply = useStyle();
  // const color = transaction.amount >= 0 ? "Green" : "Red"; //green and red
  // const sign = transaction.amount >= 0 ? "$" : "-$";
  // const amount = sign + Math.abs(transaction.amount);
  const { currentUser } = useAuth();

  // if (currentUser === db.collection("budget").doc().get())

  return (
    <>
      <ListItem className={apply.lists} style={{ background: "${color}" }}>
        <ListItemIcon>
          <DeleteIcon
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => deleteTransaction(name)}
          />
          {/* <DeleteIcon style={{ color: "red", cursor: "pointer" }}/> */}
        </ListItemIcon>
        <ListItemText primary={name} />
        <ListItemText primary={amount} />
        <ListItemText style={{ marginRight: 0 }} primary={date} />
      </ListItem>
    </>
  );
}

export default TransactionIterate;
