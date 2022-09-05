import { createGlobalStyle } from "styled-components";
import { Color } from "./colors";

export const GlobalStyles = createGlobalStyle`
* {
    margin:0px;
    padding:0px;
    box-sizing:border-box;
}

body{
  background:${Color.DarkBlue};
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button 
  {
    -webkit-appearance: none;
    margin: 0;
  };
  input[type="number"] {
    -moz-appearance: textfield;
  };
  input[type="number"]:hover,
  input[type="number"]:focus {
    -moz-appearance: number-input;
  };
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  };
  font-family:Arial, Helvetica, sans-serif;
}
`;
