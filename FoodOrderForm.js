import React, { useState } from "react";
import styles from './FoodItem.module.css';

function FoodOrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [order, setOrder] = useState("");

  const handleOnChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order Successful!
    Your order was ${order}. Please show your confirmation number for pickup. `);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
    <div className={styles.formRow}>
      <label className={styles.label} htmlFor="name">Name</label>
      <input
        className={styles.input}
        onChange={(e) => setName(e.target.value)}
        name="name"
        id="name"
        type="text"
        value={name}
      />
      </div>

      
      <div className={styles.formRow}>
      <label className={styles.label}  htmlFor="phone">Phone</label>
      <input
        className={styles.input}
        onChange={(e) => setPhone(e.target.value)}
        name="phone"
        id="phone"
        type="text"
        value={phone}
      />
      </div>

      <div className={styles.formRow}>
      <label className={styles.label} htmlFor="address">Address</label>
      <input
        className={styles.input}
        onChange={(e) => setAddress(e.target.value)}
        name="address"
        id="address"
        type="text"
        value={address}
      />
      </div>

      <div className={styles.formRow}>
      <label className={styles.label} htmlFor="order">Order</label>
      <input
        className={styles.input}
        onChange={(e) => setOrder(e.target.value)}
        name="order"
        id="order"
        type="text"
        value={order}
      />
      </div>

      <button type="Submit">Submit</button>
    </form>
  );
}

export default FoodOrderForm;
