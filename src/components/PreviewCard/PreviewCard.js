import React from "react";
import { FaBriefcase, FaBirthdayCake } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./styles.css";

export default function PreviewCard({ name, occupation, dob, status, link }) {
  return (
    <div class="card text-white previewCard m-3" style={{ maxWidth: "18rem" }}>
      <div class="card-header text-center">{name}</div>
      <div class="card-body">
        {/* <h5 class="card-title">Dark card title</h5> */}
        <p class="card-text">
          <div className="row">
            <div className="col-2">
              <FaBriefcase />
            </div>
            <div className="col-10 text-end">{occupation}</div>
          </div>
          <div className="row mt-2">
            <div className="col-2">
              <FaBirthdayCake />
            </div>
            <div className="col-10 text-end">{dob}</div>
          </div>
          <div className="row mt-2">
            <div className="col-5">STATUS</div>
            <div className="col-7 text-end">{status}</div>
          </div>
        </p>
      </div>
      <Link style={{ textDecoration: "none", color: "white" }} to={link}>
        <button
          type="button"
          class="card-footer mt-2 mb-2 btn btn-outline-success border-success w-100"
        >
          View
        </button>
      </Link>
    </div>
  );
}
