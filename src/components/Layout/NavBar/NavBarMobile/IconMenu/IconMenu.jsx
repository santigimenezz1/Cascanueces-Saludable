import React, { useState } from 'react';
import '../IconMenu/iconMenu.css'; // Asegúrate de ajustar la ruta a tu archivo de estilos

const BurgerMenu = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(prevChecked => !prevChecked);
  };

  return (
    <div>
      <label className="burger" htmlFor="burger">
        <input
          type="checkbox"
          id="burger"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
  );
};

export default BurgerMenu;
