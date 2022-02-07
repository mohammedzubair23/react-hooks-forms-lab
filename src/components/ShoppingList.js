import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, addItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchValue, setSearchValue] = React.useState('');

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const handleSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  }).filter(item => {
    // 'Hello, how are you?'.search('how') // 7
    // 'Hello, how are you?'.search('blahblah') // -1
    if (item.name.search(searchValue) > -1) {
      return true
    }
  });

  return (
    <div className="ShoppingList">
      <ItemForm addItem={addItem} />
      <Filter onCategoryChange={handleCategoryChange} onSearchValueChange={handleSearchValueChange} searchValue={searchValue} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
