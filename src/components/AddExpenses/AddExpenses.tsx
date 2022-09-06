import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../Button/Button";
import { Title } from "../AddExpenses/styles";
import { Input } from "./styles";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { v4 as uuidv4 } from "uuid";

export const AddExpenses = () => {
  const { expenses, addExpense } = useExpensesContext();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (newExpense: any) => {
    const newExpenses = { ...newExpense, id: uuidv4() };
    addExpense(newExpenses);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Title>Add Expense</Title>
      <Input
        placeholder="enter name ..."
        type="text"
        {...register("name", { required: true })}
      />
      <Input
        placeholder="enter cost ..."
        type="number"
        {...register("cost", { required: true })}
      />
      <Button />
    </form>
  );
};
