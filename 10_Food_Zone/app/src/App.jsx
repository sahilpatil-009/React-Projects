import { useEffect, useState } from "react";
import styled from "styled-components";
import SerchResult from "./components/SearchResults/SerchResult";

export const BASE_URL = "http://localhost:9000";

const App = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [filteredData, setFilteredData] = useState(null);

  const [selectedButton, setSelectedButton] = useState("all");

  useEffect(() => {
    const fetchFoodData = async () => {

      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        console.log(json);

        setData(json);
        setFilteredData(json) //for Filtering Data
        setLoading(false);

      } catch (error) {
        setError("Unable TO Fetch Data");
      }

    };

    fetchFoodData();
  }, []);


  const SerchFood = (e) => {
    const serchVal = e.target.value;
    console.log(serchVal);

    if (serchVal == "") {
      setFilteredData(null);
    }

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(serchVal.toLowerCase())
    );

    setFilteredData(filter);
  }


  const filterFood = (type) =>{
    if(type == "all")
    {
      setFilteredData(data);
      setSelectedButton("all");
      return;
    }

    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );

    setFilteredData(filter)
    setSelectedButton(type);
  }

  if (error) return <div>{error}</div>
  if (loading) return <div>Loading....</div>


  const filterBtns = [
    {
      name:"All",
      type:"all",
    },
    {
      name:"BreakFast",
      type:"breakfast",
    },
    {
      name:"Lunch",
      type:"lunch",
    },
    {
      name:"Dinner",
      type:"dinner",
    },
  ];

  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/logo.svg" alt="logo" />
          </div>

          <div className="serch">
            <input onChange={SerchFood} type="text" placeholder="Serch Food" />
          </div>
        </TopContainer>

        <FilterContainer>
          {/* <Button onClick={()=>filterFood("all")}>All</Button>
          <Button onClick={()=>filterFood("breakfast")}>Breakfast</Button>
          <Button onClick={()=>filterFood("lunch")}>Lunch</Button>
          <Button onClick={()=>filterFood("dinner")}>Dinner</Button> */}

          {
            filterBtns.map((value) =>(
              <Button  
              isSelected = {selectedButton == value.type}
              key={value.name}
              onClick={()=> filterFood(value.type)}>{value.name}</Button>
            ))
          }

        </FilterContainer>
      </Container>
      <SerchResult data={filteredData} />
    </>
  );
};

export default App;

export const Container = styled.div`
  max-width: 1200px;
  /* max-width: 100%; */
  margin: 0 auto;
  /* border: 1px solid white; */
`;

const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .serch{
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
    }
  }

  @media (0 < width < 600px ){
      flex-direction: column;
      height:100px;

  }
`;

const FilterContainer = styled.section`
    display: flex;
    justify-content: center;
    gap: 12px;
    padding-bottom: 40px;
`;

export const Button = styled.button`
  background-color: ${({isSelected})=> ( isSelected ? "#f90000":"#ff4343")};
  outline: 1px solid ${({isSelected})=> ( isSelected ? "#fff":"#ff4343")};
  padding: 6px 12px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

