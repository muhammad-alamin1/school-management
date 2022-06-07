import React from "react";
import DashboardPanel from "../../../Admin/DashboardPanel/DashboardPanel";

const playLists = [
  {
    _id: 1,
    chapter: "Chapter 2",
    title: "Mathematics Chapter 3",
    url: "",
  },
  {
    _id: 2,
    chapter: "Chapter 2",
    title: "Mathematics Chapter 4",
    url: "",
  },
  {
    _id: 2,
    chapter: "Chapter 2",
    title: "Mathematics Chapter 5",
    url: "",
  },
  {
    _id: 2,
    chapter: "Chapter 2",
    title: "Mathematics Chapter 5",
    url: "",
  },
];

export default function ICTNineTen() {
  return (
    <>
      <DashboardPanel />
      <div className="sidebar-margin">
        <h3 className="my-4">ICT (9-10)</h3>

        <div className="row">
          {playLists.map((list) => (
            <>
              <div className="col-md-4">
                <div class="card text-white bg-dark mb-3">
                  <h3 class="card-header">{list.chapter}</h3>
                  <div class="card-body">
                    <h5 class="card-title">{list.title}</h5>
                    <a href={`${list.url}`} target="_blank" rel="noreferrer">
                      <button className="btn btn-outline-primary my-4">
                        Continue Course
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
