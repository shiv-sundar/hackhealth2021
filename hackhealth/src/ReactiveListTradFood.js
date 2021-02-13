import firebase from "firebase/app";
import "firebase/database";
import React, { useState } from 'react';

function ReactiveListTradFood(props) {
  const [list, setList] = useState([]);
  var database = firebase.database();
  if(props.countryName != null) {
    database.ref("nationality/" + props.countryName + "Tradition Dishes").get().then(function(result) {
      if (result.exists()) {
        const newList = [];
        result.forEach(function(item) {
          newList.push(item.key);
        })
        setList(newList);
      }
    });

    const listItems = list.map((item, index) =>
    <li key={index}>
    {item}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}
}

export default ReactiveListTradFood;
