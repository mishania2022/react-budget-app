import styled from "styled-components";
import { Color } from "./colors";
import { Media } from "./media";

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 20px;
  max-width: 480px;
  min-height: 100vh;
  background: ${Color.White};

  ${Media.MD} {
    max-width: 744px;
    padding: 190px 0px;
  }

  ${Media.SM} {
    margin-top: 0px;
    max-width: 390px;
    padding: 100px 0px 90px;
  }
`;

export { Wrapper };
