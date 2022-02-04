import React from "react";
import PropTypes from "prop-types";
import SelectInput from "../common/SelectInput";
import TextInput from "../common/TextInput";

const CourseForm = ({
  course,
  authors,
  onSave,
  onChange,
  saving = false,
  errors = {},
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>
        {course.id
          ? "Edit"
          : "Add"}{" "}
        Course
      </h2>
      {errors.onSave && (
        <div
          className="alert alert-danger"
          role="alert"
        >
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="title"
        label="Title"
        value={course.title}
        onChange={onChange}
        error={errors.title}
      />
      <SelectInput
        name="authorId"
        label="Select Author"
        value={
          course.authorId ||
          ""
        }
        defaultValue="Select Author"
        options={authors.map(
          (author) => ({
            value: author.id,
            text: author.name,
          })
        )}
        onChange={onChange}
        error={errors.author}
      />
      <TextInput
        name="category"
        label="Category"
        value={
          course.category
        }
        onChange={onChange}
        placeholder="Category"
        error={
          errors.category
        }
      />
      <button
        type="submit"
        disabled={saving}
        className="btn btn-primary"
        onSubmit={onSave}
      >
        {saving
          ? "Saving..."
          : "Save"}
      </button>
    </form>
  );
};
CourseForm.prototype = {
  authors:
    PropTypes.array
      .isRequired,
  course:
    PropTypes.object
      .isRequired,
  errors: PropTypes.object,
  onSave:
    PropTypes.func.isRequired,
  onChange:
    PropTypes.func.isRequired,
  saving: PropTypes.bool,
};

export default CourseForm;
