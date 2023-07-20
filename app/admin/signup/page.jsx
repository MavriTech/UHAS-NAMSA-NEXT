import React from "react";
import "@styles/admin.css";
import Image from "next/image";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div className="sign-wrapper">
      <div className="form-wrapper">
        <div className="form-container">
          <form action="" className="form">
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
                    type="text"
                    placeholder="Fullname"
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
              <button className="sign-btn">SIGN UP</button>
            </div>
          </form>
          <Image src="/icons/admin-panel.png" width={350} height={500} />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
