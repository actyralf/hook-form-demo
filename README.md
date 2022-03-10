# React Hook Form

## Was ist React Hook Form

- [React Hook Form](https://react-hook-form.com/) ist eine Library zur Verwaltung und Validierung von **_Form State_**
- Form State umfasst:
  - Den aktuellen Inhalt aller Formularfelder
  - Den Fehlerzustand eines oder mehrer Felder (z.B. zu kurzes Passwort, ungültige E-Mail Adresse)
  - Die Information, ob sich ein Formularfeld seit dem letzten Speichern geändert hat (**_Dirty State_**)
  - Die Information, ob der Nutzer ein Formularfeld schon "berührt" hat (**_Touched State_**)
- React Hook Form kann
  - Fehlerzustände automatisch setzen, wenn ein Formularfeld nicht unserer Validierungsregel entspricht.
  - Automatisch einen **_Dirty_**-Zustand setzen, wenn ein Feld geändert wurde.
  - Unserer **_onSubmit_**-Funktion alle relevanten Daten zur Verfügung stellen, so dass wir diese dann z.B. an einen Server schicken können.

## Setup

- Installieren mit `npm install react-hook-form`
- `import { useForm } from "react-hook-form";`
- `const {register, handleSubmit} = useForm()`
  - Der Hook `useForm` stellt uns eine Funktion zum Registrieren von Formularfeldern und eine Funktion zum Registrieren unserer Submit-Funktion zur Verfügung.

## Die Form mit `handleSubmit` verbinden

- `<form onSubmit={handleSubmit(onSubmit)}>...</form>`
- Der `onSubmit` Callback wird mit dem kompletten Formstate aufgerufen:
  ```
  const onSubmit=(data)=>{
    console.log(data.email);
    console.log(data.password);
    ...
  }
  ```

## Formulafelder registrieren

- Wir registrieren ein Formularfeld mit der `register` - Funktion, die wir vom `useForm` Hook erhalten haben:

  ```
  <input id="name" type="text" {...register("name")}>
  ```

- Sobald ein Feld registriert ist, wird sein Inhalt im `data` Objekt unseres `onSubmit`-Handlers übergeben.

## Defaults setzen

- Defaults können (und sollten) im `useForm`-Hook übergeben werden:
  ```
  const {register, handleSubmit}=useForm({
    defaultValues:{
      name: "",
      email: ""
    }
  })
  ```

## Validierungen

- Bei der Registrierung eines Feldes können wir Validierungsregeln übergeben:
  ```
  <input id="name" type="text" {...register("name",{
   required: true,
   minLength: 2
  })}>
  ```
- So definiert man gleich Fehlermeldungen, die bei Fehlschlagen einer Validierung angezeigt werden sollen:
  ```
  <input id="name" type="text" {...register("name",{
   required: {value: true, message: "Bitte geben Sie Ihren Namen ein"},
   minLength: {value: 2, message: "Ihr Name besteht nur aus einem Buchstaben?"}
  })}>
  ```

## Fehler anzeigen

- `useForm` kann uns ein Fehlerobjekt zurückgeben, mit dem wir auf die Fehlermeldungen aller Felder zugreifen können:
  ```
  const {register, handleSubmit, errors} = useForm(...)
  ```
- So können wir z.B. eine Fehlermeldung für das Feld `email` anzeigen:
  ```
  <p>{errors.email?.message}<p>
  ```

## Daten während der Eingabe beobachten

- Möchten wir während der Eingabe Werte aus den Inputs beobachten, um sie z.B. an anderer Stelle synchron anzuzeigen, können wir `watch` verwenden:

  ```
  const {register, handleSubmit, errors, watch} = useForm(...);
  const email = watch("email");
  ...
  <p>{email}</p>
  ```

## isDirty und dirtyFields

- React Hook Form teilt uns mit, ob sich die Form seit dem letzten Submit geändert hat.
- `isDirty` ist `false`, wenn in keinem Feld der Form etwas geändert wurde. Dies können wir z.B. nutzen, um den Submit-Button zu deaktivieren.
- Im Objekt `dirtyFields` können wir für jedes einzelne Feld sehen, ob es geändert wurde oder nicht.

## Arbeit mit UI-Frameworks

- React Hook Form stellt eine Wrapper-Komponente (`Controller`) zur Verfügung, um neben nativen Inputs auch Komponenten aus UI-Frameworks wie [Material-UI](https://mui.com/) oder [Ant Design](https://ant.design/) integrieren zu können.
- [Hier geht's zur Anleitung](https://react-hook-form.com/get-started#IntegratingControlledInputs)
