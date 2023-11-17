import React, { useState, useCallback, useRef } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
import './Home.css'
import copyimg from './images/copy.png'


function Home() {
  const [url, setUrl] = useState('');
  const [slug, setSlug] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const generateLink = async () => {
  
      const response = await axios.post('/api/links', {
        url: url,
        slug: slug,
      });
      setShortUrl(response?.data?.data?.shortUrl);
      console.error('Error generating short URL:', error);
      // Handle the error, e.g., show a user-friendly message
  };

  //useRef Hook
  const copyUrlRef = useRef(null);

  const copyUrlToClipBoard = useCallback(() => {
    copyUrlRef.current?.select();
    window.navigator.clipboard.writeText(shortUrl);
  
  }, [shortUrl]);

  return (
    <div>
      <Navbar />
      <div className='container d-flex justify-content-around mt-5'>
        <div>
          {/* <h3>Link Generator</h3> */}
          <div className="d-flex flex-wrap mt-5 align-content-center justify-content-evenly">
            <div>
              <form class="form">
                <p class="form-title">Generate Short Url Here</p>
                <div class="input-container">
                  <input
                    placeholder="Enter Url Here"
                    type="text"
                    required
                    value={url}
                    onChange={(e) => {
                      setUrl(e.target.value);
                    }}
                  />
                </div>
                <div class="input-container">
                  <input
                    placeholder="Enter Slug Here (optional)"
                    type="text"
                    required
                    value={slug}
                    onChange={(e) => {
                      setSlug(e.target.value);
                    }}
                  />
                </div>
                <div class="input-container">
                  <input type="text" 
                  readOnly value={shortUrl}
                   placeholder='Short Url' 
                   ref={copyUrlRef} />

                  <span>
                    <img src={copyimg}
                      alt="png"
                      className="h-25"
                      onClick={copyUrlToClipBoard}
                    />
                  </span>

                </div>
                <button
                  class="submit"
                  type="button"
                  onClick={generateLink}
                >
                  Do Magic
                </button>
              </form>
            </div>
          </div>
        </div>

        <div>
          <h3>All Links</h3>
        </div>
      </div>
    </div>
  )
}

export default Home