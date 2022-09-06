import { ChangeEvent } from "react";
import { StyledSearchExpenses } from "./styles";

interface IProps {
  value: string,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const SearchExpenses = ({ value, onChange }: IProps) => {
  return <StyledSearchExpenses value={value} onChange={onChange} type="text" placeholder="search..." />;
};
