import React from "react";
import "@styles/admin.css";
import AdminTab from "@components/adminTab";
import SlideUploadCont from "@components/SlideUploadCont";

const AdminPage = () => {
  return (
    <>
      <AdminTab SlideStyleAct="active" header="UPLOAD SLIDE RESOURCES" />
      <div className="slide-container">
        <div className="choose-course">
          <span className="choose-span">
            Choose course to upload slides for
          </span>
          <select className="select-pane">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option4">Option 3</option>
            <option value="option5">Option 3</option>
            <option value="option6">Option 3</option>
            <option value="option7">Option 3</option>
            <option value="option8">Option 3</option>
          </select>
        </div>

        <SlideUploadCont
          date="23 JUL"
          title="DCIT 102 Introduction to Computer Science"
          session="Session 1"
          sem="First Semester"
          vis={true}
        />
        <SlideUploadCont
          date="23 JUL"
          title="DCIT 102 Introduction to Computer Science"
          session="Session 1"
          sem="First Semester"
          vis={true}
        />
        <SlideUploadCont
          date="23 JUL"
          title="DCIT 102 Introduction to Computer Science"
          session="Session 1"
          sem="First Semester"
          vis={true}
        />
        <SlideUploadCont
          date="23 JUL"
          title="DCIT 102 Introduction to Computer Science"
          session="Session 1"
          sem="First Semester"
          vis={true}
        />
      </div>

      <div className="upload-btn">+</div>
    </>
  );
};

export default AdminPage;
