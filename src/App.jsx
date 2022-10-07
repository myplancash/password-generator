import styled from 'styled-components';

export const Header = styled.h1`
  font-family: 'Karla', sans-serif;
  font-weight: 700;
  font-size: 50px;
  line-height: 1;
  color: var(--text-white);

  & > span {
    color: var(--text-light-mode-green);
    font-family: 'Karla', sans-serif;
    font-weight: 700;
    letter-spacing: 3px;
  }

  @media screen and (min-width: 690px) {
    font-size: 80px;
  }
`
export const P = styled.p`
  color: var(--text-medium-gray);
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 28px;
`

export const Button = styled.button`
  background-color: var(--text-light-mode-green);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  -webkit-appearance: none;
  background-clip: padding-box;
  vertical-align: top;
  width: 100%;
  line-height: 2.75;
  border: 4px solid darkgreen;
  text-align: center;
  background: var(--text-light-mode-green);
  padding: 19px 27px;
  color: var(--text-white);
  font-size: 1rem;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
  margin-top: 30px;
  cursor: pointer;
  transition-property: transform;

  &:hover {
    text-decoration: none;
    outline: 0;
    background: var(--text-light-mode-green-hover);
  }

  &:active {
    transform: scale(.9);
  }

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
`

export const Shadow = styled.div`
  transition-duration: .6s;
  transition: all .6s ease-out;
  transition-property: box-shadow;
  content: "";
  position: absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;
  transform: scale(.9);
  z-index: -1;
  box-shadow: 0 3px 15px -2px rgba(0,0,0,0);

  ${Button}:active ~ {
    box-shadow: 0 3px 15px -2px rgba(0,0,0,.85);
  }
`

export const Line = styled.hr`
  border: 1px solid #2F3E53;
  width: inherit;
  margin-top: 30px;
  margin-bottom: 30px;
`

export const Passwords = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  flex-flow: column nowrap;
  /* max-width: 300px; */
  @media screen and (min-width: 690px) {
    flex-flow: row wrap;
  }
`

export const PasswordInput = styled.input`
  background-color: var(--input-bg-dark);
  border: none;
  padding: 19px 27px;
  border-radius: 6px;
  flex: 1;
  height: 40px;
  font-family: 'Inter', sans-serif;
  text-align: center;
  font-size: 1rem;
  color: #55F991;
`