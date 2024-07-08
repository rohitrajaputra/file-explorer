import { explorerType } from "../data/folderData";

const useTraverseTree = (): { insertNode: Function } => {
  function insertNode(
    tree: explorerType,
    folderId: number,
    item: string,
    isFolder: boolean
  ): explorerType {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        items: [],
        isFolder,
      });
      return tree;
    }

    let latestNode = tree.items.map((ob) => {
      return insertNode(ob, folderId, item, isFolder);
    });

    return { ...tree, items: latestNode };
  }

  return { insertNode };
};

export default useTraverseTree;
