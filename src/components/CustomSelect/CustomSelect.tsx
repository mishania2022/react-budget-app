import Select, { SingleValue } from "react-select";
import { IOption } from "../../config/types/index";
import { Currency } from "../../config/currency";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { CustomStyles } from "./styles";

export const options: IOption[] = [
  { value: Currency.USD, label: "USD" },
  { value: Currency.EUR, label: "EUR" },
  { value: Currency.GBP, label: "GBP" },
];

export const CustomSelect = () => {
  const { currency, setCurrency } = useCurrencyContext();

  const getCurrency = () => {
    return options.find((option) => option.value === currency);
  };

  const handleTipsValue = (option: SingleValue<IOption>): void => {
    if (option) setCurrency(option.value);
  };

  return (
    <Select
      onChange={handleTipsValue}
      value={getCurrency()}
      options={options}
      styles={CustomStyles}
      isSearchable={false}
      isMulti={false}
    />
  );
};
