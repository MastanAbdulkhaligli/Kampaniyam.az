import React, { useState, useEffect } from "react";
import style from "./ownerpage.module.css";
import SecondaryCard from "../../Components/SecondaryCard/SecondaryCard";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "../../Components/Cards/Card";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import PhoneIcon from "@mui/icons-material/Phone";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1600px;
  /* min-height: 800px; */
  display: flex;
  flex-wrap: wrap;
  /* align-items: center; */
  margin: 0 auto;
  justify-content: center;
  gap: 25px;
`;

const OwnerPage = () => {
  const { ownerName } = useParams();
  const [owner, setOwner] = useState([{}]);
  const [ownerKampaniyas, setOwnerKampaniyas] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `http://localhost:3003/api/owner/${ownerName}`
      );

      setOwner(data.spesificOwner);
      setOwnerKampaniyas(data.ownerKampaniyas);
    };

    getData();
  }, []);

  const timeLeft = (end) => {
    end = new Date(end.substring(0, 10));
    const today = new Date();
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const diffTime = Math.abs(end - today);
    const diffDays = Math.ceil(diffTime / _MS_PER_DAY);
    return diffDays;
  };

  return (
    <div>
      <div className={style.singleProductContainer}>
        <div className={style.spLeft}>
          <img src={owner[0].image} className={style.spImage} />
        </div>
        <div className={style.spRight}>
          <div className={style.productDescription}>
            <h1>{owner[0].ownerName}</h1>
            <span className={style.categoryText}>{owner[0].category}</span>
            <h3></h3>
            <h2>{owner[0].kampaniyaName}</h2>
            <p>{owner[0].about}</p>

            <div className={style.border}></div>

            <div className={style.location}>
              <LocationOnIcon className={style.locationIcon}></LocationOnIcon>
              {/* <p>{owner[0].address}</p> */}
              <a className={style.addressLink} href={owner[0].addressLink}>
                {owner[0].address}
              </a>
            </div>

            <div className={style.singleTelephone}>
              <PhoneIcon className={style.singleTelephoneIcon}></PhoneIcon>
              <p>
                <a
                  className={style.phoneNumber}
                  href={`tel:${owner[0].telephoneNumber}`}
                >
                  {owner[0].telephoneNumber}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.seperator}></div>
      <h2 className={style.others}>{owner[0].ownerName} aid kampaniyalar</h2>
      <Container>
        {ownerKampaniyas.map((item) => {
          const {
            _id,
            kampaniyaName,
            owner,
            aboutProduct,
            startDate,
            endDate,
            price,
            category,
            image,
          } = item;

          return (
            <div key={item._id}>
              <Card
                _id={_id}
                name={kampaniyaName}
                company={owner}
                about={aboutProduct}
                date={timeLeft(endDate)}
                price={price}
                category={category}
                image={image}
                data={item}
              />
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default OwnerPage;
