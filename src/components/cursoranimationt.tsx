
import AnimatedCursor from 'react-animated-cursor';
import '../App.css';  // Create a CSS file for custom styling

const CursorAnimation = () => {
  return (
    <div className="cursor-container">
    <AnimatedCursor
      innerSize={8}
      outerSize={25}
      innerScale={1}
      outerScale={1.3}
      outerAlpha={0}
      innerStyle={{ backgroundColor: '#44BBA2', }}
      outerStyle={{ border: '1px solid #44BBA2', }}
      showSystemCursor={true}
    />

    </div>
  );
};

export default CursorAnimation;
