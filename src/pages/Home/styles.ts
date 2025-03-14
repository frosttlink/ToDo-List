import styled from "styled-components";

export const HomeHeader = styled.div`
  flex: 1;
  height: 12.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme["gray-700"]};
`;

export const HomeContent = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  max-width: 736px;
  margin: 0 auto;
`;

export const AreaRegisterTask = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -1.688rem;
  gap: 0.5rem;

  min-width: 100%;
`;

export const NewTaskInput = styled.input`
  background: ${(props) => props.theme["gray-500"]};
  height: 3.375rem;
  border: 1px solid ${(props) => props.theme["gray-700"]};
  border-radius: 8px;
  font-size: 1rem;
  padding: 1rem;
  color: ${(props) => props.theme["gray-300"]};
  width: 100%;

  &:focus {
    box-shadow: none;
    outline: 2px solid ${(props) => props.theme["purple-dark"]};
  }

  &::placeholder {
    color: ${(props) => props.theme["gray-300"]};
  }
`;

export const NewTaskButton = styled.button`
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme["blue-dark"]};
  color: ${(props) => props.theme["gray-100"]};

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme["blue"]};
  }
`;

export const TaskStatus = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 4rem;
  margin-bottom: 1.5rem;
`;

export const TaskList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 0.75rem;

  width: 100%;
`;

export const CounterTask = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  font-weight: bold;
  font-size: 0.75rem;

  background: ${(props) => props.theme["gray-400"]};
  color: ${(props) => props.theme["gray-200"]};
  padding: 0.125rem 0.5rem;
`

export const Created = styled.p`
  font-weight: bold;
  color: ${(props) => props.theme["blue"]};
`

export const Done = styled.p`
  font-weight: bold;
  color: ${(props) => props.theme["purple"]};
`

export const Stats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
`