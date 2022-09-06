import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { Title } from "../Spent/styles";
import { StyledSpent } from "./styles";

export const Spent = () => {
  const { currency } = useCurrencyContext();
  const { expenses } = useExpensesContext();
  return (
    <StyledSpent>
      <Title>
        Spent so far: {currency}
        {expenses.reduce((sum, expense) => +sum + +expense.cost, +0)}
      </Title>
    </StyledSpent>
  );
};
