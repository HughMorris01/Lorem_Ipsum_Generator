import { useState } from 'react';
import data from './data';

const App = () => {
  const [count, setCount] = useState(1);
  const [text, useText] = useState([]);

  const handleChange = (e) => {
    setCount(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newArray = data.slice(0, count);
  };

  return (
    <section className="section-center">
      <h4>Let's generate some lorem ipsum</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="count">paragraphs</label>
        <input
          min="1"
          max="8"
          step="1"
          type="number"
          name="count"
          id="count"
          value={count}
          onChange={handleChange}
        ></input>
        <button className="btn" type="submit">
          Generate
        </button>
      </form>
      <section id="paragraphs"></section>
    </section>
  );
};
export default App;
