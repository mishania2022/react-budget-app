import styled from "styled-components";
import { Color } from "../../config/colors";

export const StyledSearchExpenses = styled.input`
  width: 100%;
  height: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 30px 0 10px;
  padding: 20px;
  background: ${Color.White};
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color:${Color.Gray};
  border-radius: 10px;
  border: none;
`;
