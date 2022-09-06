import { StyledRemaining, Title } from "./styles";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { useToggle } from "../../hooks/useToggle";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";

export const Remaining = () => {
  const { budget, setBudget } = useBudgetContext();
  const { currency } = useCurrencyContext();
  const [isActive, toggleIsActive] = useToggle(false);
  const { expenses } = useExpensesContext();

  return (
    <StyledRemaining>
      <Title>
        Remaining: {currency}
        {budget - expenses.reduce((sum, expense) => +sum + +expense.cost, +0)}
      </Title>
    </StyledRemaining>
  );
};
