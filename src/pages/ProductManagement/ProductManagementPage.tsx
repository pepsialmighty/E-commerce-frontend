import React, { useState, MouseEvent, MouseEventHandler } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import axios from 'axios'
import { Button } from '@material-ui/core'
import WithAuthorizeAdmin from '../../components/WithAuthorizeAdmin/WithAuthorizeAdmin'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formRoot: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  })
)

const ProductManagementPage = () => {
  const classes = useStyles()

  const [productId, setProductId] = useState('')

  //   const [product, setProduct] = useState({
  //     name: '',
  //     description: '',
  //     price: '',
  //     countInStock: '',
  //     imageUrl: '',
  //   })

  //   const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setProductId(event.target.value)
  //     console.log(event.target.value)
  //   }

  //   const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
  //     event.preventDefault()
  //     console.log(product)
  //   }

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      price: '',
      countInStock: '',
      imageUrl: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        // .max(15, 'Must be 15 characters or less')
        .required('Required'),
      description: Yup.string()
        // .max(20, 'Must be 20 characters or less')
        .required('Required'),
      price: Yup.string()
        // .max(20, 'Must be 20 characters or less')
        .required('Required'),
      countInStock: Yup.string()
        // .max(20, 'Must be 20 characters or less')
        .required('Required'),
      imageUrl: Yup.string()
        // .max(20, 'Must be 20 characters or less')
        .required('Required'),
    }),
    onSubmit: (values) => {
      //   alert(JSON.stringify(values, null, 2))
      console.log('without id', values)

      axios
        .post('products', values)
        .then((res) => {
          if (res.status === 200) {
            console.log(res)
          } else {
            console.log('Something wrong when creating product')
          }
        })
        .catch((err) => console.log(err))
    },
  })

  const formikUpdateProduct = useFormik({
    initialValues: {
      productId: '',
      name: '',
      description: '',
      price: '',
      countInStock: '',
      imageUrl: '',
    },
    validationSchema: Yup.object({
      productId: Yup.string(),
      // .max(15, 'Must be 15 characters or less')
      // .required('Required'),
      name: Yup.string(),
      // .max(15, 'Must be 15 characters or less')
      // .required('Required'),
      description: Yup.string(),
      // .max(20, 'Must be 20 characters or less')
      // .required('Required'),
      price: Yup.string(),
      // .max(20, 'Must be 20 characters or less')
      // .required('Required'),
      countInStock: Yup.string(),
      // .max(20, 'Must be 20 characters or less')
      // .required('Required'),
      imageUrl: Yup.string(),
      // .max(20, 'Must be 20 characters or less')
      // .required('Required'),
    }),
    onSubmit: (values) => {
      console.log('update', values)

      axios
        .put(`products/${values.productId}`, values)
        .then((res) => {
          if (res.status === 200) {
            console.log(res)
          } else {
            console.log('Something wrong when updating product')
          }
        })
        .catch((err) => console.log(err))
    },
  })

  const formikDeleteProduct = useFormik({
    initialValues: {
      productId: '',
    },
    validationSchema: Yup.object({
      productId: Yup.string()
        // .max(15, 'Must be 15 characters or less')
        .required('Required'),
    }),
    onSubmit: (values) => {
      console.log('delete', values)

      axios
        .delete(`products/${values.productId}`)
        .then((res) => {
          if (res.status === 204) {
            console.log('delete success')
          } else {
            console.log('Something wrong when delete product')
          }
        })
        .catch((err) => console.log(err))
    },
  })

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Create Product</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <form className={classes.formRoot} onSubmit={formik.handleSubmit}>
            <TextField
              required
              id="name"
              name="name"
              label="Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              required
              id="description"
              label="Description"
              name="description"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
            />
            <TextField
              required
              id="price"
              label="Price"
              name="price"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.price && Boolean(formik.errors.price)}
              helperText={formik.touched.price && formik.errors.price}
            />
            <TextField
              required
              id="countInStock"
              label="CountInStock"
              name="countInStock"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.countInStock &&
                Boolean(formik.errors.countInStock)
              }
              helperText={
                formik.touched.countInStock && formik.errors.countInStock
              }
            />
            <TextField
              required
              id="imageUrl"
              label="Image"
              name="imageUrl"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.imageUrl && Boolean(formik.errors.imageUrl)}
              helperText={formik.touched.imageUrl && formik.errors.imageUrl}
            />
            <Button color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </form>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Edit Product</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <form
            className={classes.formRoot}
            onSubmit={formikUpdateProduct.handleSubmit}
          >
            <TextField
              id="productId"
              name="productId"
              label="ID"
              onChange={formikUpdateProduct.handleChange}
              onBlur={formikUpdateProduct.handleBlur}
              error={
                formikUpdateProduct.touched.productId &&
                Boolean(formikUpdateProduct.errors.productId)
              }
              helperText={
                formikUpdateProduct.touched.productId &&
                formikUpdateProduct.errors.productId
              }
            />
            <TextField
              id="name"
              name="name"
              label="Name"
              onChange={formikUpdateProduct.handleChange}
              onBlur={formikUpdateProduct.handleBlur}
              error={
                formikUpdateProduct.touched.name &&
                Boolean(formikUpdateProduct.errors.name)
              }
              helperText={
                formikUpdateProduct.touched.name &&
                formikUpdateProduct.errors.name
              }
            />
            <TextField
              id="description"
              label="Description"
              name="description"
              onChange={formikUpdateProduct.handleChange}
              onBlur={formikUpdateProduct.handleBlur}
              error={
                formikUpdateProduct.touched.description &&
                Boolean(formikUpdateProduct.errors.description)
              }
              helperText={
                formikUpdateProduct.touched.description &&
                formikUpdateProduct.errors.description
              }
            />
            <TextField
              id="price"
              label="Price"
              name="price"
              onChange={formikUpdateProduct.handleChange}
              onBlur={formikUpdateProduct.handleBlur}
              error={
                formikUpdateProduct.touched.price &&
                Boolean(formikUpdateProduct.errors.price)
              }
              helperText={
                formikUpdateProduct.touched.price &&
                formikUpdateProduct.errors.price
              }
            />
            <TextField
              id="countInStock"
              label="CountInStock"
              name="countInStock"
              onChange={formikUpdateProduct.handleChange}
              onBlur={formikUpdateProduct.handleBlur}
              error={
                formikUpdateProduct.touched.countInStock &&
                Boolean(formikUpdateProduct.errors.countInStock)
              }
              helperText={
                formikUpdateProduct.touched.countInStock &&
                formikUpdateProduct.errors.countInStock
              }
            />
            <TextField
              id="imageUrl"
              label="Image"
              name="imageUrl"
              onChange={formikUpdateProduct.handleChange}
              onBlur={formikUpdateProduct.handleBlur}
              error={
                formikUpdateProduct.touched.imageUrl &&
                Boolean(formikUpdateProduct.errors.imageUrl)
              }
              helperText={
                formikUpdateProduct.touched.imageUrl &&
                formikUpdateProduct.errors.imageUrl
              }
            />
            <Button color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </form>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Delete Product</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <form
            className={classes.formRoot}
            onSubmit={formikDeleteProduct.handleSubmit}
          >
            <TextField
              id="productId"
              name="productId"
              label="ID"
              onChange={formikDeleteProduct.handleChange}
              onBlur={formikDeleteProduct.handleBlur}
              error={
                formikDeleteProduct.touched.productId &&
                Boolean(formikDeleteProduct.errors.productId)
              }
              helperText={
                formikDeleteProduct.touched.productId &&
                formikDeleteProduct.errors.productId
              }
            />
            <Button color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </form>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default WithAuthorizeAdmin(ProductManagementPage)
