import React from 'react';

export default function Dog() {
  const dog = {
    name: 'Saturday',
    age: 'Infinity',
    weight: '15 lbs',
    favoriteFood: 'Watermelon'
  };
  
  return (
    <ul>
      <li>Name: {dog.name}</li>
      <li>Age: {dog.age}</li>
      <li>Weight: {dog.weight}</li>
      <li>Favorite Food: {dog.favoriteFood}</li>
    </ul>
  );
}
