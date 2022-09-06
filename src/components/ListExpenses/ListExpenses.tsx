import { StyledListExpenses } from "./styles";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { ItemExpenses } from "../ItemExpenses/ItemExpenses";

export const ListExpenses = () => {
const{expenses,addExpense} =useExpensesContext();

  return (<StyledListExpenses>
{expenses.map(item=>{
  return <ItemExpenses/>
})}
  </StyledListExpenses>)
};
