import React from "react";
import PropTypes from "prop-types";

const SelectInput = ({
  name,
  label,
  onChange,
  defaultOption,
  value,
  error,
  options,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>
        {label}
      </label>
      <div className="field">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="form-control"
        >
          <option value="">
            {defaultOption}
          </option>
          {options.map(
            (option,index) => (
              <option
                key={index
                }
                value={
                  option.value
                }
              >
                {option.text}
              </option>
            )
          )}
        </select>
        {error && (
          <div className="alert alert-danger">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string
    .isRequired,
  label:
    PropTypes.string
      .isRequired,
  onChange:
    PropTypes.func.isRequired,
  defaultOption:
    PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  error:
    PropTypes.string
      ,
  options: PropTypes.arrayOf(
    PropTypes.object
  ),
};

export default SelectInput;
