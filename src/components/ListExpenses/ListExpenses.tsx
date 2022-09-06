import { Empty, StyledListExpenses } from "./styles";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { ItemExpenses } from "../ItemExpenses/ItemExpenses";
import { InputValues } from "../../context/ExpensesContext/types";

interface IProps {
  searchExpenses: InputValues[];
  searchInputValue:string
}
export const ListExpenses = ({ searchExpenses,searchInputValue }: IProps) => {
  const { expenses } = useExpensesContext();

  

  return (
    <StyledListExpenses>
      { searchInputValue  ?  ( searchExpenses.length > 0 ? (
        searchExpenses.map((expense) => {
          return <ItemExpenses name={expense.name} cost={expense.cost} id={expense.id} />;
        })
      ) : (
        <Empty>Oooops 🙈</Empty>
      )) : ( expenses.length > 0 ? (
        expenses.map((expense) => {
          return <ItemExpenses name={expense.name} cost={expense.cost} id={expense.id} />;
        })
      ) : (
        <Empty></Empty>
      ))    }
    </StyledListExpenses>
  );
};
