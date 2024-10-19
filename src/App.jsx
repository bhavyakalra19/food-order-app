import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Header from "./Components/Header";
import Meals from "./Components/Meals";
import { CartContextProvider } from "./Store/CartContext";
import { UserProgressContextProvider } from "./Store/UserProgressContext";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
