import "./styles.css";

function Header() {
  return React.createElement(
    "header",
    { className: "topo" },
    React.createElement("h1", { className: "logo" }, "Editora MaujorTec")
  );
}

ReactDOM.render(Header(), document.getElementById("root"));
