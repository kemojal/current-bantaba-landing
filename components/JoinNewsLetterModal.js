import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Img } from '../components/Img';
import { useSelector } from 'react-redux';

import Select from 'react-select';

const ModalContainer = styled.div`

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display:${({ modalState }) => (modalState ? 'block' : 'none')} ;
  z-index: 10;
  display: none;
  .main-modal {
    position: fixed;
    background: #ffffff;
    border-radius: 20px;
    width: 80%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1146px;
    height: 617px;
    display: flex;
    overflow: hidden;
  }
  .relative-container{
      width: 100%;
      height: 100%;
      position: relative;
      display: flex;
  }
  .left-modal {
    width: 50%;
    height: 100%;
    background: #dbf6dd;
    border-radius: 20px;
    display: flex;
    flex-direction: column; column;
    align-items: center;
    /* justify-content: center; */
    padding: 60px 50px;
  }
  .right-modal {
    width: 50%;
    height: 100%;
    background: white;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .illustration-wrapper {
    position: relative;
    width: 431.2px;
    height: 423.5px;
  }
  .modal-title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 140%;
    color: #011108;
  }
  .modal-normal-text {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: #5B615E;
    margin-top: 15px;
  }
  .modal-input-container{
      width: 100%;
      margin-top: 2.2rem;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px 0;
    align-self: stretch;
  }
  input[type='text'] {
    width: 100%;
    padding: 15px 20px;
    margin: 4px;
    max-height: 53px;
    margin: 10px 0;
    background-color: var(--alabaster);
    border-radius: 4.5px;
    border: 1px solid var(--geyser);
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    color: #01110805;
  }
  input[type='submit'] {
    width: 100%;
    padding: 15px 10px;
    margin: 4px;
    margin-top: 12px;
    border: none;
    background-color: #009743;
    border-radius: 5px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;

  }

  .input-select {
    border: 1px solid var(--geyser);
    width: 100%;
    border-radius: 5px;
    margin: 6px 0;
    height: 46px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    color: #009A36;
  }
  .form-step-two{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative: ;
      /* justify-content: center; */
  }
  .s2-illustration-absolute{
    width: 934px;
    height: 356.74px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .s2-illustration{
    width: 100%;
    height: auto;
    width: 934px;
    height: 356.74px;

    position: relative;
  }
  .s2-illustration-person{
    width: 313px;
    height: 344.74px;
    position: relative;
  }
  .s2-text{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 140%;
    color: #011108;
    z-index: 10;
    margin-top: 50px;
    width: 417px;
    text-align: center;
  }
  .close-btn{
      top: 30px;
      right: 30px;
      position: absolute;
      width: 42px;
      height: 42px;
      border-radius: 50%;
      border: 1px solid #CACED8;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      /* z-index: 90; */
  }
  .back-to-home-btn{
      cursor: pointer;
      background: #009743;
      border-radius: 5px;
      border: none;
      padding: 13px 41px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 30px;

  }
  .button-arrow{
      position: relative;
      width: 13px;
      height: 13px;
      
  }
  .btn-text{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    text-align: center;
    color: #FFFFFF;
    padding-left: 10px;

  }
  .close-img{
    position: relative;
    width: 14px;
    height: 14px;
  }
`;
const JoinNewsLetterModal = ({ handleClose, show }) => {
  const [formStage, setFormStage] = useState(2);
  const [modalState, setModalState] = useState(show ? true : false);

//   const showHideClassName = modalState
//     ? 'modal display-block'
//     : 'modal display-none';

  const { isNewsLetterModal } = useSelector((state) => state);
  const closemodal = () => {
    setModalState(false);
    alert('closed');
  };
  const options = [
    { value: 'Invest', label: 'Invest' },
    { value: 'Mentor', label: 'Mentor' },
    { value: 'Consult', label: 'Consult' },
  ];
  //   useEffect(() => {
  //     document.body.style.overflow = 'hidden';
  //     return () => (document.body.style.overflow = 'unset');
  //   }, []);
  //
  return (
    <ModalContainer modalState={modalState}>
      <div className='main-modal'>
        <div className='relative-container'>
          {formStage == 0 && (
            <>
              <div className='left-modal'>
                <p className='modal-title'>
                  Receive massages from the future. We only fill your inbox with
                  happiness.
                </p>
                <p className='modal-normal-text'>
                  Join our mailing list to get incredible news on the best
                  companies to invest in. We promise, we would only send you the
                  good stuff.
                </p>

                <div className='modal-input-container'>
                  <form>
                    <input type='text' className='name' placeholder='Name' />
                    <input
                      type='text'
                      className='name'
                      placeholder='Email Address'
                    />
                    <Select
                      options={options}
                      className='input-select'
                      placeholder='Category'
                    />
                    <input
                      type='submit'
                      value='Connect'
                      className='submit'
                      placeholder='messa'
                    />
                  </form>
                </div>
              </div>
              <div className='right-modal'>
                <div className='illustration-wrapper '>
                  <Img
                    src='modal-pic.svg'
                    alt='logo'
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
              </div>
            </>
          )}
          {formStage == 2 && (
            <>
              <div className='form-step-two'>
                <div className='s2-illustration-absolute'>
                  <div className='s2-illustration'>
                    <Img
                      src='s2-illustration.svg'
                      alt='logo'
                      layout='fill'
                      objectFit='cover'
                    />
                  </div>
                </div>
                <div className='s2-illustration-person'>
                  <Img
                    src='s2-illustration-person.svg'
                    alt='logo'
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
                <p className='s2-text'>
                  Thank you for your interest, we will be in touch soon.
                </p>
                <p> modal status {isNewsLetterModal}</p>
                <button onClick={closemodal} className='back-to-home-btn'>
                  <div className='button-arrow'>
                    <Img
                      src='back-arrow.svg'
                      alt='logo'
                      layout='fill'
                      objectFit='cover'
                    />
                  </div>

                  <span className='btn-text'>Back To Home</span>
                </button>
              </div>
            </>
          )}

          <div className='close-btn' onClick={closemodal}>
            <div className='close-img'>
              <Img src='close.svg' alt='logo' layout='fill' objectFit='cover' />
            </div>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default JoinNewsLetterModal;
