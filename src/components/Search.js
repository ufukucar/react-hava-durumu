import React from "react";

const Search = ({ handleOnSubmit, sehir, setSehir }) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <form className="mt-5" onSubmit={handleOnSubmit}>
          <div className="form-group row">
            <label htmlFor="sehir" className="col-sm-1 col-form-label">
              Şehir:
            </label>
            <div className="col-sm-11">
              <input
                type="text"
                className="form-control"
                id="sehir"
                value={sehir}
                onChange={(e) => setSehir(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group row pl-1 offset-sm-1  ">
            <button type="submit" className="btn btn-primary btn-lg  ">
              Sorgula
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
