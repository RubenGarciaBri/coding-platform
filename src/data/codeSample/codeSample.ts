const codeSample = `const Message = ({ text, show }) => {
    return show ? <p>{text}</p> : null;
  };
  
  const App = () => {
    const [show, setShow] = React.useState(false);
  
    const toggle = () => {
      setShow(!show);
    };
  
    return (
      <div>
        <button
          className="px-4 py-2 text-white bg-blue-600 rounded shadow-md hover:bg-blue-700"
          onClick={toggle}
        >
          Toggle
        </button>
        <Message text="Hello World" show={show} />
      </div>
    );
  };
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );`;

export default codeSample;
