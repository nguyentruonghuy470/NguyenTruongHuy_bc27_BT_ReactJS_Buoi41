import React, { useEffect } from "react";
import Styles from "../style/style.module.css";
import SeatList from "./SeatList";
import SeatDetail from "./SeatDetail";
const MoiveBooking = () => {
  return (
    <div className={Styles.root}>
      <div className={Styles.containerMovie}>
        <div className="row">
          <div className="col">
            <h1 className="text-center">ĐẶT VÉ XEM PHIM TẠI CYBERLEARN.VN</h1>
            <h3 className="text-center"> Màn hình </h3>
            <p className={Styles.movieScreen}></p>

            <SeatList />
          </div>
          <div className={Styles.movieList}>
            <div className="text-center">
              <h1>DANH SÁCH GHẾ BẠN CHỌN</h1>
            </div>
            <div className={Styles.charlist}>
              <div className={Styles.charlistItem}>
                <p className={Styles.charBook}></p>
                <p className={Styles.txtChar}>Ghế đã đặt</p>
              </div>
              <div className={Styles.charlistItem}>
                <p className={Styles.charSelect}></p>
                <p className={Styles.txtChar}>Ghế đang chọn</p>
              </div>
              <div className={Styles.charlistItem}>
                <p className={Styles.charNullSelect}></p>
                <p className={Styles.txtChar}>Ghế chưa đặt</p>
              </div>
            </div>
            <SeatDetail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoiveBooking;
