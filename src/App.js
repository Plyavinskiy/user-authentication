import MainHeader from "./components/MainHeader/MainHeader";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <>
      <MainHeader />
      <main>
        <Login />
        <Home />
      </main>
    </>
  );
};

export default App;
