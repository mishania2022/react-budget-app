import styled from "styled-components";
import { Color } from "../../config/colors";

const StyledSpent = styled.div`
  background-color: ${Color.Pink};
  border-radius: 10px;
  margin-bottom: 30px;
`;

const Title = styled.h3`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  padding: 36px 70px 40px 20px;
`;

export { StyledSpent, Title };