import { useState } from "react";
import explorer from "./data/folderData";
import "./App.css";
import FolderComponent from "./components/folder/Folder";
import useTraverseTree from "./hooks/useTraverseTree";

function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  const { insertNode } = useTraverseTree();

  const handleInsertNode = (
    folderId: number,
    item: string,
    isFolder: boolean
  ) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };
  return (
    <>
      <FolderComponent
        explorer={explorerData}
        handleInsertNode={handleInsertNode}
      />
    </>
  );
}

export default App;
