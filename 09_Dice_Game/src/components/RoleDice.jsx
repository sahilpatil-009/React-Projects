

import styled from "styled-components";

const RoleDice = ({currentDice, rollDice}) =>{

    // const[currentDice, setCurrentDice] = useState(1);

    // const generetRandomNumber = function generateNo(min,max){
    //     // console.log(Math.floor(Math.random() * (max-min) + min));
    //     return Math.floor(Math.random() * (max-min) + min);
    // }

    // const rollDice = () =>{
    //     const randomNumber = generetRandomNumber(1,7);

    //     setCurrentDice((prev)=> randomNumber);
    // }

    return(
        <DiceContainer>
            <div className="dice"
            onClick={rollDice}>
                <img src={`/images/dice/dice_${currentDice}.png`} alt="dice 1" />
            </div>
            <p>Click on Dice to Roll</p>
        </DiceContainer>
    );
}

export default RoleDice;

// style

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 45px;

    p {
        font-size: 24px;
    }

    .dice{
        cursor: pointer;

    }
`;