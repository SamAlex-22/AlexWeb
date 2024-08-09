import React from 'react';
import { add, subtract, multiply } from './mathy'; // Importing functions

function Wel() {
  // Example usage of the imported functions
  const sum = add(2, 3);        // This will be 5
  const difference = subtract(5, 2);  // This will be 3
  const product = multiply(4, 3); // This will be 12

  return (
    <div>
      <h1>Math Operations</h1>
      <p>Sum: {sum}</p>
      <p>Difference: {difference}</p>
      <p>Product: {product}</p>
    </div>
  );
}

export default Wel;
