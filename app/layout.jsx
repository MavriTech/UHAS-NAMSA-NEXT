import Footer from "@components/Footer";
import Nav from "@components/Nav";
import "@styles/globals.css";

export const metadata = {
  title: "UHAS-NAMSA",
  description: "Discover variety of food stuff",
};

const RootLayout = ({ children }) => {
  return (
    <>
      <html lang="en">
        <body>
          <main className="whole-content">
            <Nav />
            {children}
            <Footer />
          </main>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
