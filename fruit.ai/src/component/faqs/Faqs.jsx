import React, { useState } from 'react';
import FoodCard from './FoodCard';
import './faqpage.css';
import { NavLink } from 'react-router-dom';

export const Faqs = () => {
  const [foodItems, setFoodItems] = useState([
    {
      image: "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcS_l2nKIkDzVLzxONc371GJWkhKWsk-uqTVFau7nskckDvQlqk4Ka2KytgbdCPDld-J",
      name: 'Apple',
      title: "Why apple healthy?",
      desc: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator."
    },
    {
      image: 'https://product-images.metro.ca/images/h93/h8b/11860661174302.jpg',
      name: 'Banana',
      title: "Why banana healthy?",
      desc: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator."
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ76YDlCHEWjf1o6nerI8w4EBe4gx64kDTnlw&s',
      name: 'Cherry',
      title: "Why cherry healthy?",
      desc: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator."
    },
    {
      image: 'https://media.istockphoto.com/id/516816754/photo/raw-organic-medjool-dates.jpg?s=612x612&w=0&k=20&c=SU1b4jA-7DNkLEuQ2MmAlsYKre1O8QwnvXuAbb9LQXs=',
      name: 'Date',
      title: "Why date healthy?",
      desc: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator."
    }
  ]);

  // State to manage input form visibility and new fruit values
  const [showForm, setShowForm] = useState(false);
  const [newFruit, setNewFruit] = useState({
    name: '',
    title: '',
    desc: '',
    image: ''
  });

  // State to manage delete form visibility and fruit name to delete
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [deleteFruitName, setDeleteFruitName] = useState('');

  // Handle form input change for adding a new fruit
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFruit({ ...newFruit, [name]: value });
  };

  // Handle form input change for deleting a fruit
  const handleDeleteChange = (e) => {
    setDeleteFruitName(e.target.value);
  };

  // Function to add a new food item
  const addNewFoodItem = (e) => {
    e.preventDefault();
    setFoodItems([...foodItems, newFruit]);
    setShowForm(false);
    setNewFruit({ name: '', title: '', desc: '', image: '' });
  };

  // Function to delete a food item by name
  const deleteFoodItem = (e) => {
    e.preventDefault();
    const updatedFoodItems = foodItems.filter(item => item.name.toLowerCase() !== deleteFruitName.toLowerCase());
    setFoodItems(updatedFoodItems);
    setShowDeleteForm(false);
    setDeleteFruitName('');
  };

  return (
    <div className="chat-page">
      <NavLink to="/home">
        <button className="back-button">Go Back</button> 
      </NavLink>
      <div className="chat-header-faq">
        <h1>FAQ</h1>
      </div>
      <div className="chat-body">
        {foodItems.map((item, index) => (
          <FoodCard
            key={index}
            image={item.image}
            name={item.name}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
      <div className="chat-footer">
        {/* Button to toggle add form visibility */}
        {!showForm ? (
          <button className="add-button" onClick={() => setShowForm(true)}>
            Add New Fruit
          </button>
        ) : (
          <form className="new-fruit-form" onSubmit={addNewFoodItem}>
            <input
              type="text"
              name="name"
              placeholder="Enter fruit name"
              value={newFruit.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="title"
              placeholder="Enter title"
              value={newFruit.title}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="desc"
              placeholder="Enter description"
              value={newFruit.desc}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="image"
              placeholder="Enter image URL"
              value={newFruit.image}
              onChange={handleChange}
              required
            />
            <button type="submit">Submit</button>
            <button type="button" onClick={() => setShowForm(false)}>
              Cancel
            </button>
          </form>
        )}

        {/* Button to toggle delete form visibility */}
        {!showDeleteForm ? (
          <button className="delete-button" onClick={() => setShowDeleteForm(true)}>
            Delete Fruit
          </button>
        ) : (
          <form className="delete-fruit-form" onSubmit={deleteFoodItem}>
            <input
              type="text"
              placeholder="Enter fruit name to delete"
              value={deleteFruitName}
              onChange={handleDeleteChange}
              required
            />
            <button type="submit">Delete</button>
            <button type="button" onClick={() => setShowDeleteForm(false)}>
              Cancel
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
