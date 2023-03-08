// import React, { useState } from "react";
// import axios from "axios";

// export default function App() {
//   const [data, setData] = useState({});
//   const [location, setLocation] = useState("");
  

//   const url = `https:api.openweathermap.org/data/2.5/weather?q=${location}&appid=48ecbf90c58ab76ae524c1bba5deb8bc`;

//   const searchLocation = (event) => {
//     if (event.key === "Enter") {
//       axios.get(url).then((response) => {
//         setData(response.data);
//         console.log(response.data);
//       });
//       setLocation("");
//       console.log(data);
//     }
//   };

//   return (
//     <div className="app">
//       <div className="search">
//         <input
//           value={location}
//           onChange={(event) => setLocation(event.target.value)}
//           onKeyPress={searchLocation}
//           placeholder="Введите название города!"
//           type="text"
//         />
//       </div>
//       <div className="container">
//         <div className="top">
//           <div className="location">
//             <p>{data.name}</p>
//           </div>
//           <div className="temp">
//             {data.main ? <h1>{data.main.temp.toFixed()}</h1> : null}
//           </div>
//           <div className="description">
//             {data.weather ? <p>{data.weather[0].description}</p> : null}
//           </div>
//         </div>

//         {data.name!== undefined &&(
//           <div className='bottom'>
//             <div className='feels'>
//               {data.main ?(
//                 <p className='bold'>{data.main.feels_like.toFixed()}C</p>
//               ):null}
//               <p> Чувствуется как</p>
//             </div>
//             <div className='humidity'>
//               {data.main ?<p className="bold">{data.main.humidity}%</p>:null}
//               <p> Влажность  </p>
//           </div>
//           <div className='wind'>
//             {data.wind?(
//               <p className='bold'>{data.wind.speed.toFixed()}м/с</p>
//             ):null}
//             <p> Скорость ветра</p>
//             </div>
//             </div>

//           )}
//       </div>
//     </div>
//   );
// }

// 6 домашнее задание 

// import React, { Component } from 'react';

// class MyComponent extends Component {
//   state = {
//     names: ['Арген', 'Максат', 'Жанылай']
//   }

//   render() {
//     const { names } = this.state;

//     return (
//       <ul>
//         {names.map((name, index) => (
//           <li key={index}>{name}</li>
//         ))}
//       </ul>
//     );
//   }
// }

// export default MyComponent;
import React, { useState } from "react";

function App() {
  const [Square, setSquare] = useState("red");

  const handleClick = (color) => {
    setSquare(color);
  };

  return (
    <div>
      {Square !== "green" && (
        <div
          className="green"
          onClick={() => handleClick("green")}
        ></div>
      )}
      {Square !== "red" && (
        <div
          className="red"
          onClick={() => handleClick("red")}
        ></div>
      )}

      {Square !== "blue" && (
        <div
        className="blue"
        onClick={() => handleClick("blue")}
      ></div>
      )}
    </div>
  );
}

export default App;