import './App.css';
import React from 'react';
import ReactiveList from './ReactiveList';
import ReactiveListCountry from './ReactiveListCountry';
import ReactiveListFoodPractice from './ReactiveListFoodTaboo';
import ReactiveListCookingMethod from './ReactiveListCookingMethod';
import ReactiveListEatingPractice from './ReactiveListEatingPractice';
import ReactiveListMealPatterns from './ReactiveListMealPatterns';
import ReactiveListReligCultInfl from './ReactiveListReligCultInfl';
import ReactiveListFoodTaboo from './ReactiveListFoodTaboo';
import ReactiveListGrowthNut from './ReactiveListGrowthNut';
import ReactiveListHealthRelated from './ReactiveListHealthRelated';
import ReactiveListPregNut from './ReactiveListPregNut';
import ReactiveListPopFood from './ReactiveListPopFood';
import ReactiveListDND from './ReactiveListDND';
import ReactiveListFNV from './ReactiveListFNV';
import ReactiveListGBC from './ReactiveListGBC';
import ReactiveListMeatAlt from './ReactiveListMeatAlt';
import ReactiveListOther from './ReactiveListOther';
import ReactiveListDrinks from './ReactiveListDrinks';
import ReactiveListDesserts from './ReactiveListDesserts';
import ReactiveListNonVeg from './ReactiveListNonVeg';
import ReactiveListVeg from './ReactiveListVeg';
import ReactiveListTradFood from './ReactiveListTradFood';

class App extends React.Component {
  render() {
    const country = "Cuba";
    return(
      <div>
      <h1>Welcome to our app!</h1>
      <h2>Please choose a country</h2>
      <ReactiveListCountry></ReactiveListCountry>
      <ReactiveList countryName={country}></ReactiveList>
      <h3>Food Practices</h3>
      <ReactiveListFoodPractice countryName={country}></ReactiveListFoodPractice>
      <h4>Cooking Methods</h4>
      <ReactiveListCookingMethod countryName={country}></ReactiveListCookingMethod>
      <h4>Eating Practices</h4>
      <ReactiveListEatingPractice countryName={country}></ReactiveListEatingPractice>
      <h4>Meal Patterns</h4>
      <ReactiveListMealPatterns countryName={country}></ReactiveListMealPatterns>
      <h4>Religious and Cultural Influences</h4>
      <ReactiveListReligCultInfl countryName={country}></ReactiveListReligCultInfl>
      <h3>Food Taboos</h3>
      <ReactiveListFoodTaboo countryName={country}></ReactiveListFoodTaboo>
      <h4>Growth & Nutrition</h4>
      <ReactiveListGrowthNut countryName={country}></ReactiveListGrowthNut>
      <h4>Health Related</h4>
      <ReactiveListHealthRelated countryName={country}></ReactiveListHealthRelated>
      <h4>Pregnancy & Nutrition</h4>
      <ReactiveListPregNut countryName={country}></ReactiveListPregNut>
      <h3>Popular Food Items</h3>
      <ReactiveListPopFood countryName={country}></ReactiveListPopFood>
      <h4>Dairy/NonDairy</h4>
      <ReactiveListDND countryName={country}></ReactiveListDND>
      <h4>Fruits & Vegetables</h4>
      <ReactiveListFNV countryName={country}></ReactiveListFNV>
      <h4>Grains, Bread, and Cereal}</h4>
      <ReactiveListGBC countryName={country}></ReactiveListGBC>
      <h4>Meat and Meat Alternatives</h4>
      <ReactiveListMeatAlt countryName={country}></ReactiveListMeatAlt>
      <h4>Others</h4>
      <ReactiveListOther countryName={country}></ReactiveListOther>
      <h3>Traditional Dishes</h3>
      <ReactiveListTradFood countryName={country}></ReactiveListTradFood>
      <h4>Desserts</h4>
      <ReactiveListDesserts countryName={country}></ReactiveListDesserts>
      <h4>Drinks</h4>
      <ReactiveListDrinks countryName={country}></ReactiveListDrinks>
      <h4>Non-Vegetarian</h4>
      <ReactiveListNonVeg countryName={country}></ReactiveListNonVeg>
      <h4>Vegetarian</h4>
      <ReactiveListVeg countryName={country}></ReactiveListVeg>
      </div>
    );
  }
}

export default App;
