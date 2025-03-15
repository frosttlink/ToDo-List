import { Trash } from "phosphor-react";
import styled from "styled-components";

export const Task = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  min-width: 736px;
  height: 4.5rem;
  padding: 1rem;
  gap: 0.75rem;

  background-color: ${(props) => props.theme["gray-500"]};
  color: ${(props) => props.theme["gray-100"]};

  border: 1px solid ${(props) => props.theme["gray-400"]};
  border-radius: 8px; 

  p {
    display: flex;
    flex: 1;
  }
`;

export const TaskCheck = styled.input.attrs({ type: "checkbox" })`
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  
  width: 17px;
  height: 17px;

  border-radius: 9999px;
  border: 2px solid ${(props) => props.theme["blue"]};

  cursor: pointer;
  transition: all 0.2s ease;
  
  background: transparent;
  position: relative;

  &:hover {
    background-color: ${(props) => props.theme["blue-dark"]};
    opacity: 0.5;
  }

  &:checked {
    background-color: ${(props) => props.theme["purple-dark"]};
    border-color: ${(props) => props.theme["purple-dark"]};

    &:hover {
      background-color: ${(props) => props.theme["purple"]};
    }
  }

  &:checked::after {
    content: "✔";
    font-size: 0.625rem;
    color: ${props => props.theme["gray-100"]};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const CustomTrash = styled(Trash)`
  cursor: pointer;
  color: ${props => props.theme["gray-100"]};
  transition: all 0.2s ease;
  
  &:hover {
    color: ${props => props.theme.danger} !important;
  }
`