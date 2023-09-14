import axios from 'axios';
import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    size: '',
    topping1: false,
    topping2: false,
    topping3: false,
    topping4: false,
    special: '',
  });
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform actions with the form data here, e.g., send it to a server
    console.log('Form data submitted:', formData);
    axios.post('https://reqres.in/api/orders', formData)
  };

  return (
    <div>
      <h2>Make Your Own Pizza</h2>
      <form id="pizza-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name-input">Name:</label>
          <input
            type="text"
            id="name-input"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <p>name must be at least 2 characters</p>
        </div>
        <div>
          <label htmlFor="size-dropdown">Size:</label>
          <select
            id="size-dropdown"
            name="size"
            value={formData.size}
            onChange={handleInputChange}
            required
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            <option value="X-Large">X-Large</option>
          </select>
        </div>
        <div>
          <label htmlFor="topping1">Xtra-Cheese:</label>
          <input
            type="checkbox"
            id="topping1"
            name="topping1"
            checked={formData.topping1}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="topping2">Bacon</label>
          <input
            type="checkbox"
            id="topping2"
            name="topping2"
            checked={formData.topping2}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="topping3">Spinach</label>
          <input
            type="checkbox"
            id="topping3"
            name="topping3"
            checked={formData.topping3}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="topping4">Anchovies:</label>
          <input
            type="checkbox"
            id="topping4"
            name="topping4"
            checked={formData.topping4}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="special">Special Instructions:</label>
          <textarea
            id="special-text"
            name="special"
            value={formData.special}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button id="order-button" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};



export default Form;