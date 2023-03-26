import React, { useState } from "react";
import { Button, Col, Row } from "reactstrap";
import { Editor } from 'react-draft-wysiwyg'
import { EditorState } from 'draft-js'
import { useRedux } from "../../../hooks/useRedux";
// import "../../../assets/scss/custom/pages/_draft.scss"
const File = () => {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty())
  const [previewImage, setPreviewImage] = useState<string>('')
  const { useAppSelector } = useRedux();
  const { activeTab } = useAppSelector(state => ({
    activeTab: state.Layout.activeTab,
  }));
  return (
    <React.Fragment>
      <div className={activeTab !== "pills-files" ? "chat-welcome-section " : "mobile-files"}>
        <Row className="w-100 justify-content-center p-5">
          <Col xxl={9} md={9}>
            <Editor toolbarClassName="toolbar_body"
              wrapperClassName="wrapperClassName"
              editorClassName="editor_body"
              editorState={editorState}
              onEditorStateChange={(data: any) => setEditorState(data)} />
          </Col>
          <Col xxl={3} md={3}>
            <div className="drag-image mt-1">
              <input type="file" onChange={(event: any) => setPreviewImage(URL.createObjectURL(event.target.files[0]))} />
              {
                previewImage ? <img src={previewImage} alt="preview" /> : <>
                  <div className="icon"> <i className="bx bx-cloud-upload"></i></div>
                  <h6 className="p-1">Drag & Drop File Here</h6>
                  {/* <span>OR</span><button>Browse File</button> */}

                </>
              }

            </div>
          </Col>
          <Col xs="12" className="d-flex mt-5">
            <Button className="m-1" color="secondary">Reset</Button>
            <Button className="m-1" color="primary">Save</Button>
            <Button className="m-1" color="success">Save & Restrain</Button>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default File;
