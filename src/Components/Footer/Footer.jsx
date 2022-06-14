import React from "react";
import style from "./footer.module.css";
import styled from "styled-components";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";

const SocialIcons = styled.div`
  display: flex;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  color: white;
  border-radius: 5px;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  cursor: pointer;

  /* &:hover {
    background-color: rgb(133, 208, 249);
  } */
`;

const Description = styled.p`
  margin: 20px 0px;
`;

const Footer = () => {
  return (
    <>
      <div className={style.footer}>
        <div className={style.leftfooter}>
          <h1 className={style.footerHeader}>Kampaniya.az</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
            tenetur necessitatibus sed. Adipisci, similique! Cumque animi
            impedit perspiciatis ut iusto!
          </p>

          <SocialIcons>
            <Icon color="3B5999">
              <FacebookIcon />
            </Icon>
            <Icon color="E4405F">
              <InstagramIcon />
            </Icon>
            <Icon color="2ea6da">
              <TelegramIcon />
            </Icon>
          </SocialIcons>
        </div>
        <div className={style.middlefooter}>
          <h2>Categories</h2>
          <ul>
            <li>Home</li>
            <li>Pubs</li>
            <li>Cofee Shop</li>
            <li>Restaurants</li>
            <li>Parfumery</li>
          </ul>
        </div>
        <div className={style.rightfooter}>
          <h2>Newsletter</h2>
          <p>
            Subscribe to our newsletter to get your weekly dose of news, updates
            and special offers
          </p>

          <div className={style.inpBox}>
            <div className={style.mailContainer}>
              <EmailIcon style={{ color: "#8BB7E6", fontSize: 30 }} />
              <input className={style.mailInput} type="email" />
            </div>
            <button className={style.footerbutton}>Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
