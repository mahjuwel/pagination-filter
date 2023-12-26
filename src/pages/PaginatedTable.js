import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from '../components/Search';

const PaginatedTable = () => {

  // Sample data for demonstration
  const data = [
    { id: 1, name: 'John Doe', age: 25, city: 'New York' },
    { id: 2, name: 'Jan', age: 30, city: 'Los Angeles' },
    { id: 3, name: 'Hasan', age: 33, city: 'Texas' },
    { id: 4, name: 'Doe', age: 23, city: 'Alabama' },
    { id: 5, name: 'Karim', age: 25, city: 'Los Angeles' },
    { id: 6, name: 'Belal', age: 26, city: 'Los Angeles' },
    { id: 7, name: 'Reza', age: 27, city: 'Los Angeles' },
    { id: 8, name: 'Naimul', age: 29, city: 'Los Angeles' },
    { id: 9, name: 'Emaon', age: 31, city: 'Los Angeles' },
    { id: 10, name: 'Simon', age: 22, city: 'Los Angeles' },
    { id: 11, name: 'Raju', age: 37, city: 'Los Angeles' },
    { id: 12, name: 'Mohammad', age: 18, city: 'Los Angeles' }
  ];

  // Number of items to display per page
  const itemsPerPage = 5;

  // State to manage the current page
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData]=useState(data);
  // Calculate the index of the first and last item to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = currentData.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handleSearch = (searchText) => {
    let value= searchText.toLowerCase();
    const newUsers = data.filter((user)=>{
      const userName= user.name.toLowerCase();
      const city= user.city.toLowerCase();
      const age= user.age.toString();
      const id= user.id.toString();
      
    
      return (

        userName.startsWith(value) ||  city.startsWith(value) || age.startsWith(value) || id.startsWith(value)
       
      );
    });
    

    setCurrentData(newUsers);
  
  
  };

  return (
    <div className="container mt-4">
      <Search onSearch={handleSearch}/>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.city}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination with page number select dropdown */}
      <nav>
   
        <ul className="pagination justify-content-start">
        <div className="form-group" style={{width:"250"}}>          
          <select
            id="pageSelect"
            className="form-control"
            value={currentPage}
            onChange={(e) => handlePageChange(parseInt(e.target.value))}
          >
            {Array.from({ length: Math.ceil(currentData.length / itemsPerPage) }).map((_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
          {Array.from({ length: Math.ceil(currentData.length / itemsPerPage) }).map((_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
    
      </nav>
    </div>
  );
};

export default PaginatedTable;
