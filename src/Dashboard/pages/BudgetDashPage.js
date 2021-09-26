//React Shit
import React from "react";

//Components
import DashboardExpenseCard from "../../Budget/DashboardExpenseCard";
import TransactionDash from "../../Budget/TransactionDash";

export default function BudgetDashPage() {
  return (
    <div>
      <DashboardExpenseCard />
      {/* <TransactionDash /> */}
    </div>
  );
}
