import React, { useState } from "react";
import todo from "../images/download.png";
import "../App.css";

const Todo = () => {
  const [inputdata, setinputdata] = useState("");
  // console.log(inputdata);
  const [items, setitems] = useState([]);

  const addItem = () => {
    if (!inputdata) {
    } else {
      setitems([...items, inputdata]);
      setinputdata("");
    }
  };

  const delItem = (id) => {
    const remaningItems = items.filter((elem, ind) => {
      return ind !== id;
    });
    setitems(remaningItems);
  };
  
  const removeAll = () => {
    setitems([]);
  };
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          {/* display pic on top */}
          <figure>
            <img src={todo} alt="not found" class="fas fa-clipboard-list"/>
            <figcaption>Add Your List Here 🤘 </figcaption>
          </figure>

          {/* getting user input */}

          <div className="additems">
            <input
              type="text"
              value={inputdata}
              onChange={(e) => setinputdata(e.target.value)}
              placeholder="Add Items... 👾"
            />
            {/* plus button */}
            <i
              className="fa fa-plus add-btn"
              title="Add Item"
              onClick={addItem}
            ></i>
          </div>

          {/* show items added */}
          <div className="showItems">
            {items.map((elem, ind) => {
              return (
                <div className="eachItem" key={ind}>
                  <h3>{elem}</h3>
                  <i className="far fa-add-alt add-btn" title="Add Item"></i>
                  <i
                    className="far fa-trash-alt add-btn"
                    title="Delete This Item"
                    onClick={() => delItem(ind)}
                  >
                    {" "}
                  </i>
                </div>
              );
            })}
          </div>

          {/* button to remove all */}
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
