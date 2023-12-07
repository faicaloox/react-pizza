import Pizza from './Pizza'

const Menu = ({pizzaData}) => {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone over, all organic, all delicious.</p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza key={pizza.name} pizza={pizza} />
            ))}
          </ul>
        </>
      ) : <p>We're still working on our menu. Please come back later :)</p>}
    </main>
  )
}

export default Menu