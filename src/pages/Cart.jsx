import { useGame } from "../GameContext";

function Cart() {
  const { cart } = useGame();
  return (
    <div className="mt-10 px-10">
      <h1 className="text-xl font-bold mb-6">🛒 Your Cart ({cart.length})</h1>
      {cart.length === 0 ? (
        <p>No items yet — go buy something!</p>
      ) : (
        <ul className="flex flex-col gap-4">
          {cart.map((item, i) => (
            <li key={i} className="flex items-center gap-4 bg-slate-100 p-3">
              <img
                className="w-16 h-16 object-cover"
                src={item.image}
                alt={item.Name}
              />
              <span>
                {item.Name} — {item.price}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Cart;
