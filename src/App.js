import './App.css';
import Button from "./components/Button/Button";
import Footer from "./components/Footer/Footer";
import Text from "./components/Text/Text";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
function App() {
  return (
      <div className={"App"}>
          <Header/>
          <Content title={'Content title'}/>
          <Button/>
          <Text/>
          <Footer/>
      </div>
  );
}

export default App;


