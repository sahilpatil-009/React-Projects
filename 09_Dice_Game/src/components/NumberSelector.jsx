import styled from "styled-components";

const NumberSelector = ({selectNumber, setSelectNumber, error, setError}) => {

    const arrayNumber = [1, 2, 3, 4, 5, 6];

    // const [selectNumber, setSelectNumber] = useState();
    //    console.log(selectNumber); 

    const numberSeleterHandler = (value) =>{
        setSelectNumber(value)
        setError("");
    }
    return (
        <NumberContainer>
            <p className="error">{error}</p>
            <div className="flex">
                {
                    arrayNumber.map((value, i) => (
                        <Box
                            key={i}
                            onClick={() => numberSeleterHandler(value)}
                            isSelected={value == selectNumber}
                        >{value} </Box>
                    ))
                }
            </div>
            <p>Selected Number</p>
        </NumberContainer>

    )
}

export default NumberSelector;

// style

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid #000;
    display: grid;
    place-items:center;
    font-size:24px;
    font-weight:700;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (props.isSelected ? "white" : "black")};
`;

const NumberContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    .flex{
        display: flex;
        gap: 24px;
    }

    p {
        font-size:24px;
        font-weight: 700px;
    }

    .error{
        color: red;
    }
`;

