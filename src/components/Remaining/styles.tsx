import styled from "styled-components";
import { Color } from "../../config/colors";

const StyledRemaining = styled.div`
  background: ${Color.Gray};
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Title = styled.h3`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  padding: 36px 70px 40px 20px;
`;
export { StyledRemaining, Title };
