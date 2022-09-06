import { Button, Cost, Name, StyledItemExpenses } from "./styles";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";

interface IProps {
  name: string;
  cost: number;
  id: string;
}

export const ItemExpenses = ({ name, cost, id }: IProps) => {
  const { currency } = useCurrencyContext();
  const { deleteExpense } = useExpensesContext();

  const handleDeleteButton = () => {
    deleteExpense(id);
  };
  return (
    <StyledItemExpenses>
      <Name>{name}</Name>
      <Cost>
        {currency}
        {cost}
      </Cost>
      <Button onClick={handleDeleteButton}>X</Button>
    </StyledItemExpenses>
  );
};
