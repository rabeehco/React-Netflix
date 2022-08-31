import React, {useEffect, useState} from 'react'
import './RowPost.css'
import YouTube from 'react-youtube'
import axios from 'axios'
import {API_KEY, imageUrl, baseUrl} from '../../Constants/constants'

function RowPost(props) { 
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
      controls: 0
    }
  }
 
  const [urlId, setUrlId] = useState('')
  const [rowpost, setrow] = useState([])

  const handleMovie = (id) => {
    axios.get(`${baseUrl}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`) 
    .then(response => {
      let key = response.data.results[0].key
      setUrlId(key)
    })
  }


    useEffect(() => {
      axios.get(props.array).then((response) => {
        setrow(response.data.results) 
      }).catch((err) => alert('Network Error'))
    }, [rowpost]) 

  return (
    <div className='row'>      
        <h2>{props.genre}</h2>
        <div className="posters">          
            {rowpost.map((obj, index) => {    
              return( <img onClick={()=>{handleMovie(obj.id)}} className={props.index>1 ? 'small-poster' : 'poster'} src={`${rowpost ? imageUrl+obj.poster_path : ''}`} alt="poster" />)                             
            })}
        </div>  
            {urlId ? <YouTube opts={opts} videoId={urlId}/> : ''} 
           
    </div>
     
  )
}

export default RowPost