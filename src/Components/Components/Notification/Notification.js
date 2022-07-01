import axios from "axios";
import { useEffect, useState } from "react";
import "./notification.css";

export default function Notification() {
  const [notices, setNotices] = useState([]);
  const [events, setEvents] = useState([]);
  const [error, setError] = useState("");

  // get event data
  useEffect(() => {
    axios
      .get("http://localhost:8000/notice/all-notice/")
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          setNotices(response?.data.data);
        } else {
          setError("Data not found.!");
        }
      })
      .catch((err) => {
        setError("Data not found.!");
      });
  }, []);

  // get notice data
  useEffect(() => {
    axios
      .get("http://localhost:8000/events/all/")
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          setEvents(response?.data.data);
        } else {
          setError("Data not found.!");
        }
      })
      .catch((err) => {
        setError("Data not found.!");
      });
  }, []);
  return (
    <div id="notification">
      <div className="container">
        <div className="row">
          <div className="col-md-6 left-side">
            <h2 className="my-4">Events</h2>
            <div className="d-flex">
              <div className="date">{events[0]?.date}</div>
              <div>
                <h4>{events[0]?.title}</h4>
                <p>{events[0]?.message}</p>
              </div>
            </div>
            <div className="d-flex my-2">
              <div className="date">{events[1]?.date}</div>
              <div>
                <h4>{events[1]?.title}</h4>
                <p>{events[1]?.message}</p>
              </div>
            </div>
            <div className="d-flex my-2">
              <div className="date">{events[2]?.date}</div>
              <div>
                <h4>{events[2]?.title}</h4>
                <p>{events[2]?.message}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="my-4">Notice Board</h2>

            {notices ? (
              <>
                <div>
                  <h4>{notices[0]?.title}</h4>
                  <small className="my-5">{notices[0]?.date}</small>
                  <p>{notices[0]?.message}</p>
                </div>
                <div>
                  <h4>{notices[1]?.title}</h4>
                  <small className="my-5">{notices[1]?.date}</small>
                  <p>{notices[1]?.message}</p>
                </div>
              </>
            ) : (
              <h6>Notice not available.!</h6>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
