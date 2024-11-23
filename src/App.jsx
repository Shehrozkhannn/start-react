import { useState } from 'react';
import './App.css';
import Pattern from './components/Pattern';

function App() {

  const [color, setColor] = useState("olive");
  
const buttonColors = [
  { name: "Red", backgroundColor: "red" },
  { name: "Blue", backgroundColor: "blue" },
  { name: "Green", backgroundColor: "green" },
  { name: "Pink", backgroundColor: "pink" },
];

  return (
    <>
    {/* <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          {
            buttonColors.map((btn,index)=> (
              <button key={index} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{background: btn.backgroundColor}}
              onClick={() => setColor(btn.backgroundColor)}
              >
                  {btn.name}
              </button>
            ))
          }
        </div>
      </div>
    </div> */}
    <Pattern/>
    </>
  );
}

export default App;
