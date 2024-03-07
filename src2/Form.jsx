import React from "react";
import UseForm from "./UseForm";

function Form() {
  const { formData, handleInputChange, handleSubmit } = UseForm();

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          name="username"
          type="text"
          value={formData.username}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Password:
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Invia</button>
    </form>
  );
}

export default Form;