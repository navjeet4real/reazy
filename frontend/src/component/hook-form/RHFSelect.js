import React from "react";
import Select from "react-select";
import { useFormContext, Controller } from "react-hook-form";
import PropTypes from "prop-types";
// import Select from "@mui/material/Select";

RHFSelect.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node,
      value: PropTypes.string,
    })
  ),
  helperText: PropTypes.node
};

export default function RHFSelect({
  name,
  label,
  options,
  helperText,
  ...other
}) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      label={label}
      render={({ field, fieldState: { error } }) => (
        <Select
          fullWidth
          {...field}
          helperText={error ? error.message : helperText}
          error={!!error}
          options={options}
          {...other}
        />
      )}
    />
  );
}
