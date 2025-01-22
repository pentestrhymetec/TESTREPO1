function calculateTotal(price, tax, discount) {
    let total = price + tax - discount;
    if (discount > price) {
      console.log("Discount is too large");
      return;
    }
    return total.toFixed(2);
  }
  
  const prices = [29.99, 15.49, 4.99];
  let sum = 0;
  
  prices.forEach(price => {
    sum += price;
  });
  
  console.log("Sum of prices: ", sum);
  console.log(calculateTotal(sum, 0.08, 10));
  
  const user = {
    name: "John",
    age: "twenty-five"
  };
  console.log(user.gender.toUpperCase());
  
  let numbers = [1, 2, 3, 4, 5];
  numbers.map(num => num * 2).forEach(n => {
    n += 1;
  });
  console.log(numbers);