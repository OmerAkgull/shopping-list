import { useState } from "react";
import { Alert, Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { nanoid } from "nanoid";

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
  { value: 4, label: "Sports Equipment" },
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

  function addProduct(e) {
    e.preventDefault();
    if (productInput === "" || productShop === "" || productCategory === "") {
      alert("Please fill all required fields!");
    } else {
      setProduct([
        ...product,
        {
          name: productInput,
          shop: productShop,
          category: productCategory,
          id: nanoid(),
        },
      ]);
      setProductInput("");
    }
  }

  const products = product.map((aProduct) => (
    <tr key={aProduct.id}>
      <td>{aProduct.name}</td>
      <td>{aProduct.shop}</td>
      <td>{aProduct.category}</td>
    </tr>
  ));

  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Product Name
        </InputGroup.Text>
        <Form.Control
          onChange={(e) => setProductInput(e.target.value)}
          value={productInput}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
        <Form.Select onChange={(e) => setProductShop(e.target.value)}>
          <option>Select Shop</option>
          {shopOptions}
        </Form.Select>
        <Form.Select onChange={(e) => setProductCategory(e.target.value)}>
          <option>Select Category</option>
          {categoryOptions}
        </Form.Select>
        <Button onClick={addProduct} variant="primary" type="submit">
          Add
        </Button>
      </InputGroup>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product</th>
            <th>Shop</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {products}
        </tbody>
      </Table>
    </>
  );
}
