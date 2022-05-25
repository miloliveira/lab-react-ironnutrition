import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import { Row, Divider, Button } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [food, setFood] = useState(foods);
const [searchFoods, setSearchFoods] = useState(foods)
const [showFoods, setShowFoods] = useState(true);


  const createFood = (newFood) => {
    const foodUpdated = [...food, newFood];
    setFood(foodUpdated);
    setSearchFoods(foodUpdated)
  }
  const foodSearch = (search)=>{
    let searchResult = food.filter((element)=>element.name.toLowerCase().includes(search.toLowerCase()))
    setSearchFoods(searchResult)
  }
    const deleteFood = (foodName)=>{

      let filteredFood = food.filter((element)=>{
        return element.name !== foodName
      })
      setFood(filteredFood)
      setSearchFoods(filteredFood)
    }

  
    const toggleShow = () =>{
      setShowFoods(!showFoods)
    }
   

  

  return (
    <div className="App">
      {showFoods && <AddFoodForm createFood={createFood} />}

      <Button onClick={toggleShow}>{showFoods?"Hide Form": "Add New Food"}</Button>
      <Search foodSearch={foodSearch}/>

      <Divider>Food List</Divider>

      {searchFoods.length===0 ? <p>No food to show</p> : <Row style={{ width: '100%', justifyContent: 'center' }}>
        {<FoodBox foodInfo={food} foodS={searchFoods} deleteFood={deleteFood} />}
      </Row> }
      
    </div>
  );
}

export default App;
