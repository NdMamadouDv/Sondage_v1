import React from "react";

function InputItem() {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="text-lg">Titre de votre questionnaire</span>
      </label>
      <input
        type="text"
        placeholder="Choisissez un titre .."
        className="input input-bordered w-full "
      />
    </div>
  );
}

export default InputItem;
