import Select, { SingleValue } from "react-select";
import { IOption } from "../../config/types/index";
import { Currency } from "../../config/currency";
//import { CustomStyles } from "./styles";

export const options: IOption[] = [
  { value: Currency.USD, label: "USD" },
  { value: Currency.EUR, label: "EUR" },
  { value: Currency.GBP, label: "GBP" },
];

interface IProps {
  onChange: (tipsValue: IOption) => void;
  tipsValue: IOption;
}

export const CustomSelect = () => {
  // const handleTipsValue = (tipsValue: SingleValue<IOption>): void => {
  //   if (tipsValue) onChange(tipsValue);
  // };

  return (
    <Select
      //onChange={handleTipsValue}
      value={options[0]}
      options={options}
      //styles={CustomStyles}
      isSearchable={false}
      isMulti={false}
    />
  );
};