import React from 'react';
import { Card, Col, Button, Row, span } from 'antd';

function FoodBox(props) {
  const { foodInfo, foodS, deleteFood } = props;
  return (
      
    <Row  >
      {foodInfo && foodS.map((element) => {
        return (
          <Card
            title={element.name}
            style={{ width: 230, height: 300, margin: 10 }}
          >
            <img src={element.image} height={60} alt="food" />
            <p>Calories: {element.calories}</p>
            <p>
              Servings: <b>{element.servings}</b>
            </p>
            <p>
              <b>Total Calories: {element.calories*element.servings}</b>kcal
            </p>
            <Button type="primary" onClick={()=> deleteFood(element.name)}> Delete </Button>
          </Card>
        );
      })}
    </Row>
    
  );
}

export default FoodBox;
