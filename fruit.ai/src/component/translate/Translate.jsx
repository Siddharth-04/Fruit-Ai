import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Translate = () => {
  const [textToTranslate, setTextToTranslate] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('es'); // default language: Spanish
  const [error, setError] = useState('');

  const handleTranslate = async () => {
    try {
      const response = await fetch('https://api.allorigins.win/raw?url=https://libretranslate.de/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          q: textToTranslate,  // Text to translate
          source: 'en',        // Source language (default English)
          target: targetLanguage, // Target language selected by user
          format: 'text'
        }),
      });

      if (!response.ok) {
        throw new Error(`Translation API error: ${response.statusText}`);
      }

      // Log raw response for debugging
      const text = await response.text();
      console.log('Raw response:', text); // Log the raw response

      // Attempt to parse the response as JSON
      let data;
      try {
        data = JSON.parse(text);
      } catch (e) {
        throw new Error('Failed to parse JSON response: ' + e.message);
      }

      // Check for API-specific errors
      if (data.error) {
        throw new Error(`Translation Error: ${data.error}`);
      }

      setTranslatedText(data.translatedText || '');
      setError('');
    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Text Translator</h1>

      {/* Textarea for input */}
      <div>
        <h3>Enter text to translate:</h3>
        <textarea
          style={{ width: '100%', height: '100px' }}
          value={textToTranslate}
          onChange={(e) => setTextToTranslate(e.target.value)}
          placeholder="Enter text in English..."
        />
      </div>

      {/* Dropdown to select target language */}
      <div style={{ margin: '20px 0' }}>
        <label htmlFor="language">Select language to translate to: </label>
        <select
          id="language"
          value={targetLanguage}
          onChange={(e) => setTargetLanguage(e.target.value)}
        >
          <option value="es">Spanish</option>
          <option value="fr">French</option>   
          <option value="de">German</option>
          <option value="it">Italian</option>
          <option value="hi">Hindi</option>   
          <option value="zh">Chinese</option>
          <option value="ar">Arabic</option>
        </select>
      </div>

      {/* Button to trigger translation */}
      <button
        onClick={handleTranslate}
        style={{
          padding: '10px 20px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Translate
      </button>

      {/* Textarea for translated output */}
      <div style={{ marginTop: '20px' }}>
        <h3>Translated text:</h3>
        <textarea
          style={{ width: '100%', height: '100px' }}
          value={translatedText}
          readOnly
          placeholder="Translated text will appear here..."
        />
      </div>

      <NavLink to="/home">
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: '#000000',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Go back
        </button>
      </NavLink>
    </div>
  );
};
