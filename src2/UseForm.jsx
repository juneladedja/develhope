import { useState } from "react";

function UseForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;
    console.log("Username:", username);
    console.log("Password:", password);

    setFormData({
      username: "",
      password: "",
    });
  };

  return {
    formData,
    handleInputChange,
    handleSubmit,
  };
}

export default UseForm;