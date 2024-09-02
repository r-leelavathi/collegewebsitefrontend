import React, { useState } from 'react';
import MenuCard from './MenuCard.jsx'; // Make sure the path is correct
import './LoginHome.css'; // Optional: For styling

const LoginHome = () => {
  const [menus, setMenus] = useState([
    {
      name: 'About',
      subMenus: [
        'Institute Profile',
        'Vision & Mission',
        'From Principal Desk',
        'Institutional Committees',
        {
          name: 'Clubs & Societies',
          subSubMenus: [
            'IQAC',
            'Student Welfare',
            'Anti Ragging',
            'Internal Complaint Cell',
            'Discipline Monitoring Cell',
            'Grievance Redressal Committee',
            'SC/ST Cell',
          ],
        },
      ],
    },
    // Add other menus here
  ]);

  const addMenuItem = (menuName, newItem) => {
    setMenus((prevMenus) =>
      prevMenus.map((menu) =>
        menu.name === menuName
          ? {
            ...menu,
            subMenus: [...menu.subMenus, newItem],
          }
          : menu
      )
    );
  };

  const updateMenuItem = (menuName, updatedItem) => {
    setMenus((prevMenus) =>
      prevMenus.map((menu) =>
        menu.name === menuName
          ? {
            ...menu,
            subMenus: menu.subMenus.map((item) =>
              item === updatedItem.oldItem ? updatedItem.newItem : item
            ),
          }
          : menu
      )
    );
  };

  const deleteMenuItem = (menuName, itemToDelete) => {
    setMenus((prevMenus) =>
      prevMenus.map((menu) =>
        menu.name === menuName
          ? {
            ...menu,
            subMenus: menu.subMenus.filter((item) => item !== itemToDelete),
          }
          : menu
      )
    );
  };

  return (
    <div className="login-home-container">
      <h1>Menu Management</h1>
      <div className="menu-cards-container">
        {menus.map((menu, index) => (
          <MenuCard
            key={index}
            menu={menu}
            onAdd={addMenuItem}
            onUpdate={updateMenuItem}
            onDelete={deleteMenuItem}
          />
        ))}
      </div>
    </div>
  );
};

export default LoginHome;
