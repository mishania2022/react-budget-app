import styled from "styled-components";
import { Color } from "../../config/colors";

const StyledItemExpenses = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  box-shadow: 0px 4px 4px ${Color.Gray};
  padding: 10px 20px;
  margin-bottom: 10px;
`;
const Name = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;
const Cost = styled.div`
  height: 21px;
  padding: 4px 12px;
  background: ${Color.LightBlue};
  border-radius: 10px;
  color: ${Color.White};
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
`;

const Button = styled.button`
  background: none;
  border: none;
  color: ${Color.DarkPink};
`;

export { StyledItemExpenses, Name, Cost, Button };
