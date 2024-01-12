import { useState } from "react";
import { Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";

const shops = [
  { id: 1, name: "Hepsiburada" },
  { id: 2, name: "Trendyol" },
  { id: 3, name: "n11" },
  { id: 4, name: "Migros" },
  { id: 5, name: "Carrefour" },
];

const categories = [
  { id: 1, name: "Electronics" },
  { id: 2, name: "Cosmetics" },
  { id: 3, name: "Books" },
  { id: 4, name: "Sports Equipment" },
  { id: 5, name: "Clothing" },
];

const shopOptions = shops.map((shop) => (
  <option value={shop.id} key={shop.id}>
    {shop.name}
  </option>
));
const categoryOptions = categories.map((category) => (
  <option value={category.id} key={category.id}>
    {category.name}
  </option>
));

export default function MyInputGroup() {
  const [productInput, setProductInput] = useState("");
  const [product, setProduct] = useState([]);

  function addProduct(e) {
    e.preventDefault();
    setProduct([...product, productInput]);
    setProductInput("");
  }

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
        <Form.Select>
          <option>Select Shop</option>
          {shopOptions}
        </Form.Select>
        <Form.Select>
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
            <th>#</th>
            <th>Product</th>
            <th>Shop</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody></tbody>
      </Table>
    </>
  );
}
