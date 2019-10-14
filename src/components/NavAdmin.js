import React, { useState } from "react";
import Editor from "./Editor";

import API from "../config";

function NavAdmin(props) {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const data = await fetch(`https:/api.yildizozan.com/api/posts`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        image,
        title,
        content
      })
    });
    const result = await data.json();
    if (result.success) {
      window.location.reload();
    }
  }

  return (
    <section className={"mb-2"}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-brand">Mini Admin Panel</div>
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="pills-home-tab"
              data-toggle="pill"
              href="#pills-home"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Add
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-profile-tab"
              data-toggle="pill"
              href="#pills-profile"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              List
            </a>
          </li>
        </ul>
      </nav>
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
          <form className="container" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="inputImage">Image URL</label>
              <input
                className="form-control"
                id="inputImage"
                placeholder="Image URL"
                value={image}
                onChange={e => setImage(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputTitle">Title</label>
              <input
                className="form-control"
                id="inputTitle"
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <Editor callbackSetContent={setContent} />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
          ...
        </div>
      </div>
    </section>
  );

  // return (<div className={"container"}>
  //     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  //       <a className="navbar-brand" href="#">
  //         Admin Panel
  //       </a>
  //       <button
  //         className="navbar-toggler"
  //         type="button"
  //         data-toggle="collapse"
  //         data-target="#navbarColor01"
  //         aria-controls="navbarColor01"
  //         aria-expanded="false"
  //         aria-label="Toggle navigation"
  //       >
  //         <span className="navbar-toggler-icon" />
  //       </button>
  //
  //       <div className="collapse navbar-collapse" id="navbarColor01">
  //         <ul className="navbar-nav mr-auto">
  //           <li className="nav-item active">
  //             <a className="nav-link" href="#">
  //               Add <span className="sr-only">(current)</span>
  //             </a>
  //           </li>
  //           <li className="nav-item">
  //             <a className="nav-link" href="#">
  //               List
  //             </a>
  //           </li>
  //         </ul>
  //       </div>
  //     </nav>
  //     <div className={"row"}>
  //       <div className={"col-12"}>
  //         <CKEditor
  //           editor={ClassicEditor}
  //           data="<p>Hello from CKEditor 5!</p>"
  //           onInit={editor => {
  //             // You can store the "editor" and use when it is needed.
  //             console.log("Editor is ready to use!", editor);
  //           }}
  //           onChange={(event, editor) => {
  //             const data = editor.getData();
  //             console.log({ event, editor, data });
  //           }}
  //           onBlur={(event, editor) => {
  //             console.log("Blur.", editor);
  //           }}
  //           onFocus={(event, editor) => {
  //             console.log("Focus.", editor);
  //           }}
  //           config={editorConfiguration}
  //         />
  //       </div>
  //     </div>
  //   </div>);
}

export default NavAdmin;
