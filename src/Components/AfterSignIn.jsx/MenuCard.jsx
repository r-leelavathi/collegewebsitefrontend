import React, { useState } from 'react';

const MenuCard = ({ menu, onAdd, onUpdate, onDelete }) => {
  const [editMode, setEditMode] = useState(false);
  const [newItem, setNewItem] = useState('');
  const [editItem, setEditItem] = useState('');

  const handleAdd = () => {
    onAdd(menu.name, newItem);
    setNewItem('');
  };

  const handleUpdate = () => {
    onUpdate(menu.name, editItem);
    setEditItem('');
    setEditMode(false);
  };

  return (
    <div className="menu-card">
      <h3>{menu.name}</h3>
      <ul>
        {menu.subMenus.map((item, index) => (
          <li key={index}>
            {item.name || item}
            <button onClick={() => onDelete(menu.name, item)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => setEditMode(!editMode)}>
        {editMode ? 'Cancel' : 'Edit'}
      </button>
      {editMode && (
        <div className="edit-form">
          <input
            type="text"
            value={editItem}
            onChange={(e) => setEditItem(e.target.value)}
            placeholder="Edit item"
          />
          <button onClick={handleUpdate}>Update</button>
        </div>
      )}
      <div className="add-form">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add new item"
        />
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
};

export default MenuCard;
