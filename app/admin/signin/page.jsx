"use client";
import React, { useState } from "react";
import "@styles/admin.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    try {
      const response = await fetch(
        "https://uhas-backend.onrender.com/api/admins/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const authToken = data.token;

        // Store the authentication token (e.g., in an HTTP-only cookie or local storage)
        // For example, using cookies:
        document.cookie = `authToken=${authToken}; path=/; HttpOnly;`;

        router.push("/admin/");
      } else {
        console.error("Authentication failed");
      }
    } catch (error) {
      console.error("Error occurred during sign-in:", error);
    }
  };

  return (
    <div className="sign-wrapper">
      <div className="form-wrapper">
        <div className="form-container-shadow">
          <div className="form-container">
            <form onSubmit={handleSubmit} className="form">
              <div className="sign-options">
                <Link className="sign " href="/admin/signup">
                  Sign Up
                </Link>
                <Link className="sign s-active" href="/admin/signin">
                  Sign In
                </Link>
              </div>
              <div className="form-below">
                <div className="input-wrapper">
                  <div className="input-left">
                    <Image src="/icons/User2.png" width={15} height={18} />
                    <input
                      className="admin-input"
                      type="text"
                      placeholder="Username or email"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                </div>
                <div className="input-wrapper">
                  <div className="input-left">
                    <Image
                      src="/icons/Reset-password.png"
                      width={15}
                      height={18}
                    />
                    <input
                      className="admin-input"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </div>
                  <Image src="/icons/Eye.png" width={15} height={18} />
                </div>

                <span className="forgot">Forgot Password?</span>

                <button type="submit" className="sign-btn">
                  SIGN IN
                </button>

                <span className="forgot">
                  Sign in to assume admin privileges
                </span>
              </div>
            </form>
            <Image src="/icons/admin-panel.png" width={350} height={500} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
