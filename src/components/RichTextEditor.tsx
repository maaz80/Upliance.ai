import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const RichTextEditor: React.FC = () => {
  const [text, setText] = useState(() => {
    return localStorage.getItem("editorContent") || "";
  });

  // Save content to localStorage on change
  useEffect(() => {
    localStorage.setItem("editorContent", text);
  }, [text]);

  return (
    <div className="w-[60%] mx-auto -mt-14  h-full  rounded-lg ">
      {/* <h2 className="text-xl font-semibold mb-3">Rich Text Editor</h2> */}
      <ReactQuill value={text} onChange={setText} className="h-[400px] rounded-2xl " />
    </div>
  );
};

export default RichTextEditor;
