import React from "react";

const RecipeChoices = ({ handleChange, label, choices, currentVal }) => {
  return (
    <div className="choices-container">
      {/* For stretch feature - text input */}
      <input
        type="text"
        name={label}
        value={currentVal}
        placeholder="Guess the ingredient..."
        onChange={handleChange}
        className="textbox"
      />
      
      <p className="options-title"></p>
      <ul className="choices-list">
        {choices && choices.map((choice) => (
          <li key={choice}>{choice}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeChoices;