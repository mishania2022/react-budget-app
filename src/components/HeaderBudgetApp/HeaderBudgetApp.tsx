import { CustomSelect } from "../CustomSelect/CustomSelect";
import { Title } from "../HeaderBudgetApp/styles";
import { StyledHeaderBudgetApp } from "./styles";

export const HeaderBudgetApp = () => {
  return (
    <StyledHeaderBudgetApp>
      <Title>BudgetApp</Title>
      <CustomSelect />
    </StyledHeaderBudgetApp>
  );
};
