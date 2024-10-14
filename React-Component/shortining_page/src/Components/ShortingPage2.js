import React, { useState } from 'react';

// Predefined categories
const CATEGORIES = ['General', 'Work', 'Personal', 'Urgent', 'Others'];

const ShorteningPage2 = () => {
  const [selectedText, setSelectedText] = useState('');
  const [shortenedTexts, setShortenedTexts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
  const [filterCategory, setFilterCategory] = useState('All');

  // Handle text input change
  const handleTextChange = (e) => {
    setSelectedText(e.target.value);
  };

  // Handle category selection change for input
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Handle filter category change
  const handleFilterChange = (e) => {
    setFilterCategory(e.target.value);
  };

  // Shorten text and associate with selected category
  const handleShortenText = () => {
    if (selectedText.trim() !== '') {
      const shortenedText = selectedText.length > 20 ? selectedText.slice(0, 20) + '...' : selectedText;
      const newItem = {
        text: shortenedText,
        category: selectedCategory,
        id: Date.now(),
      };
      setShortenedTexts((prev) => [...prev, newItem]);
      setSelectedText(''); // Clear the input box
    }
  };

  // Filter shortened texts based on selected filter category
  const displayedTexts = filterCategory === 'All' 
    ? shortenedTexts 
    : shortenedTexts.filter(item => item.category === filterCategory);

  return (
    <div style={styles.container}>
      <h1>Text Shortener with Categories</h1>

      {/* Input box for text */}
      <textarea
        value={selectedText}
        onChange={handleTextChange}
        placeholder="Enter text here..."
        style={styles.textArea}
      />

      {/* Category selection for input */}
      <div style={styles.inputRow}>
        <label htmlFor="category-select" style={styles.label}>Select Category:</label>
        <select 
          id="category-select" 
          value={selectedCategory} 
          onChange={handleCategoryChange}
          style={styles.select}
        >
          {CATEGORIES.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* Button to shorten the text */}
      <button onClick={handleShortenText} style={styles.button}>
        Shorten Text
      </button>

      {/* Filter by Category */}
      <div style={styles.filterRow}>
        <label htmlFor="filter-select" style={styles.label}>Filter by Category:</label>
        <select 
          id="filter-select" 
          value={filterCategory} 
          onChange={handleFilterChange}
          style={styles.select}
        >
          <option value="All">All</option>
          {CATEGORIES.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* Display the shortened text */}
      <div style={styles.outputContainer}>
        <h3>Shortened Texts:</h3>
        {displayedTexts.length === 0 ? (
          <p>No shortened texts to display.</p>
        ) : (
          <ul style={styles.list}>
            {displayedTexts.map((item) => (
              <li key={item.id} style={styles.shortenedText}>
                <strong>[{item.category}]</strong> {item.text}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

// Basic styling
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
  },
  textArea: {
    width: '100%',
    height: '100px',
    marginBottom: '10px',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    resize: 'vertical',
  },
  inputRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    width: '100%',
  },
  filterRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    width: '100%',
  },
  label: {
    marginRight: '10px',
    fontWeight: 'bold',
  },
  select: {
    padding: '8px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    flex: '1',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    marginBottom: '20px',
    width: '100%',
  },
  outputContainer: {
    width: '100%',
    textAlign: 'left',
  },
  list: {
    listStyleType: 'none',
    paddingLeft: '0',
  },
  shortenedText: {
    padding: '10px',
    backgroundColor: '#f1f1f1',
    borderRadius: '5px',
    marginBottom: '10px',
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
  },
};

export default ShorteningPage2;
