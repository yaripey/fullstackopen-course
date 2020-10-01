import React from 'react'

const SearchFilter = ({ currentSearch, searchChange }) => (
    <div>
        find countries <input value={currentSearch} onChange={searchChange} />
    </div>
)

export default SearchFilter