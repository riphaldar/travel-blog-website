import React from 'react'
import styled from 'styled-components'
const Header = () => {
  return (
    <>
      <Headers id='header'></Headers>
      <Header_text className='header_text'>
        <Header_logo className='header_logo'>s</Header_logo>
        <Header_p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          distinctio voluptas quasi corporis provident aperiam similique sed
          tenetur, fugit iusto.
        </Header_p>
      </Header_text>
    </>
  )
}

export default Header

export const Headers = styled.div`
  background-image: url('./Image/header.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  filter: blur(4px);
`
export const Header_text = styled.div`
  /* position: absolute; */
  position: relative;
  top: -800px;
  /* display: flex; */
  margin: auto;
  /* width: 500px; */
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width: 991px) {
    top: -700px;
  }
`
export const Header_logo = styled.div`
  width: 70px;
  height: 90px;
  display: flex;
  margin: auto;
  border: 5px solid yellow;
`
export const Header_p = styled.p`
  margin: 0rem 20rem;
  padding: 20px 80px;
  font-size: 1.5rem;

  @media (max-width: 991px) {
    margin: 0rem 0rem;
    font-size: 1.3rem;
    letter-spacing: 1px;
    word-spacing: 3px;
    padding: 50px 30px;
  }
`
