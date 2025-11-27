import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav style={{ padding: "10px", background: "#333", color: "#fff" }}>
      <span style={{ fontWeight: "bold", fontSize: "18px" }}>Task Manager</span>
      <button
        onClick={handleLogout}
        style={{
          float: "right",
          background: "#ff4d4d",
          color: "#fff",
          border: "none",
          padding: "5px 10px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </nav>
  );
}
