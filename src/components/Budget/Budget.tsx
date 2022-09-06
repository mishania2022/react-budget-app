import { StyledBudget, Button, Title, Input } from "./styles";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { useInput } from "../../hooks/useInput";
import { useToggle } from "../../hooks/useToggle";

export const Budget = () => {
  const budgetInput = useInput();
  const { budget, setBudget } = useBudgetContext();
  const { currency } = useCurrencyContext();
  const [isActive, toggleIsActive] = useToggle(false);

  const handleButtonValue = () => {
    setBudget(+budgetInput.value);
    toggleIsActive();
  };

  const handleButtonEdit = () => {
    toggleIsActive();
  };

  return (
    <StyledBudget>
      {isActive ? (
        <>
          <Input {...budgetInput} type="number" placeholder="Enter budget..." />
          <Button type="button" onClick={handleButtonValue}>
            Save
          </Button>
        </>
      ) : (
        <>
          <Title>
            Budget: {currency} {budget} 
          </Title>
          <Button type="button" onClick={handleButtonEdit}>
            Edit
          </Button>
        </>
      )}
    </StyledBudget>
  );
};
