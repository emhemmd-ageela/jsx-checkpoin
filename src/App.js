import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import mageInSrc from "./mageInSrc.jpg";

function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">car showroom</h1>

        <br />

        <img src={mageInSrc} />

        <br />

        <img src="/imageInPublic.jpg" />
      </div>
      <iframe
        width="640"
        height="360"
        src="https://www.youtube.com/embed/kToXyS8zG7Q"
        title="2016 Hyundai Sonata Sport"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default App;
