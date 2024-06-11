import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Form() {
  const styles = {
    back: { 
      position: 'relative',
      backgroundImage: 'url(/assets/formbg.png)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh', 
      width: '50vw' 
    },

    para: {
      position: 'absolute',
      bottom: '70px',
      left: '50px',
      maxWidth: '40vw',
      color: '#FFFFFF', 
      fontSize: '3rem',
      fontWeight: '600',
      fontFamily: 'Roboto'
    },

    form: { 
      backgroundColor: 'black',
      display: "flex", 
      justifyContent: 'center', 
      alignItems: 'center', 
      width: "50vw" 
    },
  
    formContainer: {
      display: "flex",
      flexDirection: "column", 
      gap: "1rem",
      width: "30vw",
    },
  
    input: (fieldName) => ({
      border: `1px solid ${errors[fieldName].length > 0 ? 'red' : 'black'}`,
      borderRadius: '4px',
      backgroundColor: '#292929',
      color: 'white',
      padding: '15px',
      width: '27.8vw',
      outline: 'none'
    }),

    errorsPara: { 
      fontFamily: 'DM Sans', 
      color: "red", 
      fontSize: '0.9rem',
      fontWeight: '200'
    },
  
    submit: {
      width: '30vw',
      backgroundColor: '#72DB73',
      fontFamily: 'Roboto',
      fontWeight: '500',
      fontSize: '1.2rem',
      color: 'white',
      padding: '5px 0',
      margin: '4px 0',
      borderRadius: '20px',
      border: 'none',
      cursor: 'pointer'
    }
  }

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false
  });

  const [errors, setErrors] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false
  });

  const capitalizeFirstChar = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  };

  const handleCheckbox = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = { ...errors };

    const fields = ['name', 'username', 'email', 'mobile'];
    fields.forEach(field => {
      if (formData[field].trim().length === 0 || formData[field] === undefined || formData[field] === null) {
        newErrors[field] = `${capitalizeFirstChar(field)} is required`;
      } else {
        newErrors[field] = "";
      }
    });

    if (!formData.checkbox) {
      newErrors.checkbox = "Check this box if you want to proceed";
    }
    else {
      newErrors.checkbox = "";
    }

    setErrors({ ...newErrors });
    if (newErrors.name === "" && newErrors.username === "" && newErrors.email === "" && newErrors.mobile === "" && newErrors.checkbox === "") {
      localStorage.setItem("userData", JSON.stringify(formData));
      navigate('/genre');
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={styles.back}>
        <p style={styles.para}>Discover new things on Superapp</p>
      </div>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formContainer}>
          <p style={{ fontFamily: 'Single Day', color: '#72DB73', fontSize: '3rem', textAlign: 'center' }}>Super app</p>
          <p style={{ fontFamily: 'DM Sans', color: 'white', textAlign: 'center', marginBottom: '32px' }}>Create your new account</p>

          <div>
            <input type="text" name="name" id="name" placeholder='Name' onChange={handleOnChange} style={styles.input('name')} />
            <p style={styles.errorsPara}>{errors.name}</p>
          </div>

          <div>
            <input type="text" name="username" id="username" placeholder='Username' onChange={handleOnChange} style={styles.input('username')} />
            <p style={styles.errorsPara}>{errors.username}</p>
          </div>

          <div>
            <input type="email" name="email" id="email" placeholder='Email' onChange={handleOnChange} style={styles.input('email')} />
            <p style={styles.errorsPara}>{errors.email}</p>
          </div>

          <div>
            <input type="tel" name="mobile" id="mobile" placeholder='Mobile' onChange={handleOnChange} style={styles.input('mobile')} />
            <p style={styles.errorsPara}>{errors.mobile}</p>
          </div>

          <div style={{ margin: '12px 0'}}>
            <input onChange={handleCheckbox} type="checkbox" name="checkbox" id="checkbox" />
            <label style={{ marginLeft: '10px', fontFamily: 'DM Sans', color: '#7C7C7C', fontSize: '0.9rem' }} htmlFor="checkbox">Share my registration data with Superapp</label>
            <p style={styles.errorsPara}>{errors.checkbox}</p>
          </div>

          <button type="submit" style={styles.submit}>SIGN UP</button>

          <p style={{ color: '#7C7C7C', fontFamily: 'Roboto', fontSize: '0.7rem' }}>By clicking on Sign up. you agree to Superapp <a style={{ color: '#72DB73', textDecoration: 'none' }} href="">Terms and Conditions of Use</a></p>
          <p style={{ color: '#7C7C7C', fontFamily: 'Roboto', fontSize: '0.7rem' }}>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <a style={{ color: '#72DB73', textDecoration: 'none' }} href="">Privacy Policy</a></p>
        </div>
      </form>
    </div>
  );
}
