import { StyledRemaining, Title } from "./styles";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { useToggle } from "../../hooks/useToggle";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";

export const Remaining = () => {
  const { budget } = useBudgetContext();
  const { currency } = useCurrencyContext();
  const { expenses } = useExpensesContext();
  const spent = () => {
    return expenses.reduce((sum, expense) => +sum + +expense.cost, +0);
  };
  const remain = () => {
    return budget - spent();
  };

  return (
    <StyledRemaining $spending={budget - spent()}>
      {remain() >= 0 ? (
        <Title>
          Remaining: {currency}
          {remain()}
        </Title>
      ) : (
        <Title>
          Overspending by : {currency}
          {-remain()}
        </Title>
      )}
    </StyledRemaining>
  );
};
