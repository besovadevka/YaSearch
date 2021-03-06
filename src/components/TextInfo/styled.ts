import styled from 'styled-components';
import { TextBlockFontSize } from 'typography';

export const TextInfoWrapper = styled.div`
  width: 100%;
  height: 100%;

  p {
    ${TextBlockFontSize};
    margin-left: 16px;
  }
`;
