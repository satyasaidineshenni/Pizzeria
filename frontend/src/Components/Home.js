import styled from "styled-components";
const Parent = styled.div``;
const MainDiv = styled.div`
  padding: 25px;
`;
const Info = styled.div`
  margin: 10px 20px 5px 20px;
`;
const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  margin-top: 10px;
`;
const Ingredientsdiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 3px;
`;
const ChefDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 6px;
`;
const Home = () => {
  return (
    <Parent>
      <Heading>Our Story</Heading>
      <Info>
        We believe in goof we lauched Fresh Pan Pizza best excus awards on our
        facebook fan page. Fans were given situations where they had to come up
        with wacky and func excuses. The person with the best excuse won the
        best excuse badgge and won Pizzaria's vouchers. Their enthusiastic
        response proved that pizzaeria's Fresh pan pizza is the tastiest pan
        pizza Ever!
        <br />
        <br /> Ever since we launched the tastiest pan pizza ever, people have
        not been able to resist the sofest, cheesiest, crunchiest, betterist
        Domino's fresh pan pizza. They have been leaving the stage in the middle
        of a performance and event finfing excuses to be disqualified in a
        football match.
        <br />
        <br /> We lauched fresh pan pizza best excus awards on our facebook fan
        page. Fans were given situations where they had to come up with wacky
        and fun excuses. The person with the best excuse won the best excuse
        badge and won Domino's vouchers. Their enthusiatic response proved that
        Pizzeria's fresh pan pizza is the tastiest pan pizza ever!
      </Info>
      <MainDiv>
        <Ingredientsdiv>
          <p>
            <img
              src="https://image.shutterstock.com/z/stock-photo-raw-dough-for-pizza-with-ingredients-and-spices-on-table-526830277.jpg"
              alt="Ingredients"
              height="300"
              width="500"
            />
          </p>
          <p>
            <p style={{ fontSize: "25px" }}>Ingredients</p>
            <p>
              We're ruthless about godness. We have no qualms about tearing up a
              day-old lettuce leaf (straight from the farm), or steaming a baby
              (carrot). Cut. Cut. Chop. Chop. Steam. Steam. Stir Stir. While
              they're still young and fresh - that's our motto. It makes the
              kitchen a better place.
            </p>
          </p>
        </Ingredientsdiv>
        <ChefDiv>
          <p>
            <p style={{ fontSize: "25px" }}>Our Chefs</p>
            <p>
              They make sauces sing and salads dance. They create magic with
              skill, knowledge, passion and stirring spoons (among other
              things). They make goodness so good, it doesn't know what to do
              with itself. We do though. We send it to you.
            </p>
          </p>
          <p>
            <img
              src="https://thumb1.shutterstock.com/display_pic_with_logo/2982127/437116033/stock-photo-happy-chef-437116033.jpg"
              alt="Chef"
              height="350"
              width="500"
            />
          </p>
        </ChefDiv>
        <Ingredientsdiv>
          <p>
            <img
              src="https://thumb9.shutterstock.com/display_pic_with_logo/175989610/669255388/stock-photo-vintage-analog-kitchen-countdown-timer-with-classical-clock-face-and-red-remaining-time-display-669255388.jpg"
              alt="Time"
              height="350"
              width="500"
            />
          </p>
          <p>
            <p style={{ fontSize: "25px" }}>45 min Delivery</p>
          </p>
        </Ingredientsdiv>
      </MainDiv>
    </Parent>
  );
};
export default Home;
