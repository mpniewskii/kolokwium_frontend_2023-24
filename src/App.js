import React, { useState, useEffect, useRef } from 'react';
import data from './data.json';
import './style.css';

const App = () => {
  const [objects, setObjects] = useState([]);
  const [update, setUpdate] = useState(false);
  const selectedObjectRef = useRef();

  useEffect(() => {
    setObjects(data.objects);
  }, []);

  const handleClick = (object) => {
    selectedObjectRef.current = object;
    setUpdate(!update);
  };
  const useHookFiltr = (objects, size) => {
    return objects.filter((object) => object.properties.size === size);
  };
  const filteredObjects = useHookFiltr(objects, 'small'); //wpisujta co chceta

  return (
    <div>
      {objects.map((object) => (
        <div
          key={object.id}
          onClick={() => handleClick(object)}
          style={{
            border: '1px solid black',
            padding: '20px',
            margin: '20px',
            backgroundColor:
              selectedObjectRef.current === object ? 'lightgray' : 'white', //estetycznie:)))))))
          }}
        >
          <h2>{object.name}</h2>
          <p>{object.description}</p>
          <p>Color: {object.properties.color}</p>
          <p>Size: {object.properties.size}</p>
          <p>Is Active: {object.properties.isActive ? 'True' : 'false'}</p>
          <p>
            Coordinates: {object.properties.coordinates.latitude},{' '}
            {object.properties.coordinates.longitude}
          </p>
        </div>
      ))}
      <h2>Przefiltrowane</h2>
      {filteredObjects.map((object) => (
        <div
          key={object.id}
          onClick={() => handleClick(object)}
          style={{
            border: '1px solid black',
            padding: '20px',
            margin: '20px',
            backgroundColor: 'white',
          }}
        >
          <h2>{object.name}</h2>
          <p>{object.description}</p>
          <p>Color: {object.properties.color}</p>
          <p>Size: {object.properties.size}</p>
          <p>Is Active: {object.properties.isActive ? 'True' : 'false'}</p>
          <p>
            Coordinates: {object.properties.coordinates.latitude},{' '}
            {object.properties.coordinates.longitude}
          </p>
        </div>
      ))}
    </div>
  );
};

export default App;
