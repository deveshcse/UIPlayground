import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [images, setImages] = useState([]);

const fetchImages = async () => {
  const url = 'https://www.reddit.com/r/aww/top/.json?t=all';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const result = await response.json();
    const data = result?.data?.children ?? [];
    const list = data.filter(
      (item) => item.data.url_overridden_by_dest?.includes('.jpg')
    );
    const imageList = list.map((item) => item.data.url_overridden_by_dest);
    setImages(imageList);
  } catch (error) {
    console.error('Error fetching images:', error);
  }
};


  useEffect(()=>{
    fetchImages();
    console.log(images);
    
  }, []);

  return (
    <div className="h-screen flex items-center justify-center gap-10 bg-slate-600" >
      
      <button className="bg-red-600 border-2 border-black rounded-lg text-3xl p-2 font-bold">Left</button>
      <img src="" alt="image is not available" />
      <button className="bg-red-600 border-2 border-black rounded-lg text-3xl p-2 font-bold">Right</button>
    </div>
  );
}

export default App;
