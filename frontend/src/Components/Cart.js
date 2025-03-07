import Footer from "./Footer";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
// import { TiDelete } from "react-icons/ti";
import { RiDeleteBin2Line } from "react-icons/ri";
import { GiFullPizza } from "react-icons/gi";
import {
  calculateTotalAmount,
  deleteItem,
  clearcart,
  increment,
  decrement,
  deleteIngredient,
} from "../Slice/CartSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Parent = styled.div`
  display: grid;
  // justify-content: center;
  // align-items: center;
  grid-template-columns: 1fr 1fr;
`;
const ParentLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`;
const ParentRight = styled.div`
  display: flex;
  // grid-template-columns:1fr 1fr
  // justify-content: right;
  // aling-items: right;
  flex-direction: column;
  border: 1px solid blue;
  height: 200px;
  padding: 30px;
  margin-top: 10px;
  width: 80%;
  height: 240px;
`;
const IngredientName = styled.div`
  display: flex;

  justify-content: space-between;
  gap: 10px;
`;
// const IngredientPrice = styled.div`
//   display: flex;
//   justify-content: space-between;
//   gap: 10px;
// `;
const Maindiv = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid blue;
  margin: 10px 10px 10px 10px;
  width: 90%;
  //   box-shadow: 0px 2px 4px rgba(0, 0, 0, 1);
  height: 280px;
  padding: 10px;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  align-self: start;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  // margin: 23px 0px 8px 0px;
  align-self: start;
  justify-content: center;
`;

const TypeVeg = styled.div`
  background-color: green;
  height: 20px;
  width: 20px;
  //   margin-left: 70%;
`;
const TypeNonveg = styled.div`
  background-color: red;
  height: 20px;
  //   margin-left: 70%;
  width: 20px;
`;
const DeleteButton = styled.button`
  background-color: orange;
  border-radius: 1rem;
  position: relative;
  height: 30px;
  width: 110px;
  padding: 5px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 10%;
  &:hover {
    background-color: lightblue;
  }
`;
const TotalLabel = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  // gap: 5px;
`;
const ClearButton = styled.div`
  background-color: orange;
  width: 40px;
  cursor: pointer;
  border: 2px solid black;
  color: green;
  padding: 4px;
  margin: 5px 0px 5px 5px;
  &:hover {
    background-color: yellow;
  }
`;
const EmptyLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid green;
  width: 60%;
  margin-left: 250px;
`;
const SubtractDiv = styled.button`
  display: flex;
  cursor: pointer;
  align-items: center;
  hegiht: 20px;
  width: 20px;
  border-radius: 1rem;
  background-color: orange;
`;
const AddDiv = styled.button`
  display: flex;
  cursor: pointer;
  align-items: center;
  hegiht: 20px;
  width: 20px;
  background-color: orange;
  border-radius: 1rem;
`;
const NumberDiv = styled.div`
  display: flex;
  border: 1px dotted blue;
  hegiht: 50px;
  width: 30px;
  align-items: center;
  justify-content: center;
`;
const IncrementDecrement = styled.div`
  display: flex;
  margin: 10px 20px 20px 26px;
  // justify-content: space-between;
  gap: 10px;
`;

const CheckoutButton = styled.div`
  background-color: orange;
  border-radius: 1rem;
  width: 80px;
  cursor: pointer;
  border: 2px solid black;
  color: black;
  padding: 5px;
  margin: 10px 0px 5px 0px;
  &:hover {
    background-color: lightgreen;
  }
`;
const Cart = () => {
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const total = cart.ingredientsSum + cart.totalAmount;
  useEffect(() => {
    dispatch(calculateTotalAmount());
  }, [dispatch]);
  const ClearCartHandler = () => {
    dispatch(clearcart());
  };
  return (
    <div>
      <Header />

      <TotalLabel style={{ textAlign: "center" }}>
        Total Amount: ₹{total !== 0 ? total : 0}.00
        <ClearButton onClick={ClearCartHandler}>Clear</ClearButton>
      </TotalLabel>
      {total ? (
        <Parent>
          <ParentLeft>
            {cart.items.map((item) => (
              <Maindiv>
                <Left>
                  <p style={{ display: "inline-flex" }}>
                    <b>{item.name}</b>&nbsp;&nbsp;&nbsp;
                    {item.type === "veg" ? <TypeVeg /> : <TypeNonveg />}
                  </p>
                  <p>
                    <b>Ingredients: </b> {item.ingredients.join(",")}
                  </p>
                  <p>
                    <b>Price: </b>₹{item.price}.00
                  </p>
                </Left>
                <Right>
                  <p>
                    <img
                      src={item.image}
                      alt={item.name}
                      height="150"
                      width="150"
                    />
                  </p>
                  <IncrementDecrement>
                    <SubtractDiv
                      onClick={() => {
                        dispatch(decrement(item));
                      }}
                    >
                      -
                    </SubtractDiv>
                    <NumberDiv>{item.quantity}</NumberDiv>
                    <AddDiv
                      onClick={() => {
                        dispatch(increment(item));
                      }}
                    >
                      +
                    </AddDiv>
                  </IncrementDecrement>
                  <DeleteButton
                    onClick={() => {
                      dispatch(deleteItem(item));
                    }}
                  >
                    Remove Item
                  </DeleteButton>
                </Right>
              </Maindiv>
            ))}
          </ParentLeft>
          <ParentRight>
            {/* {console.log(cart.ingredients)} */}
            <div
              style={{
                textAlign: "center",
                padding: "0px",
                marginTop: "0px",
                // alignSelf: "start",
              }}
            >
              <h3>Ingredients</h3>
            </div>
            {cart.ingredients.length > 0 ? (
              cart.ingredients.map((item) => (
                <div>
                  <IngredientName>
                    {item.tname}&nbsp;&nbsp;:&nbsp;&nbsp; ₹{item.price}.00
                    <RiDeleteBin2Line
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        dispatch(deleteIngredient(item));
                      }}
                    />
                    {/* <p>Remove</p> */}
                  </IngredientName>
                  <br />
                  {/* <IngredientPrice>{item.price}</IngredientPrice> */}
                </div>
              ))
            ) : (
              <div>No items were added</div>
            )}
            ---------------------------------------------------------------------------
            Ingredients Price&nbsp;&nbsp;:&nbsp;&nbsp; ₹{cart.ingredientsSum}.00
            <Link
              to="/checkout"
              style={{
                textDecoration: "none",
                // backgroundColor: "green",
              }}
            >
              <CheckoutButton>Checkout</CheckoutButton>
            </Link>
            {/* <Checkout>
              <Link to="/checkout"></Link>
              <CheckoutButton>Checkout</CheckoutButton>
            </Checkout> */}
          </ParentRight>
        </Parent>
      ) : (
        <EmptyLabel>
          <h1>Cart is Empty, continue ordering🍕</h1>
          <GiFullPizza
            style={{
              color: "beige",
              height: "160px",
              width: "200px",
              marginTop: "0px",
              marginBottom: "5px",
              // position: "absolute",
            }}
          />
          <Link
            to="/orderPizza"
            style={{
              textDecoration: "none",
              color: "lightblue",
              marginBottom: "10px",
            }}
          >
            ⬅️Order Pizza
          </Link>
        </EmptyLabel>
      )}
      <Footer />
    </div>
  );
};
export default Cart;
