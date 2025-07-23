import leafyImage from "../images/leafy.jpg";
import cabbageImage from "../images/cabbage.jpg";
import carrotImage from "../images/carrot.jpg";
import milkImage from "../images/milk.jpg";
import paneerImage from "../images/paneer.jpg";

const productData = {
  leafy: {
    name: "Leafy Greens - Spinach (Loose)",
    price: "₹40.00 / bunch",
    sizes: [
      { label: "1 bunch", price: "₹40.00" },
      { label: "2 bunches", price: "₹75.00 (6% off)" }
    ],
    description: "Fresh and healthy spinach leaves, rich in iron and vitamins.",
    image: leafyImage
  },
  cabbage: {
    name: "Cabbage - Green",
    price: "₹30.00 / kg",
    sizes: [
      { label: "1 kg", price: "₹30.00" },
      { label: "500 g", price: "₹18.00" }
    ],
    description: "Crisp and fresh cabbage, great for salads, stir-fries, and soups.",
    image: cabbageImage
  },
  carrot: {
    name: "Carrot - Orange",
    price: "₹45.00 / kg",
    sizes: [
      { label: "1 kg", price: "₹45.00" },
      { label: "500 g", price: "₹25.00" }
    ],
    description: "Sweet and crunchy carrots, perfect for snacks or cooking.",
    image: carrotImage
  },
  milk: {
    name: "Fresh Cow Milk - 1L",
    price: "₹50.00 / liter",
    sizes: [
      { label: "1 liter", price: "₹50.00" },
      { label: "500 ml", price: "₹28.00" }
    ],
    description: "Pure and fresh cow milk, rich in calcium and protein.",
    image: milkImage
  },
  paneer: {
    name: "Paneer - Fresh Cottage Cheese",
    price: "₹240.00 / kg",
    sizes: [
      { label: "1 kg", price: "₹240.00" },
      { label: "500 g", price: "₹130.00" },
      { label: "250 g", price: "₹70.00" }
    ],
    description: "Soft and fresh paneer made from full cream milk — perfect for curries and grilling.",
    image: paneerImage
  },
};

export default productData;
