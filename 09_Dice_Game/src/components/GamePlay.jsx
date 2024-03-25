import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RoleDice from "./RoleDice";
import { useState } from "react";
import Rules from "./Rules";

const GamePlay = () => {

    const [score, setScore] = useState(0);

    const [selectNumber, setSelectNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState("");
    const [showRules, setShowRules] = useState(false);

    const generetRandomNumber = function generateNo(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const rollDice = () => {
        if (!selectNumber) {
            setError("You have not seleted any Number");
            return;
        }
        setError("");
        const randomNumber = generetRandomNumber(1, 7);
        setCurrentDice((prev) => randomNumber);


        if (selectNumber == randomNumber) {
            setScore((prev) => prev + randomNumber);
        } else {
            setScore((prev) => prev - 1);
        }

        setSelectNumber(null);
    }

    const resetScore = () => {
        setScore(0);
    }


    return (
        <MainContainer>
            <div className="topSection">
                <TotalScore score={score} />
                <NumberSelector
                    selectNumber={selectNumber}
                    setSelectNumber={setSelectNumber}
                    error={error}
                    setError={setError}
                />
            </div>
            <RoleDice currentDice={currentDice} rollDice={rollDice} />

            <div className="btns">
                <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
                <Button
                    onClick={() => setShowRules(prev => !prev)}
                >{showRules ? "Hide" : "Show Rules"}
                </Button>
            </div>

            {showRules && <Rules />}
        </MainContainer>
    )
}

export default GamePlay;

const MainContainer = styled.div`
    padding-top:10px;
    .topSection{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }

    .btns{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        margin-top: 14px;
    }
`;

const Button = styled.button`
    padding: 10px 18px;
    background-color: #000;
    color: #fff;
    border-radius: 5px;
    min-width: 220px;
    border:none;
    font-size: 16px;
    cursor: pointer;
    border: 1px solid transparent;
    transition: all 0.3s ease;

    &:hover{
        background-color: #fff;
        color: #000;
        border: 1px solid #000;

    }
`;

const OutlineButton = styled(Button)`
    background-color: #fff;
    color: #000;
    border: 1px solid #000;

    &:hover{
        background-color: #000;
        color: #fff;
        border: 1px solid transparent;
    }
`;