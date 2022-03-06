import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from '@mui/material';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import InputText from '../../common/InputText';
import TextArea from '../../common/TextArea';

const AddModal = (props) => {
  const { open, handleClose } = props;

  const schema = yup.object().shape({
    ten: yup.string().required('Please enter your name'),
    mota: yup.string().required('Please enter description'),
  });

  const form = useForm({
    defaultValues: {
      ten: '',
      mota: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (data) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(data);
    }
  };

  return (
    <>
      <Container maxWidth="xl">
        <Dialog open={open} fullWidth>
          <Box
            component="form"
            sx={{ mt: 1, width: '100%' }}
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <DialogTitle>Add Product</DialogTitle>
            <DialogContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <InputText
                    form={form}
                    name="ten"
                    label="Your Name *"
                    type="text"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextArea
                    form={form}
                    name="mota"
                    label="Descripton *"
                    type="text"
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">Submit</Button>
            </DialogActions>
          </Box>
        </Dialog>
      </Container>
    </>
  );
};

export default AddModal;
