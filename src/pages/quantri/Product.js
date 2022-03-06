import {
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import Title from '../../components/common/Title';
import { Add, Edit } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import productsApi from '../../api/productsApi';
import AddModal from '../../components/quantri/product/AddModal';

const Product = () => {
  const [products, setProducts] = useState([]);

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    productsApi
      .getAll()
      .then((res) => {
        const productList = res.data.data;
        setProducts(productList);
      })
      .catch((error) => console.error());
  }, []);

  return (
    <>
      <Title>Product List</Title>
      <Button
        variant="outlined"
        startIcon={<Add />}
        onClick={() => handleClickOpen()}
      >
        Add
      </Button>
      <AddModal
        open={open}
        handleClose={handleClose}
        onSubmit={handleSubmit}
      />
      <Divider variant="fullWidth" sx={{ marginY: 2 }} />
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>on Import</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.ten}</TableCell>
              <TableCell>{row.mota}</TableCell>
              <TableCell>{row.ngay_nhap}</TableCell>
              <TableCell align="center">
                <Button startIcon={<Edit />}>Edit</Button>
                <Button>Del</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Product;
