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
    fontSize:"12px"
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
    fontSize:"12px"
  }),
  control: (styles) => ({
    ...styles,
    borderRadius: "5px",
    border: "none",
  }),
};
