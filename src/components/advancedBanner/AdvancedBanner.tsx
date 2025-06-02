import { ParallaxBanner } from "react-scroll-parallax";
import type { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types"; // type from the library
import backgroundImg from "../../assets/banner-background.jpg";
import foregroundImg from "../../assets/banner-foreground.png";

export const AdvancedBannerTop = () => {
  const background: BannerLayer = {
    image: backgroundImg,
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true
  };

  const headline: BannerLayer = {
    translateY: [0, 30],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="inset center">
        <h1 className="headline white">Hello World!</h1>
      </div>
    )
  };

  const foreground: BannerLayer = {
    image: foregroundImg,
    translateY: [0, 15],
    scale: [1, 1.1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true
  };

  const gradientOverlay: BannerLayer = {
    opacity: [0, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div className="gradient inset" />
  };

  return (
    <div className="main">
      <ParallaxBanner

        layers={[background, headline, foreground, gradientOverlay]}
        className="full"
      />
    </div>
  );
};
