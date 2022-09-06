import { Empty, StyledListExpenses } from "./styles";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { ItemExpenses } from "../ItemExpenses/ItemExpenses";
import { InputValues } from "../../context/ExpensesContext/types";

interface IProps {
  searchExpenses: InputValues[];
}
export const ListExpenses = ({ searchExpenses }: IProps) => {
  const { expenses } = useExpensesContext();
  return (
    <StyledListExpenses>
      {expenses.length > 0 ? (
        searchExpenses.map((expense) => {
          return <ItemExpenses name={expense.name} cost={expense.cost} id={expense.id} />;
        })
      ) : (
        <Empty>Oooops 🙈</Empty>
      )}
    </StyledListExpenses>
  );
};
