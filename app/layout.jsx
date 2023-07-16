import Nav from "@components/Nav";
import Footer from "@components/Footer";
import "@styles/globals.css";
import Head from "next/head";

export const metadata = {
  title: "Home-NAMSA",
  description: "Nursing and Midwifery Student's Association",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <Head />

      <body>
        <div className="main-container">
          {" "}
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
