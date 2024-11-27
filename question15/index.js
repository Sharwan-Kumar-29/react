
const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
    // State to track the active page
    const [activePage, setActivePage] = React.useState("Home");
  
    // Inline styles for the navbar and content
    const styles = {
      navbar: {
        display: "flex",
        justifyContent: "space-around",
        padding: "10px",
        backgroundColor: "#333",
        color: "white",
      },
      navLink: {
        cursor: "pointer",
        color: "white",
        textDecoration: "none",
        fontSize: "18px",
        padding: "5px 10px",
        borderRadius: "5px",
      },
      activeNavLink: {
        backgroundColor: "#555",
        fontWeight: "bold",
      },
      content: {
        margin: "20px",
        padding: "20px",
        fontSize: "20px",
        border: "2px solid #ccc",
        borderRadius: "8px",
      },
      home: {
        backgroundColor: "#f0f8ff",
      },
      about: {
        backgroundColor: "#ffe4e1",
      },
      contact: {
        backgroundColor: "#f5f5dc",
      },
    };
  
    // Function to render page content with inline styles
    const renderContent = () => {
      switch (activePage) {
        case "Home":
          return (
            <div style={{ ...styles.content, ...styles.home }}>
              Welcome to Home
            </div>
          );
        case "About":
          return (
            <div style={{ ...styles.content, ...styles.about }}>
              About Us
            </div>
          );
        case "Contact":
          return (
            <div style={{ ...styles.content, ...styles.contact }}>
              Contact Us
            </div>
          );
        default:
          return <div style={styles.content}>Page not found</div>;
      }
    };
  
    return (
      <div>
        {/* Navbar */}
        <div style={styles.navbar}>
          <span
            style={{
              ...styles.navLink,
              ...(activePage === "Home" ? styles.activeNavLink : {}),
            }}
            onClick={() => setActivePage("Home")}
          >
            Home
          </span>
          <span
            style={{
              ...styles.navLink,
              ...(activePage === "About" ? styles.activeNavLink : {}),
            }}
            onClick={() => setActivePage("About")}
          >
            About
          </span>
          <span
            style={{
              ...styles.navLink,
              ...(activePage === "Contact" ? styles.activeNavLink : {}),
            }}
            onClick={() => setActivePage("Contact")}
          >
            Contact
          </span>
        </div>
  
        {/* Dynamic Content */}
        {renderContent()}
      </div>
    );
  };

  root.render(<App />);