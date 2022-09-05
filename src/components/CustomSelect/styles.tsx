import { StylesConfig } from "react-select";
import { IOption } from "../../config/types";

export const CustomStyles: StylesConfig<IOption> = {
  container: (styles) => ({
    ...styles,
    width: "25%",
    marginBottom: "45px",
  }),
  valueContainer: (styles) => ({
    ...styles,
    textAlign: "center",
  }),
  singleValue: (styles) => ({
    ...styles,
  }),
  menuList: (styles) => ({
    ...styles,
  }),

  option: (styles) => ({
    ...styles,
    color: "black",
    textAlign: "center",
  }),
  control: (styles) => ({
    ...styles,
    borderRadius: "5px",
    border: "none",
  }),
};
