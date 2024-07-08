import styled from "styled-components";

export const FolderContainer = styled.div`
  margin-top: 5px;
`;

export const Folder = styled.div`
  background-color: lightgray;
  width: 300px;
  cursor: pointer;
  margin-top: 6px;
  padding: 3px;
  display: flex;
  justify-content: space-between;
`;

export const File = styled.div`
  margin-top: 5px;
`;

export const InputContainer = styled.div`
  margin-top: 5px;

  input {
    padding: 5px;
  }
`;

export const ButtonContainer = styled.span`
  button {
    background-color: white;
    margin-right: 2px;
    cursor: pointer;
  }
`;
