import "./App.css";
import { IconContext } from "react-icons";
import { IoIosIceCream } from "react-icons/io";

const variants = {
  vanilla: "Vanille",
  chocolate: "Schokolade",
  strawberry: "Erdbeere",
  stracciatella: "Stracciatella",
  lemon: "Zitrone",
};

function App() {
  const onSubmit = () => {
    const message = `Hier ist Dein Eis, NAME: NN Kugeln SORTE MIT/OHNE extra viel Sahne. Wir schicken die Rechnung an EMAIL`;
    alert(JSON.stringify(message));
  };

  return (
    <div className="container">
      <form autoComplete="off" onSubmit={onSubmit}>
        <h1 className="title">
          neuefische
          <IconContext.Provider value={{ className: "icon" }}>
            <IoIosIceCream
              style={{
                color: "#e63946",
              }}
            />
            <IoIosIceCream
              style={{
                color: "#457b9d",
                left: -8,
              }}
            />
            <IoIosIceCream
              style={{
                color: "#1d3557",
                left: -16,
              }}
            />
          </IconContext.Provider>
        </h1>
        <p className="subtitle">Best icecream in town</p>
        <label className="caption" htmlFor="name">
          Sag uns, wer Du bist.
        </label>
        <input
          id="name"
          autoComplete="new-password"
          type="text"
          placeholder="Name"
        />
        <span className="error-message">Fehler</span>
        <label className="caption" htmlFor="email">
          Wie erreichen wir Dich?
        </label>
        <input autoComplete="new-password" type="text" placeholder="E-Mail" />
        <span className="error-message">Fehler</span>
        <label className="caption" htmlFor="variant">
          Welche Sorte willst Du?
        </label>
        <select name="variant" id="variant">
          {Object.entries(variants).map(([value, text], index) => {
            return (
              <option key={index} value={value}>
                {text}
              </option>
            );
          })}
        </select>
        <span className="error-message">Fehler</span>

        <label className="caption" htmlFor="email">
          Wieviel Bällchen dürfen es denn sein?
        </label>
        <input type="number" />
        <span className="error-message">Fehler</span>

        <label htmlFor="newsletter">
          <input id="newsletter" type="checkbox" />
          Extra viel Sahne!
        </label>

        <button type="submit">Gib mir mein Eis!</button>
      </form>

      <p>Gute Wahl NAME - SORTE ist lecker</p>
    </div>
  );
}

export default App;
