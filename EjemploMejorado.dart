const discounts = {
  '10%': 0.9,
  '20%': 0.8,
  '30%': 0.7,
};

function calculatePrice(price, discountType) {
  const discount = discounts[discountType];
  if (discount === undefined) {
    throw new Error('Invalid discount');
  }
  return price * discount;
}

const discountedPrice = calculatePrice(100, '30%');
console.log(`Your discounted price is $${discountedPrice}`);
