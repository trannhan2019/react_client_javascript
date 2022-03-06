import { Controller } from 'react-hook-form';

import { TextField } from '@mui/material';

const TextArea = (props) => {
  const { label, name, type, form } = props;
  const {
    formState: { errors },
  } = form;
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field }) => (
        <TextField
          label={label}
          type={type}
          error={!!errors[`${name}`]}
          helperText={errors[`${name}`]?.message}
          variant="outlined"
          fullWidth
          {...field}
          multiline
          rows={5}
        />
      )}
    />
  );
};

export default TextArea;
