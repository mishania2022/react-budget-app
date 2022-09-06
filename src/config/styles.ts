import styled from "styled-components";
import { Color } from "./colors";
import { Media } from "./media";

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 20px 10px;
  max-width: 480px;
  min-height: 100vh;
  background: ${Color.White};

  ${Media.MD} {
    max-width: 744px;
    padding: 20px 10px;
  }

  ${Media.SM} {
    max-width: 390px;
    padding: 20px 10px;
  }
`;

export { Wrapper };
