import "./App.css";
import { useState, useEffect } from "react";
import CarousalImages from "./Components/CarousalImages";
function App() {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);

  const fetchImages = async () => {
    const url = "https://picsum.photos/v2/list"; //"https://www.reddit.com/r/aww/top/.json?t=all#";
    const response = await fetch(url);
    const result = await response.json();
    const data = result.map((item) => item.download_url);
    setImages(data);
  };

  useEffect(() => {
    fetchImages();
    // console.log(images);
  }, []);

  const handleClick = (direction)=> {
    console.log("current index", index);

    const lastIndex = images.length -1;
    if(direction==="left"){
      if(index===0){
        setIndex(lastIndex);
      }else{
        setIndex(index-1);
      }
    }
    if(direction==="right"){
      if(index === lastIndex){
        setIndex(0)
      }else{
        setIndex(index+1)
      }
    }

  }

  return (
    <div className="relative h-screen flex items-center justify-between">
      {/* Left Button */}
      <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-red-600 border-2 border-black rounded-lg text-3xl p-2 font-bold"
      onClick={()=> handleClick('left')}>
        {"<"}
      </button>
  
      {/* Image */}
      <img
        src={images[index]}
        alt="carousel image"
        className="w-full h-[100vh]"
      />
  
      {/* Right Button */}
      <button className="absolute right-4 top-1/2 transf(orm -translate-y-1/2 bg-red-600 border-2 border-black rounded-lg text-3xl p-2 font-bold"
      onClick={() => handleClick('right')}>
        {">"}
      </button>
    </div>
  );
  
}

export default App;

//h-screen flex items-center justify-center gap-10 bg-slate-600
