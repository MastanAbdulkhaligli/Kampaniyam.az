import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const AdminLogin = () => {
  const user = useSelector((state) => state.user.currentUser);
  let token = "";

  try {
    token = user.accessToken;
  } catch (error) {
    console.log(error);
  }

  console.log(token);

  const config = {
    headers: { token: `Bearer ${token}` },
  };

  const [data, setData] = useState({
    kampaniyaName: "Yoxla",
    owner: "PizzaMizza",
    aboutProduct:
      "Pizza alana kjandkjsnak jnsajkdn kjasndkjnas kjdnaskj dnkjasnd naskdjn aksjdnk jasndkj anskdj",
    startDate: "2022-07-02T20:01:17.553Z",
    endDate: "2015-07-29T20:01:17.553Z",
    price: 21,
    category: "Restaurant",
    image:
      "https://pizzamizza.az/upload/iblock/f14/f14630075fdc4e1a5dd1bc50593320a8.jpg",
    address: "153 Neftchilar Ave, Baku 1001",
    addressLink: "https://goo.gl/maps/Dk6ny2Uz2bfYRn4c7",
    phoneNumber: "0502835000",
    hashTag: ["Pizza", "Yemek", "Emporium"],
  });

  const onClick = async (myData) => {
    const response = await axios
      .post("http://localhost:3003/api/product/add", data, config)
      .then(console.log)
      .catch(console.log);
  };

  return (
    <div>
      AdminLogin
      <button onClick={onClick}>yukle</button>
    </div>
  );
};

export default AdminLogin;
