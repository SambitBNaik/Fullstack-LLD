import React, { useState } from 'react';

const ShorteningPage = () => {
  const [selectedText, setSelectedText] = useState('');
  const [shortenedTexts, setShortenedTexts] = useState([]);

  const handleTextChange = (e) => {
    setSelectedText(e.target.value);
  };

  const handleShortenText = () => {
    if (selectedText.trim() !== '') {
      const shortenedText = selectedText.slice(0, 20); // Example of shortening text (limit to 20 characters)
      setShortenedTexts((prev) => [...prev, shortenedText]);
      setSelectedText(''); // Clear the input box
    }
  };

  return (
    <div style={styles.container}>
      <h1>Text Shortener</h1>

      {/* Input box for text */}
      <textarea
        value={selectedText}
        onChange={handleTextChange}
        placeholder="Enter text here..."
        style={styles.textArea}
      />

      {/* Button to shorten the text */}
      <button onClick={handleShortenText} style={styles.button}>
        Shorten Text
      </button>

      {/* Display the shortened text */}
      <div style={styles.outputContainer}>
        <h3>Shortened Texts:</h3>
        <ul>
          {shortenedTexts.map((text, index) => (
            <li key={index} style={styles.shortenedText}>
              {text}
            </li>
          ))}
        </ul>
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
  },
  textArea: {
    width: '300px',
    height: '100px',
    marginBottom: '20px',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
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
  },
  outputContainer: {
    width: '300px',
  },
  shortenedText: {
    padding: '5px',
    backgroundColor: '#f9f9f9',
    borderRadius: '3px',
    marginBottom: '5px',
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
  },
};

export default ShorteningPage;
