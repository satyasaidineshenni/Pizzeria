import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addIngredient, addIngredientprice } from "../Slice/CartSlice";
import BuildTable from "./BuildTable";
const Parent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Amount = styled.div`
  display: flex;
`;

const BuildButton = styled.button`
  background-color: yellow;
  border-radius: 1rem;
  position: relative;
  height: 40px;
  width: 110px;
  padding: 5px;
  cursor: pointer;
  margin: 0px 0px 3px 0px;
  &:hover {
    background-color: lightblue;
  }
`;
// const TableD = styled.div`
//   border-style: none;
//   padding: 10px;
//   text-align: center;
//   margin: px 0px 0px 0px;
// `;

// const TableHead = styled.th`
//   border-style: none;
// `;
const BuildYourPizza = () => {
  const [IngredientsData, setIngredientsData] = useState([]);

  let [sum, setSum] = useState(0);

  const [IngredientsArray, setIngredientsArray] = useState([]);

  const cart = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:3001/pizza/getIngredients")
      .then((res) => setIngredientsData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const IngredientChangeHandler = (item, checked) => {
    if (checked) {
      setSum(sum + parseInt(item.price));
      setIngredientsArray([...IngredientsArray, item]);
      // console.log(IngredientsArray);
    } else {
      setSum(sum - parseInt(item.price));
      setIngredientsArray((prev) =>
        prev.filter((ingredient) => ingredient !== item)
      );
    }
  };
  const BuildHandler = () => {
    // dispatch(addIngredient(IngredientsArray));
    IngredientsArray.map((ingredient) => {
      dispatch(addIngredient(ingredient));
    });
    IngredientsArray.map((ingredient) =>
      dispatch(addIngredientprice(ingredient))
    );
    // dispatch(addIngredientprice(IngredientsArray));
  };

  return (
    <Parent>
      Pizzeria now gives you options to build your own pizza. Customize your
      pizza by choosing ingredients from the list given below
      <br />
      <br />
      <Amount>Total Amount: ₹ {sum}.00</Amount>
      {IngredientsData.map((item) => {
        return (
          <div>
            <table>
              <tbody>
                <BuildTable
                  key={item.id}
                  item={item}
                  onIngredientChange={IngredientChangeHandler}
                />
              </tbody>
            </table>
          </div>
        );
      })}
      <BuildButton onClick={BuildHandler}>Build Pizza</BuildButton>
    </Parent>
  );
};
export default BuildYourPizza;
