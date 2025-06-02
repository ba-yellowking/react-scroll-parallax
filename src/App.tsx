import './App.css';
import { ParallaxProvider } from "react-scroll-parallax";
import { AdvancedBannerTop } from "./components/advancedBanner/AdvancedBanner.tsx";

function App() {

  return (
    // provider
    <ParallaxProvider>

      {/*parallax component*/}
      <AdvancedBannerTop />

      {/*content*/}
      <div className="center full">
        <h1 className="headline gray">Goodnight!</h1>
      </div>
    </ParallaxProvider>
  )
}

export default App;
