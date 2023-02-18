import './App.css';
import GallaryFooter from './components/GallaryFooter';
import Header from './components/Header';
import Body from './components/Body';
import imageData from './components/ImageData';

function App() {
  return (
    <div>
      {/* adding header component */}
      <Header/> 

      {/* calling Body component */}
      <div id='Body'>
        {imageData.map((image) => (
          <Body id={image.id} img={image.img} />
        ))}
      </div>

      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
