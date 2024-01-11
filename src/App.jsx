import { GlobalStyle } from "./globalStyles";

function App() {
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

  return (
    <>
      <GlobalStyle />
    </>
  );
}

export default App;
