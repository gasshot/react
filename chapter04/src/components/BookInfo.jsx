import React from 'react';
import '../BookInfo.css';

function BookInfo({ bookName, authorName, publisher, publishDate, discount, bookPrice, description, imgSrc }) {
    const discounted = bookPrice * ((100 - discount) / 100);

    return (
        <>
            <div className="bookRow">
                <img src={imgSrc} alt="" className='bookImg' />
                <div className='infoBody'>
                    <div className='bookName'>
                        {/* 괴테는 모든 것을 말했다 */}
                        {bookName}
                    </div>
                    <span className='authorName'> {authorName}</span>
                    <span> · </span>
                    <span className='publisher'>{publisher}</span>
                    <span> · </span>
                    <span className='publishDate'>{publishDate}</span>
                    <div>
                        {/* 15,300원 */}
                        <span className='discount'>{discount}% </span>
                        <span style={{ fontWeight: 'bold' }}>{discounted.toLocaleString()}원 </span>
                        <span className='originPrice'>{bookPrice.toLocaleString()}원</span>
                    </div>
                    <div>
                        {description}...
                    </div>
                </div>

                <div className='deliveryInfo'>
                    <div>당일배송</div>
                    <div>오늘(12/29,월)</div>
                    <div>도착</div>
                </div>

                <div className='buttonGroup'>
                    <button id='cart'>장바구니</button>
                    <button id='purchase'>바로구매</button>
                </div>

            </div>
            <hr />
        </>
    );
}

export default BookInfo;
