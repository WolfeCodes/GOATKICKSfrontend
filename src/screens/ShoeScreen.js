import './ShoeScreen.css'

const ShoeScreen = () => {
  return (
    <div className="shoescreen">
      <div className="shoescreen__left">
        <div className='left__image'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngLllFyVnGOzMormjvcX_w1AF9U5KyjrDUCJuDoN7K246iZNKS-MzWaFimE9S1z-o4V4&usqp=CAU" alt="shoe name" />
        </div>

        <div className="left__info">
          <p className="left__name">Shoe 1</p>
          <p>Price: $499.99</p>
          <p>Description: Mens Black/White</p>
        </div>
      </div>
      <div className="shoescreen__right">
        <div className="right__info">
          <p>
            Price: <span>$399.99</span>
          </p>
          <p>
            Size
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
            </select>
          </p>
          <p>
            Status: <span>In Stock</span>
          </p>
          <p>
            Qty
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </p>
          <p>
            <button type="button">Add to Cart</button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ShoeScreen
