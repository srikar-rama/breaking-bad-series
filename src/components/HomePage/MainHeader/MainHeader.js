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
        {/* <img
          className="img-fluid"
          width="1040"
          height="780"
          src="/images/wp_png2.png"
        /> */}
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://www.teahub.io/photos/full/36-367818_breaking-bad-wallpaper-logo.jpg" class="d-block w-100" alt="..."></img>
            </div>
            <div class="carousel-item">
              <img src="https://cdn.vox-cdn.com/thumbor/k34mm_1kkLwFNVAdzYyCdxORHQc=/0x0:3000x2000/1200x800/filters:focal(1281x491:1761x971)/cdn.vox-cdn.com/uploads/chorus_image/image/65361653/shaker_camino_10.0.jpg" class="d-block w-100" alt="..."></img>
            </div>
            <div class="carousel-item">
              <img src="https://www.tvmovie.de/assets/2019/09/18/72861-diese-breaking-bad-figur-kehrt-in-el-camino-zurueck.jpg" class="d-block w-100" alt="..."></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
