import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Button = styled.button`
  width: 50px;
  height: 50px;
  background-color: transparent;
  border: 2px solid #ddd;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-color: #f81212;

    svg {
      transform: scale(1.5);
    }
  }
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  transition: all 0.3s ease-in-out;
`;

export default function IconButton(props) {
  return (
    <Button onClick={props.onClick}>
      <Icon icon={faTrash} style={{ color: "#f81212" }} />
    </Button>
  );
}
