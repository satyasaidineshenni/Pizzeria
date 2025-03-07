import styled from "styled-components";
const Footerdiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: purple;
`;
const Footer = () => {
  return (
    <Footerdiv>Copyrights @ 2024 Pizzeria. All rights reserved.</Footerdiv>
  );
};
export default Footer;
