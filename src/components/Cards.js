import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h5>Board 2020</h5>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images-copy/board-2020/Carleen.jpg'
              text='Carleen Li'
              label='Co-President'
              path='/services'
            />
            <CardItem
              src='images-copy/board-2020/Chen.jpg'
              text='Chen Meng'
              label='Co-President'
              path='/services'
            />
            <CardItem
                src='images-copy/board-2020/Jason.jpg'
                text='Tae Kwang(Jason) Chung'
                label='VP Finance'
                path='/services'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images-copy/board-2020/Pawan.jpg'
              text='Pawan Paleja'
              label='VP External'
              path='/services'
          />
          <CardItem
              src='images-copy/board-2020/Nour.jpg'
              text='Nour Yehia'
              label='VP Internal'
              path='/services'
          />
            <CardItem
                src='images-copy/board-2020/Yuling.jpg'
                text='Yuling Shi'
                label='Pro-Dev Chair'
                path='/board'
            />
            <CardItem
                src='images-copy/board-2020/Eric.jpg'
                text='Eirc Kang'
                label='Pro-Dev Chair'
                path='/board'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
                src='images-copy/board-2020/Dennis.jpg'
                text='Dennis Luc'
                label='PR Chair'
                path='/services'
            />
            <CardItem
              src='images-copy/board-2020/Anshul.jpg'
              text='Anshul Singh'
              label='Projects Chair'
              path='/board'
            />
            <CardItem
                src='images-copy/board-2020/Yuzi.jpg'
                text='Yuzi LYu'
                label='Projects Chair'
                path='/board'
            />
            <CardItem
                src='images-copy/board-2020/Eunice.jpg'
                text='Eunice Lin'
                label='Design Chair'
                path='/board'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
