import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const NavBar = styled.div`
  width: 100%;
  position: fixed;
  height: 64px;
  background: #3f51b5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  color: white;
  z-index: 10;
`;

export const NavWrapper = styled.div`
  height: 100%;
  position: fixed;
  width: 300px;
  margin-top: 64px;
`;

export const Content = styled.div`
  width: calc(100% - 300px);
  margin: 64px;
  margin-left: 364px;
  margin-top: 64px;
  padding-top: 64px;
`;

export const Welcome = styled.div`
  padding-left: 32px;
`;
