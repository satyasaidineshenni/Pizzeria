import styled from "styled-components";
const TableRow = styled.tr`
  //   &:nth-child(odd) {
  //     background-color: whitesmoke;
  //   }
  background-color: whitesmoke;
`;
const TableD = styled.td`
  //   padding: 20px;
  width: 150px;
  height: 10px;
  text-align: center;
`;
const BuildTable = ({ item, onIngredientChange }) => {
  const checkHandler = (e) => {
    onIngredientChange(item, e.target.checked);
  };
  return (
    <TableRow>
      <TableD>
        <img src={item.image} alt={item.tname} height="70px" width="70px" />
      </TableD>
      <TableD>
        {item.tname}&nbsp;&nbsp; ₹{item.price}.00
      </TableD>
      <TableD>
        <input type="checkbox" value={item.price} onChange={checkHandler} />
        Add
      </TableD>
    </TableRow>
  );
};
export default BuildTable;
