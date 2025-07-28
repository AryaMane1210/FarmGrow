import React, { useState }  from "react";


export const Buyer_Filter = () =>{
const products =[
    {
        id: 1, name: "Spinach", category: "Green-leafy", price: 25, available: true
    },
    {
         id: 2, name: "Carrots", category: "Vegetable", price: 30, available: true
    },
    {
         id: 3, name: "Tomato", category: "Vegetable", price: 35, available: true  
    },
    {
         id: 4, name: "Broccoli", category: "Green-leafy", price: 50, available: false
    },
    {
         id: 5, name: "Apple", category: "Fruits", price: 65, available: false
    },
    {
         id: 6, name: "Kiwi", category: "Fruits", price: 85, available: true  
    }
]

const categories = ["Fruits", "Vegetables", "Leafy Greens"];

const [searchItem, setSearchItem] = useState("");
// const [categoryFilter, setCategoryFilter] = useState("All");
 const [selectedCategories, setSelectedCategories] = useState([]);
const [Available, setAvailable] =useState(false);


 const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((cat) => cat !== category) : [...prev, category]
    );
  };

const filtered = products.filter((item) =>{
    const matchSearch = item.name.toLowerCase().includes(searchItem.toLowerCase());
    const matchCategory =selectedCategories.length === 0 || selectedCategories.includes(item.category);
    const matchAvailable = !Available || item.available;

    return matchSearch && matchCategory && matchAvailable; 
})

 return (
    <div className="flex p-2 gap-6">
      {/* Sidebar Filters */}
      <aside className=" p-4 border rounded-lg shadow-md bg-white space-y-4">
        <input
          type="text"
          placeholder="Search produce..."
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          className="w-full border px-3 py-2 rounded-md shadow-sm"
        />

        {/* <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="w-full border px-3 py-2 rounded-md shadow-sm"
        >
          <option value="All">All Categories</option>
          <option value="Fruits">Fruits</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Leafy Greens">Leafy Greens</option>
        </select> */}
        <div>
          <h3 className="font-semibold mb-2">Filter by Category</h3>
          {categories.map((category) => (
            <label key={category} className="flex items-center space-x-2 mb-1">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => toggleCategory(category)}
              />
              <span>{category}</span>
            </label>
          ))}
        </div>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={Available}
            onChange={(e) => setAvailable(e.target.checked)}
          />
          <span>Only show available</span>
        </label>
      </aside>

      
    </div>
  );
};