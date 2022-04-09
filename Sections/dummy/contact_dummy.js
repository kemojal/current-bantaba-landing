import React from 'react';
import styled from 'styled-components';
import { Img } from '../components/Img';
import { NavBar } from '../Sections/NavBar';

const ContactContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;
  padding-top: 94px;
  .contact-m-title {
    font-family: var(--font-family-noto_sans);
    font-size: var(--font-size-xxxl);
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 38px;
    text-align: left;
    width: 100%;
    font-size: 28px;
  }

  .illustration-container {
    width: 100%;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .illustration {
    position: relative;
    width: 216px;
    height: 213px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    padding: 10px 0;
  }
  input[type='text'] {
    width: 100%;
    padding: 10px 10px;
    margin: 4px;
    max-height: 53px;
    margin: 6px 0;
    background-color: var(--alabaster);
    border-radius: 4.5px;
    border: 1px solid var(--geyser);
  }
  input[type='submit'] {
    width: 100%;
    padding: 15px 10px;
    margin: 4px;
    margin-top: 8px;
    border: none;
    background-color: #009743;
    border-radius: 5px;

    color: #e8fcf1;
    font-family: var(--font-family-noto_sans);
    font-size: var(--font-size-m);
    font-style: normal;
    font-weight: 400;
  }
  textarea {
    width: 100%;
    margin: 12px 0;
    background-color: var(--alabaster);
    border-radius: 4.5px;
    border: 1px solid var(--geyser);
    min-height: 104px;
    padding: 10px 10px;
  }
`;
function Contact({ lang }) {
  return (
    <ContactContainer>
      <h1 className='contact-m-title'>About Us</h1>
      <div className='illustration-container'>
        <div className='illustration'>
          <Img
            src={'illustration.svg'}
            alt='logo'
            layout='fill'
            objectFit='contain'
          />
        </div>
      </div>
      <form>
        <input
          type='text'
          className='notosans-normal-chicago-18px name'
          placeholder='name'
        />
        <input
          type='text'
          className='notosans-normal-chicago-18px name'
          placeholder='email'
        />
        <textarea
          type='text'
          className='notosans-normal-chicago-18px name'
          placeholder='message'
        />
        <input
          value='Send'
          type='submit'
          className='notosans-normal-chicago-18px'
        />
      </form>
      <NavBar currentlan={lan} />
    </ContactContainer>
  );
}

export default Contact;
