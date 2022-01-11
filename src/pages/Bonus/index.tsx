/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';

import { submitSelectedRating } from '../../api/api';
import { Logo, Volume } from '../../assets/images';
import { formatNumber } from '../../services/formatNumber';

const Bonus = () => {
  const [count, setCount] = useState(0);
  const [ratingCount, setRatingCount] = useState(3904);

  const onHandleStar = (e: React.MouseEvent<HTMLInputElement>) => {
    if (count === 0) {
      setCount((prev) => prev + 1);
      const { value } = e.currentTarget;

      // const response = submitSelectedRating(+value);
      setRatingCount((prev) => prev + 1);
      alert('You have successfully voted, thank you!');
    }
  };

  return (
    <div className='page__bonus bonus'>
      <div className='bonus__container _container'>
        <div className='bonus__card'>
          <div className='bonus__wrapper'>
            <div className='bonus__logo logo-bonus'>
              <div className='logo-bonus__top'>
                <img src={Volume} alt='Volume icon' />
                <h2 className='logo-bonus__top-choice'>OUR TOP CHOICE</h2>
              </div>
              <img src={Logo} className='logo-bonus__image' alt='logo' />
            </div>
            <div className='bonus__info info-bonus'>
              <h3 className='info-bonus__title'>Welcome Bonus</h3>
              <p className='info-bonus__text'>
                {window.innerWidth >= 480 ? (
                  <>
                    Deposit £10 <br />
                    Get up to 500 Free Spins
                  </>
                ) : (
                  <>
                    Up to £25 <br />
                    New Player Bonus
                  </>
                )}
              </p>
              <strong className='info-bonus__plat-safe'>
                18+. Play Safe. Opt in required.
              </strong>
            </div>
            <div className='bonus__rating rating-bonus'>
              <div className='rating-bonus__wrapper'>
                <h3 className='rating-bonus__title'>Please vote!</h3>
                <form className='rating-bonus__form form-rating'>
                  <div className='form-rating__list'>
                    <input
                      id='rating-bonus__5'
                      type='radio'
                      className='form-rating__star'
                      name='rating-bonus'
                      value='5'
                      onClick={onHandleStar}
                      disabled={count !== 0}
                      defaultChecked={window.innerWidth <= 480}
                    />
                    <label
                      htmlFor='rating-bonus__5'
                      className='form-rating__label'
                    />
                    <input
                      id='rating-bonus__4'
                      type='radio'
                      className='form-rating__star'
                      name='rating-bonus'
                      value='4'
                      onClick={onHandleStar}
                      disabled={count !== 0}
                      defaultChecked={window.innerWidth >= 480}
                    />
                    <label
                      htmlFor='rating-bonus__4'
                      className='form-rating__label'
                    />
                    <input
                      id='rating-bonus__3'
                      type='radio'
                      className='form-rating__star'
                      name='rating-bonus'
                      value='3'
                      onClick={onHandleStar}
                      disabled={count !== 0}
                    />
                    <label
                      htmlFor='rating-bonus__3'
                      className='form-rating__label'
                    />
                    <input
                      id='rating-bonus__2'
                      type='radio'
                      className='form-rating__star'
                      name='rating-bonus'
                      value='2'
                      onClick={onHandleStar}
                      disabled={count !== 0}
                    />
                    <label
                      htmlFor='rating-bonus__2'
                      className='form-rating__label'
                    />
                    <input
                      id='rating-bonus__1'
                      type='radio'
                      className='form-rating__star'
                      name='rating-bonus'
                      value='1'
                      onClick={onHandleStar}
                      disabled={count !== 0}
                    />
                    <label
                      htmlFor='rating-bonus__1'
                      className='form-rating__label'
                    />
                  </div>
                </form>
                <strong className='rating-bonus__rated'>
                  Rated by ({formatNumber(ratingCount)})
                </strong>
              </div>
              <div className='rating-bonus__grade'>
                <h2 className='grade-bonus__number'>
                  {window.innerWidth >= 480 ? <>9.9</> : <>9.7</>}
                </h2>
              </div>
            </div>
            <div className='bonus__actions actions-bonus'>
              <a
                href='/#'
                target='_blank'
                rel='noreferrer'
                className='actions-bonus__btn actions-bonus__btn--darkblue btn'
              >
                Get Bonus
              </a>
              <a
                href='/#'
                target='_blank'
                rel='noreferrer'
                className='actions-bonus__link'
              >
                Visit William Hill
                <svg
                  width='6'
                  height='11'
                  viewBox='0 0 6 11'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M1.12075 1.10349C0.970817 1.25476 0.958095 1.51439 1.09167 1.68304L1.63597 1.1362C1.50148 0.967542 1.27068 0.953231 1.12075 1.10349ZM4.98529 5.16231L1.71415 1.07385L1.71405 1.07372C1.54325 0.85966 1.24307 0.839331 1.04996 1.03285L1.04972 1.03309C0.863452 1.22104 0.84893 1.53762 1.01328 1.74513L1.01315 1.74523L1.01696 1.74951L1.01705 1.74961L4.01856 5.49974L1.0157 9.25156C1.01565 9.25162 1.0156 9.25168 1.01555 9.25175C0.849054 9.45808 0.861399 9.77478 1.04756 9.964C1.23871 10.1592 1.538 10.1425 1.71045 9.93002L1.7107 9.92973L1.71081 9.92982L1.71405 9.92576L4.98529 5.83717L4.98567 5.8367C5.06691 5.73389 5.10763 5.5999 5.09786 5.46447C5.09115 5.35479 5.05272 5.24844 4.98595 5.16314L4.98595 5.16314L4.98529 5.16231Z'
                    fill='#01247E'
                    stroke='#01247E'
                    strokeWidth='0.2'
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bonus;
