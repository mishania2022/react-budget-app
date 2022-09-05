import { Title } from "./styles";
import { ListExpenses } from "../ListExpenses/ListExpenses";
import { SearchExpenses } from "../SearchExpenses/SearchExpenses";
import { StyledExpenses } from "./styles";

export const Expenses = () => {
  return (
    <StyledExpenses>
      <Title>Expenses</Title>
      <SearchExpenses />
      <ListExpenses />
    </StyledExpenses>
  );
};
