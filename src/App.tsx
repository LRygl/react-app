import ListGroup from "./Components/ListGroup";
import Alert from "./Components/Alert";
import TopNavigationBar from "./Components/TopNavigationBar/TopNavigationBar";
import "./index.css";

function App() {
  let items = ["New York", "Paris", "Prague", "Trip"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <TopNavigationBar></TopNavigationBar>

      <Alert>Hello World</Alert>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>
    </div>
  );
}

export default App;
