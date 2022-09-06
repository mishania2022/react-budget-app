import { Empty, StyledListExpenses } from "./styles";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { ItemExpenses } from "../ItemExpenses/ItemExpenses";

export const ListExpenses = () => {
  const { expenses } = useExpensesContext();

  return (
    <StyledListExpenses>
      {expenses.length > 0 ? (
        expenses.map((expense) => {
          return <ItemExpenses name={expense.name} cost={expense.cost} />;
        })
      ) : (
        <Empty>Oooops 🙈</Empty>
      )}
    </StyledListExpenses>
  );
};
