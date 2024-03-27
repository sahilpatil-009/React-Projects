import styled from "styled-components";
import { BASE_URL } from "../../App";
import { Button, Container } from "../../App";
const SerchResult = ({ data }) => {

    return (
        <FoodCardContainer>
            <Container>
            <FoodCards>
                {data?.map((food) => <FoodCard key={food.name}>
                    <div className="food_img">
                        <img src={BASE_URL + food.image} />
                    </div>
                    <div className="food_info">
                        <div className="info">
                            <h3>{food.name}</h3>
                            <p>{food.text}</p>
                        </div>
                        <Button>${food.price.toFixed(2)}</Button>
                    </div>
                </FoodCard>)}
            </FoodCards>
            </Container>
        </FoodCardContainer>
    );
}

export default SerchResult;

const FoodCardContainer = styled.section`

  min-height: calc(100vh - 210px);
  background-image: url("/bg.png ");
  background-size: cover;

`;

const FoodCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 20px;
    justify-content: center;
    align-items: center;
    padding-top: 80px;
`;

const FoodCard = styled.div`
    width: 340px;
    height: 167px;
    background: rgba(255, 255, 255, 0.22);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);

    box-shadow: inset;
    border-radius: 20px;
    display: flex;

    padding: 8px;

    .food_info{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: end;
        
        h3{
            margin-top: 8px;
            font-size: 16px;
            font-weight: 500;
        }

        p {
            margin-top: 4px;
            font-size: 12px;
        }

        button {
            font-size: 15px;
        }
    }
`;