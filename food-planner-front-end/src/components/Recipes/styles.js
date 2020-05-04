import styled from 'styled-components';

export const Wrapper = styled.div``;

export const FilterRow = styled.div`
  display: flex;
  align-items: center;
`;

export const FilterItem = styled.div`
  padding-right: 16px;
`;

export const SearchRow = styled.div`
  padding: 32px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SearchButton = styled.div`
  padding-left: 32px;
`;

export const ResultHeading = styled.div`
  padding-bottom: 16px;
  font-size: 32px;
  color: #132584;
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const LoadingHolder = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 64px;
`;

export const NoResults = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 64px;
  font-size: 20px;
  font-weight: bold;
`;
