const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  // State and ref for counting updates
  const [reactUpdates, setReactUpdates] = React.useState(0);

  const vanillaUpdates = React.useRef(0);

  const handleVanillaUpdate = () => {
    vanillaUpdates.current += 1;
    document.title = `Vanilla Title (Updated ${vanillaUpdates.current} times)`;
    document.getElementById("vanilla-counter").textContent = `Vanilla DOM updates: ${vanillaUpdates.current}`;
  };

  const handleReactUpdate = () => {
    setReactUpdates((prev) => {
      const newCount = prev + 1;
      document.title = `React Title (Updated ${newCount} times)`;
      return newCount;
    });
  };

  return (
    <div>
      <h1>React vs Vanilla JS DOM Updates</h1>

      {/* Vanilla JS Section */}
      <button onClick={handleVanillaUpdate}>Change Title (Vanilla JS)</button>
      <div id="vanilla-counter" className="counter">
        Vanilla DOM updates: {vanillaUpdates.current}
      </div>

      {/* React Section */}
      <button onClick={handleReactUpdate}>Change Title (React)</button>
      <div className="counter">React DOM updates: {reactUpdates}</div>
    </div>
  );
};





root.render(<App />);
