import React from "react";
import style from "./secondarycard.module.css";

const SecondaryCard = () => {
  return (
    <div className={style.secondaryCardContainer}>
      <div className={style.secondaryCards}>
        <div className={`${style.secondaryCard} ${style.card1}`}>
          <div className={style.smallContainer}>
            <img
              src="https://albali.az/uploads/posts/2019/06/emporium_page-0001.jpg"
              alt=""
            />
          </div>

          <div className={style.cardDetails}>
            <h3>Emporium</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Veritatis ipsam aut facere repellat. Praesentium quas cupiditate
              provident illum animi modi. Odio maiores hic deleniti quod
              perferendis, aperiam sed enim labore?
            </p>
          </div>
        </div>
        <div className={`${style.secondaryCard} ${style.card2}`}>
          <div className={style.smallContainer}>
            <img
              src="https://albali.az/uploads/posts/2019/06/emporium_page-0001.jpg"
              alt=""
            />
          </div>

          <div className={style.cardDetails}>
            <h3>Emporium</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Veritatis ipsam aut facere repellat. Praesentium quas cupiditate
              provident illum animi modi. Odio maiores hic deleniti quod
              perferendis, aperiam sed enim labore?
            </p>
          </div>
        </div>
        <div className={`${style.secondaryCard} ${style.card3}`}>
          <div className={style.smallContainer}>
            <img
              src="https://albali.az/uploads/posts/2019/06/emporium_page-0001.jpg"
              alt=""
            />
          </div>

          <div className={style.cardDetails}>
            <h3>Emporium</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Veritatis ipsam aut facere repellat. Praesentium quas cupiditate
              provident illum animi modi. Odio maiores hic deleniti quod
              perferendis, aperiam sed enim labore?
            </p>
          </div>
        </div>
        <div className={`${style.secondaryCard} ${style.card3}`}>
          <div className={style.smallContainer}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Irshad_logo_%283%29.png/1200px-Irshad_logo_%283%29.png"
              alt=""
            />
          </div>

          <div className={style.cardDetails}>
            <h3>Emporium</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Veritatis ipsam aut facere repellat. Praesentium quas cupiditate
              provident illum animi modi. Odio maiores hic deleniti quod
              perferendis, aperiam sed enim labore?
            </p>
          </div>
        </div>
        <div className={`${style.secondaryCard} ${style.card3}`}>
          <div className={style.smallContainer}>
            <img
              src="https://www.comunicaffe.com/wp-content/uploads/2014/09/Second-Cup-Logo.gif"
              alt=""
            />
          </div>

          <div className={style.cardDetails}>
            <h3>Emporium</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Veritatis ipsam aut facere repellat. Praesentium quas cupiditate
              provident illum animi modi. Odio maiores hic deleniti quod
              perferendis, aperiam sed enim labore?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryCard;
