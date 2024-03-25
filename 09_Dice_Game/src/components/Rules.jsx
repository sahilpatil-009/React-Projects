
import styled from "styled-components";
const Rules = ()=>{

    return(
        <RulesContainer>
            <h2>How to Play Dice Game !</h2>
            <div className="text">
                <p>Select Any Number</p>
                <p>Click in dice image</p>
                <p>
                    after click on dice if selected number is equal to dice number you will get same point as dice{" "}
                </p>
                <p>If you get wrong guess then 2 point will be dedcuted</p>
            </div>
        </RulesContainer>
    );
}

export default Rules;

// styles

const RulesContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    margin-top: 40px;
    background-color: #fbf1f1;
    border-radius: 10px;
    padding: 20px;
    h2 {
        font-size: 24px;
    }

    .text {
        margin-top: 24px;
    }
`;