import React, { useEffect, useState } from "react";
import axiosInstance from "../../../Hooks/axios";
import DashboardPanel from "../../Admin/DashboardPanel/DashboardPanel";
import FAQ from "../../Components/FAQ/FAQ";
import "./userNoticeBoard.css";

export default function Notice() {
  const [active, setActive] = useState(false);
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // get all student data
  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/notice/all-notice")
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          setNotices(response.data.data);
          console.log(response.data.data);
        } else {
          setError("Data not found.!");
        }
        setLoading(false);
      })
      .catch((err) => {
        setError("Data not found.!");
        setLoading(false);
      });
  }, []);

  const toggleFAQ = (index) => {
    setNotices(
      notices.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <>
      <DashboardPanel />
      <div className="sidebar-margin">
        <h3 className="my-4">Notice Board</h3>
        <div>
          <div className="faqs">
            {notices.map((faq, i) => (
              <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
