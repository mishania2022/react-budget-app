import styled from "styled-components";
import { Color } from "../../src/config/colors";

export const StyledButton = styled.button`
  padding: 15px 0px;
  width: 100%;
  margin-top: 10px;
  background: ${Color.LightBlue};
  color: ${Color.White};
  font-size: 16px;
  border-radius: 10px;
  border: none;
  transition: all 0.4s;

  &:hover {
    cursor: pointer;
    box-shadow: 3px 3px 10px ${Color.Gray};
  }
`;
