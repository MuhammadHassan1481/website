// import React, { useState } from 'react';

// function App() {
 
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>Counter: {count}</h1>
 
//       <button onKeyDown={() => setCount(count + 1)}>Increase</button>
//       <button onKeyUp={() => setCount(count - 1)}>Decrease</button>
//       <button onClick={() => setCount(0)}>Reset</button>
//     </div>
//   );
// }

// export default App;





// import React, { useState } from 'react';

// function MathTable() {
//   const [number, setNumber] = useState(''); 

//   const handleInputChange = (event) => {
//     setNumber(event.target.value); 
//   };

//   return (
//     <div>
//       <h1>Math Table</h1>
//       <input
//         type="number"
//         value={number}
//         onChange={handleInputChange}
//         placeholder="Enter a number"
//       />
//       <div>
        
//         {number && (
//           <div>
//             <p>{number} x 1 = {number * 1}</p>
//             <p>{number} x 2 = {number * 2}</p>
//             <p>{number} x 3 = {number * 3}</p>
//             <p>{number} x 4 = {number * 4}</p>
//             <p>{number} x 5 = {number * 5}</p>
//             <p>{number} x 6 = {number * 6}</p>
//             <p>{number} x 7 = {number * 7}</p>
//             <p>{number} x 8 = {number * 8}</p>
//             <p>{number} x 9 = {number * 9}</p>
//             <p>{number} x 10 = {number * 10}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default MathTable;










// calculator










// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [input, setInput] = useState('');
//   const [memory, setMemory] = useState(0);

//   // Handle button clicks
//   const handleButtonClick = (value) => {
//     setInput((prevInput) => prevInput + value);
//   };

//   // Handle clear input
//   const handleClear = () => {
//     setInput('');
//   };

//   // Handle calculation
//   const handleCalculate = () => {
//     try {
//       setInput(eval(input).toString());
//     } catch {
//       setInput('Error');
//     }
//   };
//   return (
//     <div className="calculator">
//       <div className="display">
//         <input type="text" value={input} readOnly />
//       </div>
//       <div className="buttons">
//         <button onClick={() => handleButtonClick('7')}>7</button>
//         <button onClick={() => handleButtonClick('8')}>8</button>
//         <button onClick={() => handleButtonClick('9')}>9</button>
//         <button onClick={() => handleButtonClick('/')}>/</button>
//         <button onClick={() => handleButtonClick('4')}>4</button>
//         <button onClick={() => handleButtonClick('5')}>5</button>
//         <button onClick={() => handleButtonClick('6')}>6</button>
//         <button onClick={() => handleButtonClick('*')}>*</button>
//         <button onClick={() => handleButtonClick('1')}>1</button>
//         <button onClick={() => handleButtonClick('2')}>2</button>
//         <button onClick={() => handleButtonClick('3')}>3</button>
//         <button onClick={() => handleButtonClick('-')}>-</button>
//         <button onClick={() => handleButtonClick('0')}>0</button>
//         <button onClick={() => handleButtonClick('.')}>.</button>
//         <button onClick={handleCalculate}>=</button>
//         <button onClick={() => handleButtonClick('+')}>+</button>
//         <button onClick={handleClear}>C</button>

//       </div>
//     </div>
//   );
// }

// export default App;










// Shopping List









// import React, { useState } from "react";

// function App() {
//   const [items, setItems] = useState([]), [name, setName] = useState(""), [rate, setRate] = useState(""), [qty, setQty] = useState(""), [editIndex, setEditIndex] = useState(null);

//   const addItem = () => {
//     const newItem = { id: Date.now(), name, rate: +rate, qty: +qty };
//     setItems(editIndex !== null ? items.map((item, i) => (i === editIndex ? newItem : item)) : [...items, newItem]);
//     setName(""); setRate(""); setQty(""); setEditIndex(null);
//   };

//   return (
//     <div style={{ margin: "20px" }}>
//       <h2>Shopping List</h2>
//       {[setName, setRate, setQty].map((fn, i) => (
//         <input key={i} placeholder={["Name", "Rate", "Quantity"][i]} value={[name, rate, qty][i]} onChange={(e) => fn(e.target.value)} type={i > 0 ? "number" : "text"} />
//       ))}
//       <button onClick={addItem}>{editIndex !== null ? "Update" : "Add"}</button>
//       <table border="1" style={{ marginTop: "10px", width: "100%", textAlign: "center" }}>
//         <thead><tr>{["#", "Name", "Rate", "Qty", "Total", "Actions"].map((h, i) => <th key={i}>{h}</th>)}</tr></thead>
//         <tbody>
//           {items.map((item, index) => (
//             <tr key={item.id}>
//               {[index + 1, item.name, item.rate, item.qty, item.rate * item.qty].map((val, i) => <td key={i}>{val}</td>)}
//               <td>
//                 <button onClick={() => (setName(item.name), setRate(item.rate), setQty(item.qty), setEditIndex(index))}>Edit</button>
//                 <button onClick={() => setItems(items.filter((_, i) => i !== index))}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//         <tfoot>
//           <tr>
//             <td colSpan="4" style={{ textAlign: "right", fontWeight: "bold" }}>Grand Total:</td>
//             <td style={{ fontWeight: "bold" }}>{items.reduce((sum, { rate, qty }) => sum + rate * qty, 0)}</td>
//             <td></td>
//           </tr>
//         </tfoot>
//       </table>
//     </div>
//   );
// }

// export default App;










// pokemon Api







import React, { useState, useEffect } from 'react';

function App() {
  const [pokemons, setPokemons] = useState([]);

  // Fetching the first 20 Pokémon and their details
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then(response => response.json())
      .then(data => {
        const pokemonDetailsPromises = data.results.map(pokemon =>
          fetch(pokemon.url).then(res => res.json())
        );
        Promise.all(pokemonDetailsPromises)
          .then(details => setPokemons(details));
      })
      .catch(error => console.error('Error fetching Pokémon:', error));
  }, []);

  const toggleDetails = (pokemonName) => {
    setPokemons(pokemons.map(pokemon => 
      pokemon.name === pokemonName ? { ...pokemon, showDetails: !pokemon.showDetails } : pokemon
    ));
  };

  return (
    <div>
      <h1>Pokémon List</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {pokemons.map(pokemon => (
          <div key={pokemon.name} style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '150px', textAlign: 'center' }}>
            <h2
              style={{ cursor: 'pointer', color: '#3d7dca' }}
              onClick={() => toggleDetails(pokemon.name)}
            >
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </h2>
            
            {/* Show details only if showDetails is true */}
            {pokemon.showDetails && (
              <div>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                  alt={pokemon.name}
                  style={{ width: '100px', height: '100px' }}
                />
                <p><strong>Types:</strong> {pokemon.types.map(type => type.type.name).join(', ')}</p>
                <p><strong>Abilities:</strong> {pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
                <p><strong>Stats:</strong></p>
                <ul>
                  {pokemon.stats.map(stat => (
                    <li key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
