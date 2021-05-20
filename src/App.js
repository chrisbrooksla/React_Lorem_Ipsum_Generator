import React, { useState } from "react";
import data from "./data";
function App() {
  // set up state value for the count(how many paragraphs to generate)....0 by default....
  const [count, setCount] = useState(0);

  // set up state value for the text(the array containing the paragraphs)...default will be empty array...
  const [text, setText] = useState([]);

  // create a submit function for the form
  // "e" gives us access to the event
  // e.preventDefault makes sure we don't have unneccessary page refreshes
  // we pass in the array from "data" to setText...
  const handleSubmit = (e) => {
    e.preventDefault();
    // parseInt just convert the "count" string to a number...
    let amount = parseInt(count);
    // if user enters a negative number, just display one paragraph...
    if (count <= 0) {
      amount = 1;
    }
    // if user enters a number greater than 8, just display the available 8 paragraphs...
    if (count > 8) {
      amount = 8;
    }
    // slice from the beginning of the array (0) to the specified number(amount) to generate the correct number of paragraphs...
    setText(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h3>Tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>

        {/* set up a controlled input field to change with the "count" state value*/}
        {/* onChange is for when we change the "count" value in the input field, we also change the "count" value in state */}
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          // we look for the event object (e)...
          onChange={(e) => setCount(e.target.value)}
        />
        {/* set up the submit button... */}
        <button type="submit" className="btn">
          generate
        </button>
      </form>

      {/* this will be the article containing the generated text... */}
      <article className="lorem-text">
        {/* map through the "text" array (both the individual item and the index position) */}
        {/* return a paragraph containing that individual item  and the index position(key)*/}
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
