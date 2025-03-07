// import "../styNavbarItemng/style.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.ul`
  list-style-type: none;
  background-color: black;
  padding: 15px;
  margin: 0px;
  display: flex;
  align-items: center;
`;
const NavbarItem = styled.li`
  display: inline;
  margin-right: 15px;
  display: flex;
  text-decoration: none;
  color: white;
  &:hover {
    color: green;
  }
`;
const RoundedImage = styled.img`
  border-radius: 40rem;
`;
const CartButton = styled.button`
  position: absolute;
  right: 10px;
  top: 18px;
  background-color: orange;
  border-radius: 1rem;
  height: 40px;
  padding: 5px;
  color: white;
  width: 120px;
  &:hover {
    color: darkgreen;
    background-color: yellow;
  }
  cursor: pointer;
`;
const Header = () => {
  return (
    <div>
      <div>
        <Navbar>
          <Link to="/" style={{ textDecoration: "none" }}>
            <NavbarItem
              style={{ fontFamily: "Comic Sans MS", fontSize: "23px" }}
            >
              Pizzeria<span style={{ color: "burlywood" }}>|</span>
            </NavbarItem>
          </Link>
          <Link to="/">
            <NavbarItem>
              <RoundedImage
                src="PizzeriaLogo.png"
                alt="Pizzeria Logo"
                height="40px"
                width="40px"
              />
            </NavbarItem>
          </Link>
          <Link to="/orderPizza" style={{ textDecoration: "none" }}>
            <NavbarItem style={{ fontFamily: "sans-serif" }}>
              Order Pizza
            </NavbarItem>
          </Link>
          <Link to="/buildYourPizza" style={{ textDecoration: "none" }}>
            <NavbarItem style={{ fontFamily: "sans-serif" }}>
              Build your Pizza
            </NavbarItem>
          </Link>
          <Link to="/Cart">
            <CartButton>🛒Shopping Cart</CartButton>
          </Link>
        </Navbar>
      </div>
    </div>
  );
};
export default Header;
