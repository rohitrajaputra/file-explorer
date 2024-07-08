import { useState } from "react";
import { explorerType } from "../../data/folderData";
import {
  FolderContainer,
  ButtonContainer,
  InputContainer,
  Folder,
  File,
} from "./Folder.styled";

type folderProps = {
  explorer: explorerType;
  handleInsertNode: (folderId: number, item: string, isFolder: boolean) => void;
};

const FolderComponent = ({ explorer, handleInsertNode }: folderProps) => {
  const [expand, setExpand] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false,
  });

  const handleButtonClick = (
    event: React.MouseEvent<HTMLElement>,
    isFolder: boolean
  ) => {
    event.stopPropagation();
    setExpand(true);
    setShowInput({ visible: true, isFolder });
  };

  const handleAddFolderClick = (event: React.KeyboardEvent<Element>) => {
    if (event.key === "Enter" && inputValue) {
      handleInsertNode(explorer.id, inputValue, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  if (explorer.isFolder) {
    return (
      <FolderContainer>
        <Folder onClick={() => setExpand(!expand)}>
          <span>📁 {explorer.name}</span>
          <ButtonContainer>
            <button onClick={(e) => handleButtonClick(e, true)}>
              Folder +
            </button>
            <button onClick={(e) => handleButtonClick(e, false)}>File +</button>
          </ButtonContainer>
        </Folder>
        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {showInput.visible && (
            <InputContainer>
              <span>{showInput.isFolder ? `📁` : `📄`}</span>
              <input
                type="text"
                value={inputValue}
                onChange={(e: React.FormEvent<HTMLInputElement>) =>
                  setInputValue(e.currentTarget.value)
                }
                autoFocus
                onKeyDown={(e) => handleAddFolderClick(e)}
                onBlur={() => setShowInput({ ...showInput, visible: false })}
              />
            </InputContainer>
          )}
          {explorer.items.map((item) => {
            return (
              <FolderComponent
                explorer={item}
                handleInsertNode={handleInsertNode}
              />
            );
          })}
        </div>
      </FolderContainer>
    );
  } else {
    return <File>📄{explorer.name}</File>;
  }
};

export default FolderComponent;
