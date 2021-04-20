import React from "react";
import "./App.css";

export function App(props: { count: number }) {
  const nextValue = props.count + 1;

  return (
    <div>
      <p>Der aktuelle Wert ist: {props.count}</p>
      <p>Der nächste Wert ist: {nextValue}</p>
    </div>
  );
}
