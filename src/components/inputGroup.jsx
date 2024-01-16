import { useState, useEffect } from "react";
import { Alert, Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { nanoid } from "nanoid";
import IconButton from "./iconButton";
import JSConfetti from "js-confetti";

const shops = [
  { value: 1, label: "Hepsiburada" },
  { value: 2, label: "Trendyol" },
  { value: 3, label: "n11" },
  { value: 4, label: "Migros" },
  { value: 5, label: "Carrefour" },
];

const categories = [
  { value: 1, label: "Electronics" },
  { value: 2, label: "Cosmetics" },
  { value: 3, label: "Books" },
  { value: 4, label: "Sports" },
  { value: 5, label: "Clothing" },
];

const shopOptions = shops.map((shop) => (
  <option value={shop.label} key={shop.value}>
    {shop.label}
  </option>
));
const categoryOptions = categories.map((category) => (
  <option value={category.label} key={category.value}>
    {category.label}
  </option>
));

export default function MyInputGroup() {
  const [productInput, setProductInput] = useState("");
  const [product, setProduct] = useState([]);
  const [productShop, setProductShop] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [redAlertVisible, setRedAlertVisible] = useState(false);

  const JSConfeti = new JSConfetti();

  function addProduct(e) {
    e.preventDefault();
    if (productInput === "" || productShop === "" || productCategory === "") {
      setRedAlertVisible(true);
    } else {
      setProduct([
        ...product,
        {
          name: productInput,
          shop: productShop,
          category: productCategory,
          id: nanoid(),
          isBought: false,
        },
      ]);
      setProductInput("");
    }
  }

  function removeProduct(productObj) {
    const productsLeft = product.filter(
      (oneProduct) => oneProduct.id !== productObj.id
    );
    setProduct(productsLeft);
    const allProductsBought = productsLeft.every(
      (aProduct) => aProduct.isBought === true
    );
    let checkBought = productObj.isBought;
    if (allProductsBought && checkBought === false) {
      setAlertVisible(true);
    }
  }

  function addToBought(productId) {
    const updatedProduct = product.map((productz) =>
      productz.id === productId ? { ...productz, isBought: true } : productz
    );
    checkProduct(updatedProduct);
    setProduct(updatedProduct);
  }

  const checkProduct = (x) => {
    const allProductsBought = x.every((aProduct) => aProduct.isBought === true);
    const hasProducts = x.length > 0;
    if (allProductsBought && hasProducts) {
      setAlertVisible(true);
    } else {
      setAlertVisible(false);
    }
  };

  useEffect(() => {
    const allProductsBought = product.every(
      (aProduct) => aProduct.isBought === true
    );
    if (!allProductsBought) {
      checkProduct(product);
    }
  }, [product.length, product]);

  useEffect(() => {
    if (alertVisible) {
      JSConfeti.addConfetti();
    }
  }, [alertVisible]);

  const products = product.map((aProduct) => (
    <tr key={aProduct.id}>
      <td
        onClick={() => addToBought(aProduct.id)}
        className={aProduct.isBought ? "text-decoration-line-through" : ""}
      >
        {aProduct.name}
      </td>
      <td>{aProduct.shop}</td>
      <td>{aProduct.category}</td>
      <td>
        <IconButton onClick={() => removeProduct(aProduct)} />
      </td>
    </tr>
  ));

  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Product Name
        </InputGroup.Text>
        <Form.Control
          className="form-control-lg w-25"
          onChange={(e) => setProductInput(e.target.value)}
          value={productInput}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
        <Form.Select onChange={(e) => setProductShop(e.target.value)}>
          <option>Shop</option>
          {shopOptions}
        </Form.Select>
        <Form.Select onChange={(e) => setProductCategory(e.target.value)}>
          <option>Category</option>
          {categoryOptions}
        </Form.Select>
        <Button onClick={addProduct} variant="primary" type="submit">
          Add
        </Button>
      </InputGroup>
      <InputGroup className="mb-3 align-items-center">
      <Form.Select>
          <option>Shop</option>
          {shopOptions}
        </Form.Select>
        <Form.Select>
          <option>Category</option>
          {categoryOptions}
        </Form.Select>
        <Form.Group className="ms-3" controlId="formRadio">
        <Form.Check
        inline
          type="radio"
          label="All"
          name="formRadio"
          id="inline"
        />
        <Form.Check
        inline
          type="radio"
          label="Bought"
          name="formRadio"
          id="inline"
        />
        <Form.Check
        inline
          type="radio"
          label="Not bought"
          name="formRadio"
          id="inline"
        />
      </Form.Group>
      <InputGroup.Text id="basic-addon1">Product</InputGroup.Text>
        <Form.Control
          aria-label="Product"
        />
      </InputGroup>
      <Table striped bordered hover>
        <thead className="text-center">
          <tr>
            <th>Product</th>
            <th>Shop</th>
            <th>Category</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="text-center">{products}</tbody>
      </Table>
      <Alert show={alertVisible} variant="success">
        <Alert.Heading>Congratulations!</Alert.Heading>
        <p>You have successfully bought all products in your list!</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button
            onClick={() => setAlertVisible(false)}
            variant="outline-success"
          >
            Close
          </Button>
        </div>
      </Alert>
      <Alert show={redAlertVisible} variant="danger">
        <Alert.Heading>Error!</Alert.Heading>
        <p>Please fill all required fields!</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button
            onClick={() => setRedAlertVisible(false)}
            variant="outline-danger"
          >
            Close
          </Button>
        </div>
      </Alert>
    </>
  );
}
