import React from "react";

export default function useFormInput(initialValue) {
  const [value, setValue] = React.useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange
  };
}
