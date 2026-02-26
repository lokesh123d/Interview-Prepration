import React, { useState } from "react";

const Folder = ({ handleInsertNode, explorer }) => {
  const [isExpand, setIsExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  function handleExpanding(e, isFolder) {
    e.stopPropagation();
    setIsExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  }

  function handleFileInput(e) {
    if (e.key == "Enter" && e.target.value != "") {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({
        visible: false,
      });
    }
  }
  if (explorer.isFolder) {
    return (
      <div>
        <div className="folder" onClick={() => setIsExpand(!isExpand)}>
          <span>📁 {explorer.name}</span>
          <div className="new">
            <button onClick={(e) => handleExpanding(e, true)}>Folder + </button>
            <button onClick={(e) => handleExpanding(e, false)}> File + </button>
          </div>
        </div>
        <div
          style={{ display: isExpand ? "block" : "none", paddingLeft: "25px" }}
        >
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                type="text"
                autoFocus
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                onKeyDown={(e) => handleFileInput(e)}
              />
            </div>
          )}
          {(explorer.items || []).map((exp) => {
            return (
              <Folder
                handleInsertNode={handleInsertNode}
                explorer={exp}
                key={exp.id}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="fileCollection">
        <span className="files"> 📄 {explorer.name}</span>
      </div>
    );
  }
};

export default Folder;
