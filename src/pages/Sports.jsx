import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import './style.css'
import './sportsStyling.css'



function Sports() {

  const sportDetailsById = useSelector((state) => state?.GetSportDetailsData?.eachsportDetails );
  console.log("Dusk till Dawn in Sports" , sportDetailsById);

  return (
  <>
    <Container className='details'>

        <Content className='container'>
          <Warp className='details-card'>

            <Contex className='details-cardbody'>
                 
                <h2 >{sportDetailsById?.eventTitle} (<h6>{sportDetailsById?.title}</h6>)</h2> 
        
              {sportDetailsById?.episodeNum && <p>Episode Number : {sportDetailsById?.episodeNum }</p>}
              <div className='timing'>
                {sportDetailsById?.startTime && <p> {sportDetailsById?.startTime.substring(0, 10)} {sportDetailsById?.startTime.substring(11, 16)} {sportDetailsById?.startTime.charAt(16)} </p> }
                {sportDetailsById?.endTime && <p>to {sportDetailsById?.endTime.substring(0, 10)} {sportDetailsById?.endTime.substring(11, 16)} {sportDetailsById?.endTime.charAt(16)}  </p> }
                {sportDetailsById?.duration && <p> || Duration :  {sportDetailsById?.duration} min</p>}
              </div>
              
              {sportDetailsById?.genres && <p>Genre: {sportDetailsById?.genres.map(genre => `${genre}`).join(', ')}</p>}
              {sportDetailsById?.season?.content && <p>Season Year  {sportDetailsById?.season?.content} </p>}
              

              <h3>MORE DETAILS</h3>

                
                  <div className='stationBio'>
                      {sportDetailsById?.teams && <p>Teams :  {sportDetailsById?.teams.map(team => `${team.name}`).join(' Vs ')} </p>}
                     
                  </div>
                  
                  <div className = "videoQuality "> <p>  </p>
                      <div className ="videoQualityDetails" >
                        {sportDetailsById?.teams && <p>Home Team:  {sportDetailsById?.teams.map(team => team?.isHome && `${team.name}`)} </p>}
                      </div>
                  </div>

                  
                


                  
              
             

              {sportDetailsById?.longDescription && <p>Description : {sportDetailsById?.longDescription} </p>}
           

            </Contex>
          <></>
          <img src={`http://developer.tmsimg.com/${sportDetailsById?.preferredImage?.uri.split('?')[0]}?api_key=sutnr87xw6e5duru7eytcxwd`} alt = "{program.title}"  />
          </Warp>
        </Content>
      </Container>
    </>
  )
}

export default Sports;

const Container = styled.div`
color:white;
`
const Content = styled.div`
color:white;
`
const Warp = styled.div`
color:white;
`
const Contex = styled.div`
color:white;
`

const para = styled.p`
color:white;
display:content ;
`