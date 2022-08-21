import React from "react";
import Styles from "../style/style.module.css";
import { useSelector, useDispatch } from "react-redux";

const SeatDetail = () => {
  const { addtoCart } = useSelector((state) => state.cart);
  const dispatch = useDispatch((state) => state.cart);
  if (!addtoCart) {
    return null;
  }

  const RemoveTicket = (ticket) => {
    dispatch({ type: "DeleteChair", ticket });
    dispatch({ type: "changeColorChair", ticket });
  };

  const total = addtoCart
    .map((x) => {
      return parseInt(x.price);
    })
    .reduce((x, y) => x + y, 0);

  return (
    <>
      <div className="p-3">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className={Styles.SeatBooking}>Number Seat</th>
              <th className={Styles.SeatBooking}>Price</th>
              <th className={Styles.SeatBooking}>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {addtoCart.map((item) => {
              return (
              
                  <tr key={item.name}>
                    <td className={Styles.SeatInfo}>{item.name}</td>
                    <td className={Styles.SeatInfo}>{item.price}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => RemoveTicket(item)}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                
              );
            })}
            <tr>
              <td className={Styles.SeatInfo}>Total: </td>
              <td className={Styles.SeatInfo} colSpan="2">
                {total}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SeatDetail;
