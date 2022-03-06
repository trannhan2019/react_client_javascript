import { useState } from 'react';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';

import { Controller } from 'react-hook-form';

const InputPassword = (props) => {
  const { label, name, form } = props;
  const {
    formState: { errors },
  } = form;

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    //setShowPassword(!showPassword);
    setShowPassword((x) => !x);
  };
  //   const handleMouseDownPassword = (event) => {
  //     event.preventDefault();
  //   };

  return (
    <FormControl
      variant="outlined"
      fullWidth
      error={!!errors.password}
    >
      <InputLabel>{label}</InputLabel>
      <Controller
        name={name}
        control={form.control}
        render={({ field }) => (
          <OutlinedInput
            type={showPassword ? 'text' : 'password'}
            {...field}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={() => handleClickShowPassword()}
                  //onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            label={label}
          />
        )}
      />
      <FormHelperText>{errors.password?.message}</FormHelperText>
    </FormControl>
  );
};

export default InputPassword;
