const Filter = ({ currentFilter, onFilterChange }) => {
    const filters = [
        { value: 'all', label: 'All' },
        { value: 'completed', label: 'Completed' },
        { value: 'pending', label: 'Pending' }
    ];

    return (
        <div className="filter">
            {filters.map(filter => (
                <button
                    key={filter.value}
                    className={currentFilter === filter.value ? 'active' : ''}
                    onClick={() => onFilterChange(filter.value)}
                >
                    {filter.label}
                </button>
            ))}
        </div>
    );
};

export default Filter;