import React, { useState, useEffect } from 'react';
import './popup.css';


const openAIAPIUrl = 'https://api.openai.com/v1/engines/text-davinci-002/completions';

// API Key for openAI API
const authToken = 'Bearer <<ENTER YOUR OpenAI KEY HERE>>';

// Prefix for the email prompt
const promptPrefix = "Compose an email message regarding the following: ";

const Popup = ({ onSubmit, outputText }) => {
  // State variables
  const [inputText, setInputText] = useState('');
  const [apiResponse, setApiResponse] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  // Event handler for input change
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  // Event handler for form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    // Input validation
    if (!inputText) {
      setError("Please enter a valid input.");
      return;
    }

    setLoading(true);

    // API request configuration
    var requestOptions = {
      method: 'POST',
      headers: {  
        'Content-Type': 'application/json',
        'Authorization': authToken
      },
      body: JSON.stringify({
        prompt: promptPrefix + inputText,
        max_tokens: 2000,
        temperature: 1.0
      })
    }

    try {
      // Fetch API response
      const response = await fetch(openAIAPIUrl, requestOptions);

      // Handle non-successful response
      if (!response.ok) {
        throw new Error('API request failed');
      }

      // Parse API response
      const data = await response.json();
      const text = data.choices[0].text;
      const refinedText = text.replace(/^\n+/, ''); 
      setApiResponse(refinedText); // Update the state with the response text
    } catch (error) {
      setError('Failed to fetch API response. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Event handler for clear button click
  const handleClearClick = () => {
    setInputText('');
    setApiResponse('');
    setError(null);
    setIsCopied(false);
  };

  // Event handler for copy button click
  async function handleCopyClick() {
    if (apiResponse) {
      await navigator.clipboard.writeText(apiResponse);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  }



  // Event handler for save as text button click
  const handleSaveAsText = () => {
    if (apiResponse) {
      const blob = new Blob([apiResponse], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const anchorElement = document.createElement('a');
      anchorElement.href = url;
      anchorElement.download = 'email_draft.txt';
      anchorElement.click();
      URL.revokeObjectURL(url);
      setIsSaved(true);
      setTimeout(() => {
        setIsSaved(false);
      }, 2000);
    }
  }

  return (
    <div className='className="popup-container'>
      <div className="input-button-output-container">
        <div className="input-section">
          <form>
            {/* Input text area */}
            <textarea
              className='input-box'
              style = {{ overflowWrap: 'break-word' }}
              value={inputText}
              onChange = {handleInputChange}
              placeholder="Write a short email description"
            />
            <div className = "button-section">
              {/* Get button */}
              <button className='button' onClick = {handleFormSubmit} disabled={loading}>
                {loading ? 'Loading...' : 'Get'}
              </button>
            </div>
            <div className = "clear-button-section">
              {/* Clear button */}
              {!loading && (
                <button className = 'button' onClick = {handleClearClick}>
                  Clear
                </button>
              )}
            </div>
            {/* Error message */}
            {error && <p className = "error-message">{error}</p>}
          </form>
        </div>
        
        {/* Output section */}
        {apiResponse && (
          <div className = "output-section output-visible">
            {/* Output text area */}
            <textarea className = 'output-box' value = {apiResponse} readOnly />
            <div className = "copy-save-section">
              {/* Copy button */}
              <button className = 'button'  onClick = {handleCopyClick}>
                {isCopied ? ' Draft Copied! ' : 'Copy Draft'}
              </button>
            </div>
            <div className = "copy-save-section">
              {/* Save as text button */}
              <button className = "button" onClick = {handleSaveAsText}>
              {isSaved? ' Draft Saved! ' : 'Save Draft'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;
