import { Controller } from 'react-hook-form';

import { TextField } from '@mui/material';

const InputText = (props) => {
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
          error={!!errors.email}
          helperText={errors.email?.message}
          variant="outlined"
          fullWidth
          {...field}
        />
      )}
    />
  );
};

export default InputText;
