import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ addItem }) {
  // There's a better way to do this by defining one state variable for both inputs  
  const [name, setName] = useState('');
  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const [category, setCategory] = useState('Produce');
  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      name,
      category
    };
    addItem(newItem);
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleNameChange} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategoryChange} value={category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
