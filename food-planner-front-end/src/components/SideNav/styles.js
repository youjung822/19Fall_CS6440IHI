import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #8895dc;
  align-items: center;
  padding-top: 64px;
`;

export const LinkWrapper = styled.div`
  width: 200px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  font-size: 18px;
  margin: 4px 0;
  padding: 4px 0;

  ${props => (props.selected ? `background: #3f51b5;` : ``)};
`;
