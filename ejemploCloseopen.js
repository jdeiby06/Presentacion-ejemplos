function calculatePrice(price, discount) {
  if (discount === '10%') {
    return price * 0.9;
  } else if (discount === '20%') {
    return price * 0.8;
  } else if (discount === '30%') {
    return price * 0.7;
  } else {
    throw new Error('Invalid discount');
  }
}

const discountedPrice = calculatePrice(100, '10%');
console.log(`Your discounted price is ${discountedPrice}`); //  The discount you get is 90


//El código anterior viola el principio de abierto/cerrado porque hay que añadir otra instruccion if…else si se quiere añadir un nuevo descuento.