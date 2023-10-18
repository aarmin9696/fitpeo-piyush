import React,{useState} from "react";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const Product = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [selectedDays, setSelectedDays] = useState("");

  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Description of Product",
      image: "https://img.freepik.com/free-photo/colorful-wallpaper-background-multicolored-generative-ai_91128-2257.jpg?size=626&ext=jpg&ga=GA1.2.1545881442.1692007990&semt=sph",
      stock: 32,
      price: 10.0,
      totalSales: 580,
      Days:7,
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product",
      image: "https://img.freepik.com/premium-photo/3d-illustration-abstract-design-made-colorful-forms-subject-art-passion-spirituality_685067-406.jpg?w=1060",
      stock: 59,
      price: 20.0,
      totalSales: 109,
      Days:30
    },
    {
        id: 3,
        name: "Product 3",
        description: "Description of Product",
        image: "https://img.freepik.com/free-photo/abstract-colorful-background_1017-3306.jpg?size=626&ext=jpg",
        stock: 89,
        price: 70.0,
        totalSales: 9,
        Days:30
      },
      {
        id: 4,
        name: "Product 4",
        description: "Description of Product",
        image: "https://img.freepik.com/premium-photo/colorful-oil-paint-multicolor-texture-abstract-background_89729-1056.jpg?size=626&ext=jpg",
        stock: 84,
        price: 50.0,
        totalSales: 56,
        Days:7
      },
      {
        id: 5,
        name: "Product 5",
        description: "Description of Product",
        image: "https://img.freepik.com/free-vector/tropical-mural-wallpaper_52683-49098.jpg?size=626&ext=jpg",
        stock: 45,
        price: 23.0,
        totalSales: 28,
        Days:7
      },
      {
        id: 6,
        name: "Product 6",
        description: "Description of Product",
        image: "https://img.freepik.com/premium-photo/green-tobacco-grows-garden-tobacco-farm-tobacco-production-concept_561246-1037.jpg?size=626&ext=jpg",
        stock: 12,
        price: 99.0,
        totalSales: 56,
        Days:30
      },
      {
        id: 7,
        name: "Product 7",
        description: "Description of Product",
        image: "https://img.freepik.com/premium-photo/rainbow-flower-isolated-black-background-colorful-daisy-background-rainbow-abstract-surface_244809-531.jpg?size=626&ext=jpg",
        stock: 33,
        price: 55.0,
        totalSales: 46,
        Days:7
      },
      {
        id: 8,
        name: "Product 8",
        description: "Description of Product",
        image: "https://img.freepik.com/free-vector/plant_1308-86409.jpg?size=626&ext=jpg",
        stock: 12,
        price: 19.0,
        totalSales: 85,
        Days:30
      },
      {
        id: 9,
        name: "Product 9",
        description: "Description of Product",
        image: "https://img.freepik.com/free-photo/owl-bird-colorful-flowers-generative-ai_206725-745.jpg?w=360&t=st=1697569765~exp=1697570365~hmac=dd96aed0bf7bdec22002c0db4482c41e93c5c1dca8b2c74f64804c43629d5154",
        stock: 6,
        price: 80.0,
        totalSales: 77,
        Days:7
      },
      {
        id: 10,
        name: "Product 10",
        description: "Description of Product",
        image: "https://img.freepik.com/free-photo/3d-render-low-poly-plexus-design-network-communications_1048-14542.jpg?size=626&ext=jpg&ga=GA1.1.1545881442.1692007990&semt=sph",
        stock: 53,
        price: 43.0,
        totalSales: 87,
        Days:30
      },

  ];

  const filteredProductsByDays = selectedDays === "filter1" ? 30 : 7;
  const filteredProducts = searchQuery
    ? products.filter(
        (product) =>
          product.Days === filteredProductsByDays &&
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products.filter((product) => product.Days === filteredProductsByDays);




  return (
    <div className="product-container item-shadow">
      <div className="product-header">
        <div className="left-section product-divider">
          <h3>Product Sell</h3>
          <div id="pro-pro" className="row">
          <div className="searchbar"> <SearchRoundedIcon /> 
          <input
           placeholder="search"
           value={searchQuery}
           onChange={(e) => setSearchQuery(e.target.value)} />  </div>
          <select 
            className="searchbar disp"
            value={selectedDays}
            onChange={(e) => setSelectedDays(e.target.value)}
          >
            <option value="filter1">Last 30 Days</option>
            <option value="filter2">Last 7 Days</option>
            {/* Add more filter options */}
          </select>
          </div>
        </div>
        <div className="product-divider">
          <h3>Product Name</h3>
          <div className="product-info row product-right sub-pro">
            <p>Stock</p>
            <p>Price</p>
            <p>Total Sales</p>
          </div>
          
        </div>
      </div>
      <hr />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-item product-divider">
            <div className="product-details">
              <img src={product.image} alt={product.name} />
              <div>
                <h3>{product.name}</h3>
                <p className="gray">{product.description}</p>
              </div>
            </div>
            <div className="product-info row product-right">
              <p>{product.stock} in stock</p>
              <p className="sub-price">${product.price.toFixed(2)}</p>
              <p>{product.totalSales}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
