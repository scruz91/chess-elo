import React from "react";

export default ({ handleChange, handleSubmit, post }) => {
  return (
    <div className="form-container">
      <form>
        <div className="form-group">
          <input
            className="col-12 form-control"
            name="j1Name"
            onChange={handleChange}
            type="text"
            value={post.j1Name}
            placeholder="post name"
          />
        </div>
        <div className="form-group">
          <input
            className="col-12 form-control"
            name="j1Elo"
            onChange={handleChange}
            type="text"
            value={post.j1Elo}
            placeholder="post description"
          />
        </div>
        <div className="form-group">
          <input
            className="col-12 form-control"
            name="j2Name"
            onChange={handleChange}
            type="text"
            value={post.j2Name}
            placeholder="post salary"
          />
        </div>
        <div className="form-group">
        <div className="form-group">
          <input
            className="col-12 form-control"
            name="j2Elo"
            onChange={handleChange}
            type="text"
            value={post.j2Elo}
            placeholder="post salary"
          />
        </div>
        </div>
        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};
