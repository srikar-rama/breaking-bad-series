import React from "react";
import "./styles.css";

function MainHeader() {
  return (
    <div className="row mainHeader m-0 p-0">
      <div className="col-12 col-md-3 row m-0 p-0 headerLeftBox">
        {/* headerLeftTitle */}
        <div className="col align-self-center p-4">
          <h1 className="headerLeftTitle">Breaking Bad</h1>
          <div className="titleSubInfo pt-4">
            <span>2008 &ensp; | &ensp;</span>
            <span className="eighteenPlus">&ensp; 18+ &ensp; </span>
            <span>&ensp; | &ensp; 5 Seasons &ensp; | </span>
            <span>&ensp; TV Thrillers &ensp; </span>
          </div>
          <div className="titleDesc">
            <p className="col">
              A terminally ill chemistry teacher teams with a former student to
              manufacture crystal meth to secure his family's future.
            </p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-9 m-0 p-0 headerRightBox">
        <img
          className="img-fluid"
          width="1040"
          height="780"
          src="/images/wp_png2.png"
        />
      </div>
    </div>
  );
}

export default MainHeader;
