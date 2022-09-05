import styled from "styled-components";
import { Color } from "../../config/colors";

const Title = styled.h3`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  padding: 36px 70px 40px 20px;
`;
const Input = styled.input`
  display: block;
  width: 100%;
  padding: 15px 20px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: none;
  margin-bottom: 20px;

  font-size: 16px;
  flood-color: ${Color.DarkPink};

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export { Title, Input };
