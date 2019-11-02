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
  margin-top: 200px;
  padding: 16px;
  border-radius: 8px;
  background: white;
  height: 275px;
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

export const Creds = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: -50px;
  font-size: 16px;
  font-weight: bold;
`;
