import axios from "axios";

const productionUrl = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
  baseURL: productionUrl,
});

// converting to dollar
export const formatPrice = (price) => {
  const dollarAmount = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  }).format((price / 100).toFixed(2));
  return dollarAmount;
};
// generate dynamic select option
export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;
    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};
