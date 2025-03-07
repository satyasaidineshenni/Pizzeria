import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import { addItem, increment, totalAmount } from "../Slice/CartSlice";
const Parent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`;
const Container = styled.div`
  display: flex;
  padding: 15px;
  border: 1px solid lightblue;
  margin: 20px 0px 10px 10px;
  width: 90%;
  justify-content: space-between;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 1);
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  align-self: start;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: start;
  margin-top: 22px;
  padding: 8px;
`;
const Middle = styled.div`
  display: flex;
  flex-direction: column;
  align-self: start;
  padding: 8px;
`;
const CartButton = styled.button`
  background-color: orange;
  border-radius: 1rem;
  position: relative;
  height: 30px;
  width: 110px;
  padding: 5px;
  cursor: pointer;
`;
const TypeVeg = styled.div`
  background-color: green;
  height: 20px;
  width: 20px;
`;
const TypeNonveg = styled.div`
  background-color: red;
  height: 20px;
  width: 20px;
`;
const OrderPizza = () => {
  const dispatch = useDispatch();
  const AddItemHandler = (item) => {
    dispatch(addItem({ ...item, amount: item.price }));
    dispatch(increment(item));
    console.log(item);
  };
  const [pizzaData, setPizzaData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/pizza/getData")
      .then((res) => setPizzaData(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(pizzaData);
  return (
    <Parent>
      {pizzaData.map((item) => {
        return (
          <Container>
            <Left>
              <p>
                <b>{item.name}</b>
              </p>
              <p>₹{item.price}.00</p>
              {item.type === "veg" ? (
                <TypeVeg></TypeVeg>
              ) : (
                <TypeNonveg></TypeNonveg>
              )}
            </Left>
            <Middle>
              <p>{item.description}</p>
              <p>
                <b>Ingredients: </b>
                {item.ingredients.join(",")}
              </p>
              <p>
                <b>Toppings: </b>
                {item.topping.join(",")}
              </p>
            </Middle>
            <Right>
              <img src={item.image} alt={item.name} height="150" width="150" />
              <CartButton
                onClick={() => {
                  AddItemHandler(item);
                }}
              >
                Add to Cart
              </CartButton>
            </Right>
          </Container>
        );
      })}
    </Parent>
  );
};
export default OrderPizza;
