import { Title } from "./styles";
import { ListExpenses } from "../ListExpenses/ListExpenses";
import { SearchExpenses } from "../SearchExpenses/SearchExpenses";
import { StyledExpenses } from "./styles";
import { useInput } from "../../hooks/useInput";
import { useEffect, useState } from "react";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";

export const Expenses = () => {
  const searchInput = useInput();
  const { expenses } = useExpensesContext();
  const [searchExpenses, setSearchExpenses] = useState(expenses);

  useEffect((): void => {
    searchInput.value
      ? setSearchExpenses(
        expenses.filter((expense) =>
          expense.name
            .toLowerCase()
            .includes(searchInput.value.toLocaleLowerCase())
        )
      )
      : setSearchExpenses(expenses);
  }, [expenses, searchInput.value]);

  return (
    <StyledExpenses>
      <Title>Expenses</Title>
      <SearchExpenses {...searchInput} />
      <ListExpenses searchExpenses={searchExpenses} searchInputValue={searchInput.value}/>
    </StyledExpenses>
  );
};
