import { Cost, Name, StyledItemExpenses } from "./styles";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";

interface IProps {
  name: string;
  cost: number;
}

export const ItemExpenses = ({ name, cost }: IProps) => {
  const { currency } = useCurrencyContext();
  return (
    <StyledItemExpenses>
      <Name>{name}</Name>
      <Cost>
        {currency}
        {cost}
      </Cost>
    </StyledItemExpenses>
  );
};
