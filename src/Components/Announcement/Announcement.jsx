import React, { useState, useEffect } from "react";
import axios from "axios";
import CancelIcon from "@mui/icons-material/Cancel";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  height: 40px;
  /* background-color: teal; */
  background-color: #${(props) => props.color};
  color: white;
  font-family: "Montserrat", sans-serif;
  font-weight: normal;
  align-items: center;
`;

const Second = styled.div`
  right: 0;
  position: absolute;
  cursor: pointer;
`;

const First = styled.div`
  width: 80%;
`;

const Announcement = () => {
  // Announcement Content State
  const [announcementContent, setAnnouncementContent] = useState("");
  // Boolean state which controls
  const [showAnnouncement, setShowAnnouncement] = useState(false);
  // Color of Notification Bar
  const [color, setColor] = useState("");

  const setCookie = (cName, cValue, expDays) => {
    let date = new Date();
    date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
  };

  // Function which makes setShowAnnouncement false
  const makeFalse = () => {
    setCookie("header", false, 2);
    setShowAnnouncement(false);
  };

  useEffect(() => {
    // Get header Info from API
    const getHeader = () => {
      const promise = axios.get("http://localhost:3003/api/header");
      promise.then((result) => {
        setAnnouncementContent(result.data[0].content);
        setColor(result.data[0].color);
      });
    };
    const getCookie = (cName) => {
      const name = cName + "=";
      const cDecoded = decodeURIComponent(document.cookie); //to be careful
      const cArr = cDecoded.split("; ");
      let res;
      cArr.forEach((val) => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
      });
      return res;
    };

    if (getCookie("header") === "true") {
      setShowAnnouncement(true);
    }
    if (getCookie("header" === "false")) {
      setShowAnnouncement(false);
    } else if (!getCookie("header")) {
      setCookie("header", true, 2);
      setShowAnnouncement(true);
    }

    getHeader();
  }, []);

  const anouncementContainer = (
    <Container color={color}>
      <First>
        <p> {announcementContent} </p>
      </First>
      <Second>
        <CancelIcon onClick={makeFalse}></CancelIcon>
      </Second>
    </Container>
  );

  return <>{showAnnouncement && anouncementContainer}</>;
};

export default Announcement;
