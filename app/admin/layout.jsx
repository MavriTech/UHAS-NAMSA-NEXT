import "@styles/admin.css";

export const metadata = {
  title: "NAMSA-ADMIN",
  description: "Discover variety of food stuff",
};

const AdminLayout = ({ children }) => {
  return (
    <>
      <div className="main-container">
        <div className="admin-wrapper">{children}</div>
      </div>
    </>
  );
};

export default AdminLayout;
