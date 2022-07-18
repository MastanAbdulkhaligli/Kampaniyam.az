import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./allowners.module.css";
import OwnerCard from "../../Components/OwnerCard/OwnerCard";

const AllOwners = () => {
  const [allOwners, setAllOwners] = useState([]);

  useEffect(() => {
    const getOwnersData = async () => {
      const { data } = await axios.get("http://localhost:3003/api/owner");
      setAllOwners(data);
    };

    getOwnersData();
  }, []);

  return (
    <main className={style.allOwners}>
      <section className={style.allOwnersContainers}>
        {allOwners.map((owner, index) => {
          return (
            <OwnerCard
              ownerCardImage={owner.image}
              ownerCardTitle={owner.ownerName}
              ownerCardCategory={owner.category}
              key={index}
            />
          );
        })}
      </section>
    </main>
  );
};

export default AllOwners;
