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














import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addItem = () => {
    if (!name || !price || !quantity) return;
    const newItem = { name, price: +price, quantity: +quantity };
    const updatedItems = [...items];
    editIndex !== null ? (updatedItems[editIndex] = newItem) : updatedItems.push(newItem);
    setItems(updatedItems);
    setName(""); setPrice(""); setQuantity(""); setEditIndex(null);
  };

  const deleteItem = (index) => setItems(items.filter((_, i) => i !== index));

  const editItem = (index) => {
    const item = items[index];
    setName(item.name); setPrice(item.price); setQuantity(item.quantity);
    setEditIndex(index);
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping List</h2>
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} type="number" />
      <input placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} type="number" />
      <button onClick={addItem}>{editIndex !== null ? "Update" : "Add"}</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - Rs {item.price} x {item.quantity} = Rs {item.price * item.quantity}
            <button onClick={() => editItem(index)}>Edit</button>
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <h3>Total: Rs {total}</h3>
    </div>
  );
}

export default App;
