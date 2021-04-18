import styled from 'styled-components';
import {
  BOOK_ITEM_FOOTER_COLOR,
  FOOTER_LINK_COLOR,
  FOOTER_LINK_COLOR_HOVER,
  TITLE_COLOR,
} from 'constants/colors';
import {
  BookAPILinkFontSize,
  BookAuthorFontSize,
  BookTitleFontSize,
} from 'typography';

export const BookItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 850px;
  border-radius: 8px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.04), 0 4px 10px 0 rgba(13, 35, 67, 0.25);
  cursor: pointer;
  overflow: hidden;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const BookItemMain = styled.div`
  display: flex;
  width: 100%;
  min-height: 220px;
  padding: 18px 16px 0;

  img {
    width: 122px;
    height: 80%;
    margin-left: 16px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 12px;
  }
`;

export const BookInfo = styled.section`
  display: flex;
  flex-direction: column;
  width: calc(100% - 138px);

  h2 {
    width: 100%;
    margin: 0;
    ${BookTitleFontSize};
    color: ${TITLE_COLOR};
  }

  h3 {
    ${BookAuthorFontSize};
    margin: 26px 0 4px;
  }

  p {
    margin: 0;
  }
`;

export const BookItemFooter = styled.div`
  width: 100%;
  line-height: 15px;
  padding: 11px 16px 12px;
  margin-top: 25px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${BOOK_ITEM_FOOTER_COLOR};

  a {
    ${BookAPILinkFontSize};
    text-decoration: none;
    outline: none;
    color: ${FOOTER_LINK_COLOR};

    &:hover {
      color: ${FOOTER_LINK_COLOR_HOVER};
    }
  }
`;
