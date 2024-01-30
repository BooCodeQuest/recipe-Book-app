import React from 'react';
import ListItem from './ListItem';

function List({ recipes, onDelete }) {
  return (
    <div>
      {recipes.map(recipe => (
        <ListItem key={recipe.id} recipe={recipe} onDelete={() => onDelete(recipe.id)} />
      ))}
    </div>
  );
}

export default List;
