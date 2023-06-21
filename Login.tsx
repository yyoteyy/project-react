import React, { useState } from "react";

interface LoginProps {
  onFormSwitch: (form: string) => void;
}

export const Login: React.FC<LoginProps> = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email);

    const fileName = `${email}.json`;

    // Perform try catch
    try {
      const response = await fetch(fileName);
      if (response.ok) {
        const userData = await response.json();
        if (userData.password === pass) {
          console.log("Logged in successfully!");
        } else {
          console.log("Invalid password!");
        }
      } else {
        console.log("User not found!");
      }
    } catch (error) {
      console.error("Error occurred while logging in:", error);
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("register")}>
        Don't have an account? Sign Up here.
      </button>
    </div>
  );
};
