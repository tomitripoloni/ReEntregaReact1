const ItemListContainer = ({ greeting }) => {
    const items = [
      { id: 1, name: 'Gorra Roja', price: 19.99, imageUrl: '\img\roja.jpg' },
      { id: 2, name: 'Gorra Negra', price: 21.99, imageUrl: '.\img\negra.jpg' },
      { id: 3, name: 'Gorra Azul', price: 19.99, imageUrl: '\img\azul.jpg' },
      { id: 4, name: 'Gorra Verde', price: 21.99, imageUrl: '.\img\verde.jpg' },
      { id: 5, name: 'Gorra Amarilla', price: 19.99, imageUrl: '\img\amarilla.jpg' },
      { id: 6, name: 'Gorra Blanca', price: 21.99, imageUrl: '.\img\blanca.jpg' },
    ];
  
    const handleBuyClick = (item) => {
      
      alert(`Producto añadido al carrito: ${item.name}`);
    };
  
    return (
      <div className="item-list-container">
        <h2 className="greeting">{greeting}</h2>
        <div className="item-list">
          {items.map(item => (
            <div key={item.id} className="item">
              <img src={item.imageUrl} alt={item.name} className="item-image" />
              <h3 className="item-name">{item.name}</h3>
              <p className="item-price">${item.price.toFixed(2)}</p>
              <button className="btn btn-danger" onClick={() => handleBuyClick(item)}>
                Comprar
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  