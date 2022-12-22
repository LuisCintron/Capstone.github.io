import Styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { mobile } from "../responsive";

const Container = Styled.div`

`;

const Wrapper = Styled.div`
    padding: 50px;
    display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}

`;

const ImgContainer = Styled.div`
    flex: 1;
`;

const Image = Styled.img`
    width: 100%;
    height: 70vh;
    object-fit: cover;
    ${mobile({ height: "40vh" })}
`;

const InfoContainer = Styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })}

`;

const Title = Styled.div`
    font-weight: 200;
`;

const Desc = Styled.p`
    margin: 20px 0px;
`;

const Price = Styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = Styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%" })}

`;
const Filter = Styled.div`
    display: flex;
    align-items: center;
`;
const FilterTitle = Styled.span`
    font-size: 20px;
    font-weight: 200;
`;
const FilterColor = Styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0px 5px;
    cursor: pointer;
`;
const FilterSize = Styled.select`
    margin-left: 10px;
    padding;5px;
`;
const FilterSizeOption = Styled.option`

`;
const AddContainer = Styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "100%" })}

`;
const AmountContainer = Styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
    

`;

const Amount = Styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-item: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = Styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  
  &:hover{
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.postimg.cc/RF4QZjqQ/61771caeda7ba4001804d825.png" />
        </ImgContainer>
        <InfoContainer>
          <Title> Winter Collection</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            error qui repudiandae, cumque corrupti repellendus, quia nam nemo
            exercitationem voluptas suscipit sit laborum odit quasi inventore
            veritatis modi molestiae recusandae.
          </Desc>
          <Price> $ 2000</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="gray" />
              <FilterColor color="darkblue" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon />
              <Amount>1</Amount>
              <AddIcon />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Product;
