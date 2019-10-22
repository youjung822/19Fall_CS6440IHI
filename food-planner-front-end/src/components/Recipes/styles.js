import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Row = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
  height: 64px;
  margin-top: -1px;
  justify-content: space-between;

  ${props => (props.noTopBorder ? `border-top: none; font-weight: bold;` : ``)};
`;

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
`;

export const Title = styled.div`
  width: 200px;
  display: flex;
  justify-content: flex-start;
`;

export const CookTime = styled.div`
  width: 150px;
  display: flex;
  justify-content: flex-start;
`;

export const MatchingIngredients = styled.div`
  width: 150px;
  display: flex;
  justify-content: flex-start;
`;

export const LoadingHolder = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 64px;
`;
