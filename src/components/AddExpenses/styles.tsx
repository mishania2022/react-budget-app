import styled from "styled-components";
import { Color } from "../../config/colors";

const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  padding: 36px 0 40px 0;
`;
const Input = styled.input`
  display: block;
  width: 100%;
  padding: 15px 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: none;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  font-size: 16px;
`;

export { Title, Input };
