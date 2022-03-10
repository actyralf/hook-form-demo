# React Hook Form

## Was ist React Hook Form

- [React Hook Form](https://react-hook-form.com/) ist eine Library zur Verwaltung und Validierung von **_Form State_**
- Form State umfasst:
  - Den aktuellen Inhalt aller Formularfelder
  - Den Fehlerzustand eines oder mehrer Felder (z.B. zu kurzes Passwort, ungültige E-Mail Adresse)
  - Die Information, ob sich ein Formularfeld seit dem letzten Speichern geändert hat (**_Dirty State_**)
- React Hook Form kann
  - Fehlerzustände automatisch setzen, wenn ein Formularfeld nicht unserer Validierungsregel entspricht.
  - Automatisch einen **_Dirty_**-Zustand setzen, wenn ein Feld geändert wurde.
  - Unserer **_onSubmit_**-Funktion alle relevanten Daten zur Verfügung stellen, so dass wir diese dann z.B. an einen Server schicken können.

## Setup

-
