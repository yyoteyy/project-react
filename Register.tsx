import React, { useState } from "react";

interface RegisterProps {
  onFormSwitch: (form: string) => void;
}

export const Register: React.FC<RegisterProps> = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email);
  
    const userData = {
      name,
      email,
      password: pass,
    };
  
    const jsonData = JSON.stringify(userData);
    const fileName = `${email}.json`;
  
    const dataURI = `data:application/json;charset=utf-8,${encodeURIComponent(jsonData)}`;
  
    // Anchor element
    const link = document.createElement('a');
    link.href = dataURI;
    link.download = fileName;
  
    // Trigger the file download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full name:</label>
        <input
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="John Doe"
        />
        <label htmlFor="email">Email:</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="johndoe1234@email.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password:</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button type="submit">Sign Up Now!</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('login')}>
        Already have an account? Login here.
      </button>
    </div>
  );
};
