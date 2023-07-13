import Nav from "@components/Nav";
import Footer from "@components/Footer";
import "@styles/globals.css";

export const metadata = {
  title: "UHAS-NAMSA",
  description: "Nursing and Midwifery Student's Association",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <section className="whole-content">
          <Nav />
          {children}
          <Footer />
        </section>
      </body>
    </html>
  );
};

export default RootLayout;
