import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../Button/Button";
import { Title } from "../AddExpenses/styles";
import { Input } from "./styles";

export const AddExpenses = () => {
  return (
    <form>
      <Title>Add Expense</Title>
      <Input placeholder="enter name ..." type="text" />
      <Input placeholder="enter cost ..." type="number" />
      <Button />
    </form>
  );
};
