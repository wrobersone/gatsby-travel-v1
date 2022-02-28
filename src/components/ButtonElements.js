import styled from "styled-components"

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#4fc1b1" : "#ed9d62")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "16px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  font-family: "Ubuntu", sans-serif;
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({ primary }) => (primary ? "#ed9d62" : "#4fc1b1")};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`