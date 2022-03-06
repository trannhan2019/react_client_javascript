import { Checkbox, FormControlLabel } from '@mui/material';
import { Controller } from 'react-hook-form';

const CheckBox = (props) => {
  const { label, name, form } = props;
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field }) => (
        <FormControlLabel
          control={<Checkbox color="primary" {...field} />}
          label={label}
        />
      )}
    />
  );
};

export default CheckBox;
