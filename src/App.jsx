import { useState } from 'react';
import { nanoid } from 'nanoid';
import data from './data';

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setText(data.slice(0, count));
  };

  // testing

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
          onChange={(e) => {
            setCount(e.target.value);
          }}
        ></input>
        <button className="btn" type="submit">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item) => {
          console.log(nanoid());
          return <p key={nanoid()}>{item}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
