import PropTypes from "prop-types";
import { useFormContext, Controller } from "react-hook-form";

import { Checkbox } from "@mui/material";

RHFCheckBox.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    helperText: PropTypes.node
}


export default function RHFCheckBox({ name }) {
  const { control } = useFormContext();

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Checkbox
            {...field}
          />
        )}
      />
    </>
  );
}