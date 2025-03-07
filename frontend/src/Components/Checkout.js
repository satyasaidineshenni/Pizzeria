import styled from "styled-components";
import { TiTick } from "react-icons/ti";
const Order = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: lightgreen;
  flex-direction: column;
  //   height: 200px;
  //   width: 200px;
  margin: 20px 180px 60px 180px;
`;
const Checkout = () => {
  return (
    <Order>
      <TiTick
        style={{
          height: "150px",
          width: "150px",
          justifyContent: "center",
          //   flexDirection: "column",
        }}
      />{" "}
      <h3>Order Placed Successfully</h3>
    </Order>
  );
};
export default Checkout;
