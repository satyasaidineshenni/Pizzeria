import styled from "styled-components";
const ErrElement = styled.div`
  border: 1px solid blue;
  height: 100px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 200px 100px 200px;
`;
const Errorelement = () => {
  return <ErrElement>You have landed onto the wrong page</ErrElement>;
};
export default Errorelement;
