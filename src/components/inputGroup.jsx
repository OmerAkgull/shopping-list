import { Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";

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

  const shopOptions = shops.map((shop) => <option value={shop.id} key={shop.id}>{shop.name}</option>)
  const categoryOptions = categories.map((category) => <option value={category.id} key={category.id}>{category.name}</option>)

export default function MyInputGroup() {
    
  return (
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Product Name
        </InputGroup.Text>
        <Form.Control
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
      </InputGroup>
  );
}
