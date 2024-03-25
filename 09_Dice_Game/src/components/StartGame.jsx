import Styled, { styled } from "styled-components";

const StartGame = ({toggle}) =>{

    return(
        <>
            <Container>
                <div>
                    <img src="/dices.png" alt="dicesImage" />
                </div>
                
                <div className="content">
                    <h1>DICE GAME</h1>
                    <Button onClick={toggle}>Playe Now !</Button>
                </div>
            </Container>
        </>
    )
}

export default StartGame;

const Container = styled.div`
    max-width: 1180px;
    height: 100vh;
    display: flex;
    margin:  0 auto;
    align-items: center;

    .content{
        h1 {
            font-size: 95px;
            white-space: nowrap;
        }
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