import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import copyimg from './images/copy.png'

function Home() {
  const [url, setUrl] = useState('');
  const [slug, setSlug] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  return (
    <div>
      <Navbar />
      {/* <h1 className='text-center mt-3'>Quick Linker</h1> */}

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
                  <input type="text" readOnly value={shortUrl} placeholder='Short Url' />
                  <span>
                    <img src={copyimg} alt="png" className="h-25" />
                  </span>
                </div>
                <button class="submit" type="button">
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