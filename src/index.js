import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';



// const img = React.createElement(
//   'img', 
//   { 
//     src: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg', 
//     alt:'#', 
//     title: 'qweqweqwe',
//     width: 600
//   }
// )
// const name = React.createElement('h2', {class: 'test'}, 'name');
// const price = React.createElement('p', null, 'Price: 100500$');
// const button = React.createElement('button', {type : 'button'}, 'buy');
// // const link = React.createElement('a', {href : '#'}, name);
// const link = React.createElement('a', {href : '#'}, 'Some text');

// const linkShit = (<a href='#'>some text jsx</a>);

// const product = React.createElement('div', {children: [img, link, price, button] });
// console.log(product);

// const price = 10050011;

// const prodNew = (
//   <div className="test">
//       <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" alt="#" width='600'/>
//       <h2>name {5+2}</h2>
//       <p>Price: {price}$</p>
//       <button>buy</button>
//   </div>
// )

// function Prod({url,name, price}) {
//   return (
//     <div className="test">
//       <img src={url} alt="#" width='600'/>
//       <h2>{name}</h2>
//       <p>Price: {price}$</p>
//       <button>buy</button>
//     </div>
//   );
// }

// function App() {
//   return (
//     <>
//       <h1>Best</h1>
//       <Prod name="namefff" price={20} url="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"/>
//       <Prod name="nameNEW" price={2000000} url="https://thumbs.dreamstime.com/b/%D0%B1%D0%B0%D0%B1%D0%BE%D1%87%D0%BA%D0%B0-%D0%BC%D0%BE%D0%BD%D0%B0%D1%80%D1%85%D0%B0-%D0%BE%D1%80%D0%B0%D0%BD%D0%B6%D0%B5%D0%B2%D0%B0%D1%8F-%D0%B8-%D1%8F%D1%80%D0%BA%D0%B8%D0%B5-%D1%86%D0%B2%D0%B5%D1%82%D1%8B-%D0%BB%D0%B5%D1%82%D0%BE%D0%BC-%D0%BD%D0%B0-%D1%84%D0%BE%D0%BD%D0%B5-%D0%BB%D0%B8%D1%81%D1%82%D0%B2%D1%8B-%D0%B2-%D1%81%D0%B0%D0%B4%D1%83-%D1%84%D0%B5%D1%8F-167030287.jpg"/>
//     </>
//   )
// }
ReactDOM.render(<App/>, document.querySelector('#root'))
// ReactDOM.render(<Prod/>, document.querySelector('#root'))
// ReactDOM.render(prodNew, document.querySelector('#root'))