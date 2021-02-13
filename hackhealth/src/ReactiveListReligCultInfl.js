import firebase from "firebase/app";
import "firebase/database";
import React, { useState } from 'react';

function ReactiveListReligCultInfl(props) {
  const [list, setList] = useState([]);
  var database = firebase.database();
  if(props.countryName != null) {
    database.ref("nationality/" + props.countryName + "Food Practices/Religious & Cultural Infulences").get().then(function(result) {
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

export default ReactiveListReligCultInfl;
