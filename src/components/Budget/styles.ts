import styled from "styled-components";
import { Color } from "../../config/colors";

const StyledBudget = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${Color.LightBlue};
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Title = styled.h3`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  padding: 36px 70px 40px 20px;
`;

const Button = styled.button`
  border-radius: 10px;
  border: none;
  padding: 10px 30px;
  max-height: 36px;
  max-width: 80px;
  background-color: ${Color.White};
  margin: 30px 20px 0 0;
`;

export { Title, StyledBudget, Button };
