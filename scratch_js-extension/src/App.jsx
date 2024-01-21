// Import the necessary modules
import React from "react";
import ReactDOM from "react-dom/client";

import Frame from "react-frame-component";


const App = () => {
  return (
    <div className={"my-extension"}>
      <h1 className="btn btn-square btn-ghost">
        Hello world - My first Extension
        {process.env.REACT_APP_ENV}u
      </h1>
      <h1 className="text-lg font-bold mx-9">
        Your Website fro me an rjejrjerjej
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam dolorum
        in esse tempora eligendi neque officiis, quod expedita corporis sapiente
        ut possimus iste quasi facilis ratione dignissimos ad praesentium eius
        nobis libero necessitatibus obcaecati debitis molestiae voluptas!
        Assumenda, deleniti, iusto fuga non error sunt reiciendis pariatur
        blanditiis dolores magnam itaque.
      </p>
    </div>
  );
};

const isWeb = false;
if (isWeb) {
  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  // create dom element
  let cloneGptWidget = document.createElement("div");
  cloneGptWidget.setAttribute("id", "clonegpt-container");
  document.body.appendChild(cloneGptWidget);

  // Use createRoot on the container element
  const root = ReactDOM.createRoot(cloneGptWidget);

  // Render your component
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
