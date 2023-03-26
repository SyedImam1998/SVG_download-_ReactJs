import React, { useRef, useState } from 'react';
import { saveSvgAsPng } from 'save-svg-as-png';

function SVGToPNG1() {
  const svgRef = useRef(null);
//   const [pngDataUri, setPngDataUri] = useState(null);

  const downloadPNG = () => {
    console.log("inside downnloadPNG function")
    

      saveSvgAsPng(svgRef.current, 'svg-to-png.png', { scale: 2 })
      
        .catch(function (error) {
          console.error('Oops, something went wrong!', error);
        });
  };

  return (
    <div>
      <svg ref={svgRef} width="100" height="100">
        <rect x="10" y="10" width="80" height="80" fill="blue" />
      </svg>
      <button onClick={downloadPNG}>Download PNG</button>
    </div>
  );
}

export default SVGToPNG1;
