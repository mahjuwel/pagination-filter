import React, { useState } from 'react';

const ApprovalList = () => {
  // Sample data for demonstration
  const initialItems = [
    { id: 1, name: 'Item 1', approved: false },
    { id: 2, name: 'Item 2', approved: true },
    { id: 3, name: 'Item 3', approved: false },
    // ... more items
  ];

  const [items, setItems] = useState(initialItems);
  const [selectAll, setSelectAll] = useState(false);

  // Function to toggle approval status for a single item
  const handleToggleApproval = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, approved: !item.approved } : item
      )
    );
  };

  // Function to toggle approval status for all items
  const handleToggleAllApproval = () => {
    setItems((prevItems) =>
      prevItems.map((item) => ({ ...item, approved: !selectAll }))
    );
    setSelectAll(!selectAll);
  };

  return (
    <div className="container mt-4">
      <table className="table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleToggleAllApproval}
              />
              Select All
            </th>
            <th>ID</th>
            <th>Name</th>
            <th>Approval Status</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>
                <input
                  type="checkbox"
                  checked={item.approved}
                  onChange={() => handleToggleApproval(item.id)}
                />
              </td>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.approved ? 'Approved' : 'Not Approved'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApprovalList;
