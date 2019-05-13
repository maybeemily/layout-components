import React from 'react';

export default function Color() {
  const color = {
    name: 'sky blue',
    hex: '#82d5ff',
    rgb: '(130, 213, 255)',
  };
  
  const style = {
    'background-color': '#82d5ff'
  };

  return (
    <ul>
      <li> Name: <span style={style}>{color.name}</span></li>
      <li>Hex Code: {color.hex}</li>
      <li>RGB: {color.rgb}</li>
    </ul>
  );
}
