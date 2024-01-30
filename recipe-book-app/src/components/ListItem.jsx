import React from 'react';

function ListItem({ recipe, onDelete }) {
  return (
    <div>
      <h3>{recipe.title}</h3>
      {recipe.isCompleted && <p>Completed!</p>}
      {/* Add other conditional content here */}
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default ListItem;
