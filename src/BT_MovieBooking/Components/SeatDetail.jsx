import React from "react";
import Styles from "../style/style.module.css";
import { useSelector, useDispatch } from "react-redux";

const SeatDetail = () => {
  const dispatch = useDispatch();
  const { addtoCart } = useSelector((state) => state.cart);

  const RemoveAllTicket = (ticket) => {
    dispatch({ type: "DeleteAllProduct", ticket });
    dispatch({ type: "changeColorChairAll", ticket });
    
  };
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
              <>
                <tr>
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
              </>
            );
          })}
          <tr>
            <td className={Styles.SeatInfo}>Total: </td>
            <td className={Styles.SeatInfo}>
              {total}
            </td>
            <td>
              <button
                className="btn btn-danger"
                // onClick={() => RemoveAllTicket(addtoCart)}
              >
                X
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SeatDetail;