const root = ReactDOM.createRoot(document.getElementById("root"));

const list=["React","JavaScript","Css"]

function App() {
  return (
    <ul>
      {list.map((item)=><li>{item}</li>)}
    </ul>
  );
}

root.render(<App />);
