import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { useToggle } from "../../hooks/useToggle";
import { Title } from "../Spent/styles";
import { StyledSpent } from "./styles";

export const Spent = () => {
  const { budget, setBudget } = useBudgetContext();
  const { currency } = useCurrencyContext();
  const [isActive, toggleIsActive] = useToggle(false);
  const { expenses } = useExpensesContext();
  return (
    <StyledSpent>
      <Title>
        Spent so far:{" "}
        {expenses.reduce((sum, expense) => +sum + +expense.cost, +0)}
      </Title>
    </StyledSpent>
  );
};
