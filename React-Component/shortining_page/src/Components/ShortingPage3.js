// ShorteningPage.js
import React, { useState } from 'react';

// Predefined categories
const CATEGORIES = ['General', 'Work', 'Personal', 'Urgent', 'Others'];

// Dummy data to initialize
const DUMMY_DATA = [
  { id: 1, text: 'Complete the project report', category: 'Work' },
  { id: 2, text: 'Buy groceries for the week', category: 'Personal' },
  { id: 3, text: 'Schedule meeting with team', category: 'Work' },
  { id: 4, text: 'Call the plumber', category: 'Urgent' },
  { id: 5, text: 'Plan weekend trip', category: 'Personal' },
  { id: 6, text: 'Organize workspace', category: 'General' },
  { id: 7, text: 'Respond to client emails', category: 'Work' },
  { id: 8, text: 'Renew gym membership', category: 'Personal' },
  { id: 9, text: 'Going for los-angeles for meeting with client', catagory:'work'},
];

const ShorteningPage3 = () => {
  const [selectedText, setSelectedText] = useState('');
  const [shortenedTexts, setShortenedTexts] = useState(DUMMY_DATA);
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
  const [searchInput, setSearchInput] = useState('');
  const [selectedSearchCategories, setSelectedSearchCategories] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  // Handle text input change
  const handleTextChange = (e) => {
    setSelectedText(e.target.value);
  };

  // Handle category selection change for input
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Handle shortening text
  const handleShortenText = () => {
    if (selectedText.trim() !== '') {
      const shortenedText = selectedText.length > 20 ? selectedText.slice(0, 20) + '...' : selectedText;
      const newItem = {
        text: shortenedText,
        category: selectedCategory,
        id: Date.now(),
      };
      setShortenedTexts((prev) => [newItem, ...prev]);
      setSelectedText(''); // Clear the input box
    }
  };

  // Handle search input change for category filtering
  const handleSearchInputChange = (e) => {
    const input = e.target.value;
    setSearchInput(input);

    if (input.length > 0) {
      const filteredSuggestions = CATEGORIES.filter(
        (category) =>
          category.toLowerCase().includes(input.toLowerCase()) &&
          !selectedSearchCategories.includes(category)
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  // Handle adding a category from suggestions
  const handleAddCategory = (category) => {
    setSelectedSearchCategories((prev) => [...prev, category]);
    setSearchInput('');
    setSuggestions([]);
  };

  // Handle removing a selected category
  const handleRemoveCategory = (category) => {
    setSelectedSearchCategories((prev) => prev.filter((cat) => cat !== category));
  };

  // Filtered data based on selected search categories
  const displayedTexts =
    selectedSearchCategories.length === 0
      ? shortenedTexts
      : shortenedTexts.filter((item) => selectedSearchCategories.includes(item.category));

  return (
    <div style={styles.container}>
      <h1>Text Shortener with Category Filtering</h1>

      {/* Input box for text */}
      <textarea
        value={selectedText}
        onChange={handleTextChange}
        placeholder="Enter text here..."
        style={styles.textArea}
      />

      {/* Category selection for input */}
      <div style={styles.inputRow}>
        <label htmlFor="category-select" style={styles.label}>
          Select Category:
        </label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={handleCategoryChange}
          style={styles.select}
        >
          {CATEGORIES.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Button to shorten the text */}
      <button onClick={handleShortenText} style={styles.button}>
        Shorten Text
      </button>

      {/* Search box for filtering categories */}
      <div style={styles.searchContainer}>
        <label htmlFor="category-search" style={styles.label}>
          Search Categories:
        </label>
        <input
          type="text"
          id="category-search"
          value={searchInput}
          onChange={handleSearchInputChange}
          placeholder="Type to search categories..."
          style={styles.searchInput}
        />
        {/* Suggestions dropdown */}
        {suggestions.length > 0 && (
          <ul style={styles.suggestionsList}>
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleAddCategory(suggestion)}
                style={styles.suggestionItem}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
        {/* Display selected categories as tags */}
        <div style={styles.selectedCategories}>
          {selectedSearchCategories.map((category, index) => (
            <div key={index} style={styles.categoryTag}>
              {category}
              <span style={styles.removeTag} onClick={() => handleRemoveCategory(category)}>
                &times;
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Display the filtered shortened texts */}
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
    maxWidth: '700px',
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
  label: {
    marginRight: '10px',
    fontWeight: 'bold',
    minWidth: '120px',
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
  searchContainer: {
    width: '100%',
    marginBottom: '20px',
    position: 'relative',
  },
  searchInput: {
    width: '100%',
    padding: '8px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  suggestionsList: {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
    border: '1px solid #ccc',
    borderTop: 'none',
    maxHeight: '150px',
    overflowY: 'auto',
    position: 'absolute',
    width: '100%',
    backgroundColor: 'white',
    zIndex: '1',
  },
  suggestionItem: {
    padding: '8px',
    cursor: 'pointer',
  },
  selectedCategories: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '10px',
  },
  categoryTag: {
    backgroundColor: '#e0e0e0',
    borderRadius: '15px',
    padding: '5px 10px',
    margin: '5px',
    display: 'flex',
    alignItems: 'center',
  },
  removeTag: {
    marginLeft: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
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

export default ShorteningPage3;
