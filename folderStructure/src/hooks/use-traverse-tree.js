const useTraverseTree = () => {
  function insertNode(tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items = [
        {
          id: new Date().getTime(),
          name: item,
          isFolder,
          items: [],
        },
        ...tree.items,
      ];
      return tree;
    }
    if (!tree.items) tree.items = [];
    tree.items = tree.items.map((ob) =>
      insertNode(ob, folderId, item, isFolder),
    );
    return tree;
  }

  return { insertNode };
};

export default useTraverseTree;
