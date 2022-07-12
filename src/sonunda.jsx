import { VirtuosoGrid } from "react-virtuoso";
import styled from "@emotion/styled";

// My design now
const Container = styled.div`
  max-width: 1600px;
  /* min-height: 800px; */
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  gap: 25px;
`;

const CardDesign = styled.div`
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 180px 160px 80px;
  grid-template-areas: "image" "text" "stats";
  border-radius: 5px;
  background: white;
  box-shadow: unset;
  text-align: center;
  /* hashtable color */
  border: 1px solid rgb(${(props) => props.color});

  transition: 0.5 ease;
  font-family: "Montserrat", sans-serif;

  &:hover {
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
    /* border: 1px solid rgb(${(props) => props.color}); */
  }

  /* cursor: pointer; */
`;

const CardImage = styled.div`
  grid-area: image;
  background: url(${(props) => props.image});
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-size: cover;
`;

const CardText = styled.div`
  grid-area: text;
  margin: 25px;
`;

const CardStats = styled.div`
  grid-area: stats;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  /* hashtable color  */
  background: rgb(${(props) => props.color});
  /* background: rgb(132, 3, 252); */
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  color: white;
`;

const Value = styled.div`
  font-size: 22px;
  font-weight: 500;
`;

const Type = styled.div`
  font-size: 11px;
  font-weight: 300;
  text-transform: uppercase;
`;

const CardDate = styled.span`
  color: rgb(255, 7, 110);
  font-size: 14px;
`;
const CardTitle = styled.h2`
  margin-top: 5px;
  font-size: 20px;
`;

const CardDescription = styled.p`
  color: gray;
  font-size: 15px;
  font-weight: 300;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const ReadMore = styled.p`
  margin-top: 15px;
  font-size: 18px;
  color: #358ed7;
  font-family: "Montserrat", sans-serif;
`;

// End of My design

const ItemContainer = styled.div`
  padding: 0.5rem;
  width: 33%;
  display: flex;
  flex: none;
  align-content: stretch;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 300px) {
    width: 100%;
  }
`;

const ItemWrapper = styled.div`
  flex: 1;
  text-align: center;
  font-size: 80%;
  padding: 1rem 1rem;
  border: 1px solid var(gray);
  white-space: nowrap;
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* color: red;
  background-color: #7856ff; */
`;

const Item = styled.div`
  width: 100%;
  height: 200px;
  background-color: #7856ff;
  color: red;
`;

export default function App() {
  return (
    <>
      <VirtuosoGrid
        style={{ height: "100vh" }}
        totalCount={10000}
        overscan={200}
        components={{
          Item: ItemContainer,
          List: ListContainer,
          ScrollSeekPlaceholder: ({ height, width, index }) => (
            <ItemContainer>
              <ItemWrapper>{"--"}</ItemWrapper>
            </ItemContainer>
          ),
        }}
        itemContent={(index) => (
          // <ItemWrapper>
          //   {" "}
          //   <Item> Item {index} </Item>
          // </ItemWrapper>
          <Container>
            <CardDesign color="50, 168, 115">
              <CardImage image="https://www.falstaff.com/fileadmin/_processed_/b/b/csm_BerryDrink-c-Shutterstock-2640_77254982b0.jpg"></CardImage>
              <CardText>
                <CardDate>LimitSiz Icki</CardDate>
                <CardTitle>95Degree</CardTitle>
                <CardDescription>
                  loremansdjnaskdkasjdbkasbdkasdkjnaskdjnkjasndknaskjdnaksjndkajsndkjnaskjdnkasndkjnaskjnk
                  ajsdbajshbdjhasb djbasjhd bjasb djahsbdj habsjdh basjd
                  naksdhasbdjb asjhdbj absdj
                </CardDescription>
                <ReadMore>Daha Etrafli</ReadMore>
              </CardText>
              <CardStats color="50, 168, 115">
                <Stat>
                  <Value>5</Value>
                  <Type>Gun</Type>
                </Stat>
                <Stat>
                  <Value>20</Value>
                  <Type>AZN</Type>
                </Stat>
                <Stat>{/* <FavoriteBorderIcon onClick={onClick} /> */}*</Stat>
              </CardStats>
            </CardDesign>
          </Container>
        )}
        scrollSeekConfiguration={{
          enter: (velocity) => Math.abs(velocity) > 200,
          exit: (velocity) => Math.abs(velocity) < 30,
        }}
      />
      <style>{`html, body, #root { margin: 0; padding: 0 }`}</style>
    </>
  );
}
