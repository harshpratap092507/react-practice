const parent = React.createElement("div", { id: "parent1" }, [
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", {}, "Hello World"),
        React.createElement("h2", {}, "Namastey React"),
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "Hello react"),
        React.createElement("h2", {}, "Namastey React"),
    ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);