import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { filterBySearch } from '../state/recipeSlice';
import { debounce } from '../utils/debounce';

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  const debouncedSearch = useCallback(
    debounce((query: string) => {
      dispatch(filterBySearch(query));
    }, 300),
    [dispatch]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    debouncedSearch(query);
  };

  return (
    <div className="mb-6">
      <input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        placeholder="Search recipes..."
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
      />
    </div>
  );
};

export default SearchBar;
