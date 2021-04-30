import React from 'react';
import './styles/Button.css';
const Button = ({ onClick, type, disable, className }) => {
  const colorType = {
      Normal: 'normalColor',
      Fire: 'fireColor',
      Poison: 'poisonColor',
      Dragon: 'dragonColor',
      Psychic: 'psychicColor',
      Bug: 'bugColor',
      Electric: 'electricColor'
  }
    return (
    <div>
      <button onClick={onClick} disable={disable} className={`${className} ${colorType[type]}`}>
        {type}
      </button>
    </div>
  );
};
export default Button;