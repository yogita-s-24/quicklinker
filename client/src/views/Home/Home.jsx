import React, { useState, useCallback, useRef, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
import './Home.css'
import copyimg from './images/copy.png'
import LinkCard from './../../components/LinkCard/LinkCard'
import Footer from './../../components/Footer/Footer'


function Home() {
  const [url, setUrl] = useState('');
  const [slug, setSlug] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [links, setLinks] = useState([]);

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

  const loadLink = async () => {
    const response = await axios.get('/fetch/links');
    console.log(response?.data?.data);
    setLinks(response?.data?.data)
  }

  useEffect(() => {
    loadLink();
  }, [])

  return (
    <>
      <Navbar />
      <h1 className='text-center mt-3'>Quick Linker🔗</h1>
      <div className='d-flex flex-wrap align-content-center justify-content-evenly mt-5'>
        <div>
          <form className="form">
            <p className="form-title">Generate Short Url Here</p>
            <div className="input-container">
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
            <div className="input-container">
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
            <div className="input-container">
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
              // class="submit"
              type="button"
              onClick={generateLink}
              className='btn w-100 text-light'
              style={{ backgroundColor: '#6540a5' }}
            >
              Do Magic
            </button>
          </form>

        </div>

        <div className='link-container'>
          {
            links?.map((linkObj, i) => {
              const { url, slug, clicks } = linkObj;

              return (<LinkCard url={url} slug={slug} clicks={clicks} key={i}/>)

            })
          }
        </div>
      </div>
      <Footer/>
    </>

  )
}

export default Home