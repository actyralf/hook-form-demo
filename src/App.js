import "./App.css";
import { IconContext } from "react-icons";
import { IoIosIceCream } from "react-icons/io";
import { useForm } from "react-hook-form";
import validator from "validator";

const variants = {
  vanilla: "Vanille",
  chocolate: "Schokolade",
  strawberry: "Erdbeere",
  stracciatella: "Stracciatella",
  lemon: "Zitrone",
};

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, touchedFields, isDirty, dirtyFields, isSubmitting },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      variant: null,
      name: "",
      email: "",
      numBalls: null,
      extraCream: false,
    },
  });

  const variant = watch("variant");
  const name = watch("name");
  console.log(errors);

  const onSubmit = (data) => {
    const message = `Hier ist Dein Eis, ${data.name}: ${data.numBalls} Kugeln ${
      variants[data.variant]
    }${
      data.extraCream ? " mit extra viel Sahne." : "."
    } Wir schicken die Rechnung an ${data.email}`;
    alert(JSON.stringify(message));
  };

  return (
    <div className="container">
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
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
          {...register("name", {
            required: { value: true, message: "Bitte gib Deinen Namen ein." },
            minLength: { value: 2, message: "Das soll ein Name sein?" },
            maxLength: {
              value: 20,
              message: "Das kann sich doch keiner merken!",
            },
          })}
        />
        <span className="error-message">{errors.name?.message}</span>
        <label className="caption" htmlFor="email">
          Wie erreichen wir Dich?
        </label>
        <input
          autoComplete="new-password"
          type="text"
          placeholder="E-Mail"
          {...register("email", {
            required: { value: true, message: "Bitte gib Deine E-Mail ein!" },
            validate: (value) => {
              return validator.isEmail(value) || "Das ist keine gültige E-Mail";
            },
          })}
        />
        <span className="error-message">{errors.email?.message}</span>
        <label className="caption" htmlFor="variant">
          Welche Sorte willst Du?
        </label>
        <select name="variant" id="variant" {...register("variant")}>
          {Object.entries(variants).map(([value, text], index) => {
            return (
              <option key={index} value={value}>
                {text}
              </option>
            );
          })}
        </select>
        <span className="error-message">{errors.variant?.message}</span>

        <label className="caption" htmlFor="email">
          Wieviel Bällchen dürfen es denn sein?
        </label>
        <input
          type="number"
          {...register("numBalls", {
            min: { value: 1, message: "Du wolltest doch ein Eis oder nicht?" },
            max: { value: 5, message: "Davon wirst Du zu viel zu dick!" },
          })}
        />
        <span className="error-message">{errors.numBalls?.message}</span>

        <label htmlFor="newsletter">
          <input id="newsletter" type="checkbox" {...register("extraCream")} />
          Extra viel Sahne!
        </label>

        <button disabled={!isDirty} type="submit">
          Gib mir mein Eis!
        </button>
      </form>
      {variant ? (
        <p>
          Gute Wahl {name} - {variants[variant]} ist lecker
        </p>
      ) : undefined}
    </div>
  );
}

export default App;
