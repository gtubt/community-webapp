import React from "react";

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const editorConfiguration = {
  toolbar: ["heading", "|", "bold", "italic", "link", "bulletedList", "numberedList", "blockQuote", "horizontalRule"],
  heading: {
    options: [
      { model: "paragraph", title: "Paragraph", class: "ck-heading_paragraph" },
      { model: "heading2", view: "h2", title: "Heading", class: "ck-heading_heading2" },
      { model: "heading3", view: "h3", title: "Sub-Heading", class: "ck-heading_heading3" }
    ]
  }
};

function Editor(props) {
  return (
    <div className="mb-2">
      <CKEditor
        editor={ClassicEditor}
        data="<p>Write here!</p>"
        onInit={editor => {
          // You can store the "editor" and use when it is needed.
          console.debug("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          props.callbackSetContent(data);
          console.debug({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.debug("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.debug("Focus.", editor);
        }}
        config={editorConfiguration}
      />
    </div>
  );
}

export default Editor;
