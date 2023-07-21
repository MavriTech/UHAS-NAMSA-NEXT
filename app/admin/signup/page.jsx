"use client";
import "@styles/admin.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SignInPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);

  const router = useRouter();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    try {
      const res = await fetch(
        "https://uhas-backend.onrender.com/api/admins/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, name, password }),
        }
      );
      res.status === 201 &&
        router.push("/admin/signin?success=Account has been created");
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="sign-wrapper">
      <div className="form-wrapper">
        <div className="form-container">
          <form action="" className="form" onSubmit={handleSubmit}>
            <div className="sign-options">
              <Link className="sign s-active" href="/admin/signup">
                Sign Up
              </Link>
              <Link className="sign" href="/admin/signin">
                Sign In
              </Link>
            </div>
            <div className="form-below">
              <div className="input-wrapper">
                <div className="input-left">
                  <Image src="/icons/User.png" width={15} height={18} />
                  <input
                    className="admin-input"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
              </div>
              <div className="input-wrapper">
                <div className="input-left">
                  <Image src="/icons/User2.png" width={15} height={18} />
                  <input
                    className="admin-input"
                    type="text"
                    placeholder="Username"
                    value={name}
                    onChange={handleNameChange}
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
                    placeholder="Confirm password"
                  />
                </div>
                <Image src="/icons/Eye.png" width={15} height={18} />
              </div>

              <span className="secret-code">
                Enter secret admin sign up code
              </span>
              <input className="secret-input" type="text" />
              <button type="submit" className="sign-btn">
                SIGN UP
              </button>
              {err && "Something went wrong!"}
            </div>
          </form>
          <Image src="/icons/admin-panel.png" width={350} height={500} />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
