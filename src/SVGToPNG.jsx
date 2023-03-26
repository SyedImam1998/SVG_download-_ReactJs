import React from "react";
import html2canvas from "html2canvas";

class SVGToPNG extends React.Component {

  downloadPNG = () => {
    // Get the SVG element
    const svgElement = document.getElementById("svg");

    // Add CSS to make the SVG element visible and on top of other elements
    svgElement.style.position = "absolute";
    svgElement.style.top = "0";
    svgElement.style.left = "0";
    svgElement.style.zIndex = "9999";

    // Convert the SVG element to a canvas element
    const canvas = document.createElement("canvas");
    canvas.width = svgElement.width.baseVal.value;
    canvas.height = svgElement.height.baseVal.value;

    const ctx = canvas.getContext('2d');

    // Render the SVG element onto the canvas
    const data = new XMLSerializer().serializeToString(svgElement);
    const img = new Image();
    img.src = 'data:image/svg+xml;base64,' + btoa(data);
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      // Convert the canvas element to a PNG image
      html2canvas(canvas).then((canvas) => {
        // Create a link to download the PNG image
        const link = document.createElement("a");
        link.download = "image.png";
        link.href = canvas.toDataURL("image/png");

        // Click the link to download the PNG image
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Remove the CSS added earlier
        svgElement.style.position = "";
        svgElement.style.top = "";
        svgElement.style.left = "";
        svgElement.style.zIndex = "";
      });
    };
  };

  down=()=>{
    const scr= document.getElementById("svg");
    html2canvas(scr).then((canvas)=>{
        const bas=canvas.toDataURL("image/png");
        var a=document.createElement('a');
        a.setAttribute("href",bas);
        a.setAttribute("download","myimage.png");
        a.click();
        a.remove();
    })
  }
  render() {
    return (
      <div>
        <svg id="svg" width="100" height="100">
          <circle cx="50" cy="50" r="40" fill="red" />
        </svg>
        <button onClick={this.downloadPNG}>Download as PNG</button>

        <div id="imam" style={{width:"max-content",border:"1px solid red"}}>hello imam</div>
        <button onClick={this.down}>Dimam</button>
      </div>
    );
  }
}

export default SVGToPNG;
