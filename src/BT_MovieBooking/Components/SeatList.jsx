import React from "react";
import cn from "classnames";

import "../style/style.css";
import Styles from "../style/style.module.css";
import { useSelector, useDispatch } from "react-redux";
const SeatList = () => {
  const dispatch = useDispatch();

  const AddTicket = (ticket) => {
    dispatch({ type: "addtoCart", ticket });
    dispatch({ type: "changeColorChair", ticket });
  };
  const ChangeChair = (ticket) => {
    
  };

  const { tickets } = useSelector((state) => state.cart);
  const listRank = tickets.map((product) => {
    return (
      <div key={product.row} className={Styles.txtSeatListNumber}>
        <h5 className={Styles.SeatListItemNumber}>{product.row}</h5>
      </div>
    );
  });
  const listSeat = tickets.map((a) => {
    return a.seats.map((i) => {
      return (
        <div
          key={i.name}
          className={Styles.Seat}
          onClick={() => {
            AddTicket(i);
          }}
        >
          <h5 className={cn(Styles.SeatItem, { SeatSl: i.booked })}>
            {i.name}
          </h5>
        </div>
      );
    });
  });
  return (
    <div className="m-5">
      <div className="table">
        <div className={Styles.txtSeatListNumber}>
          <div className="row">
            <div className={Styles.SeatListNumber}></div>
            <div className="col">
              <div className="row m-0 p-0 justify-content-center">
                <div className={Styles.Seat}>1</div>
                <div className={Styles.Seat}>2</div>
                <div className={Styles.Seat}>3</div>
                <div className={Styles.Seat}>4</div>
                <div className={Styles.Seat}>5</div>
                <div className={Styles.Seat}>6</div>
                <div className={Styles.Seat}>7</div>
                <div className={Styles.Seat}>8</div>
                <div className={Styles.Seat}>9</div>
                <div className={Styles.Seat}>10</div>
                <div className={Styles.Seat}>11</div>
                <div className={Styles.Seat}>12</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className={Styles.SeatListNumber}>{listRank}</div>
          <div className="col">
            <div className="row m-0 p-0 justify-content-center">{listSeat}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatList;
