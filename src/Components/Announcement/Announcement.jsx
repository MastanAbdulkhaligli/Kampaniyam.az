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
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  // Color of Notification Bar
  const [color, setColor] = useState("");

  // Get header Info from API
  const getHeader = () => {
    const promise = axios.get("http://localhost:3001/announcement");
    promise.then((result) => {
      setAnnouncementContent(result.data[0].content);
      setColor(result.data[0].color);
    });
  };

  // Function which makes setShowAnnouncement false
  const makeFalse = () => {
    setShowAnnouncement(false);
  };

  useEffect(getHeader, []);

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
