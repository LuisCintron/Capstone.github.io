import styled from "styled-components";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Phone from "@mui/icons-material/Phone";
import Email from "@mui/icons-material/Email";
import Room from "@mui/icons-material/Room";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const Listitem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Drip City</Logo>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
          reprehenderit voluptatem fuga inventore corporis praesentium repellat
          ut ullam sed, qui quisquam provident sequi dolore beatae doloribus
          atque perferendis. Fugit, dicta!
        </Desc>
        <SocialContainer>
          <SocialIcon color="385999">
            <FacebookOutlinedIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="E60023">
            <YouTubeIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <Listitem>Home</Listitem>
          <Listitem>Cart</Listitem>
          <Listitem>Man Fashion</Listitem>
          <Listitem>Wome Fashion</Listitem>
          <Listitem>Accessories</Listitem>
          <Listitem>My Account</Listitem>
          <Listitem>Order Tracking</Listitem>
          <Listitem>Wishlist</Listitem>
          <Listitem>Wishlist</Listitem>
          <Listitem>Terms</Listitem>
        </List>
      </Center>
      <Right>
        <Title>Contacts</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          100 Centre Street, New York 10451
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          1212-223-8000
        </ContactItem>
        <ContactItem>
          <Email style={{ marginRight: "10px" }} />
          DripCityNYC@gmail.com
        </ContactItem>
        <Payment src="https://i.postimg.cc/xTXRrZf4/credit-card-pay-pal-icons.png" />
      </Right>
    </Container>
  );
};

export default Footer;
