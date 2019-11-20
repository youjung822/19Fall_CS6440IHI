import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: white;
  display: flex;
  align-content: center;
  justify-content: center;
  background: #8895dc;
  z-index: 15;
`;

export const Content = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  padding: 16px;
  border-radius: 8px;
  background: white;
  height: 650px;
  position: relative;
  box-shadow: 1px 1px 1px black;
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 600;
  color: #132584;
  text-align: center;
  padding-bottom: 16px;
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
`;

export const Fail = styled.div`
  width: 100%;
  text-align: center;
  color: red;
  padding-bottom: 12px;
  font-size: 18px;
`;

export const ChipsWrapper = styled.div`
  flex: 1;
`;
