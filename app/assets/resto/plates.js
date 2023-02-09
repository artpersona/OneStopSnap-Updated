const carouselImages = (imageName) => {
    let image = null;
    
    switch (imageName) {
      case "plate1":
        image = require("./plate1.png");
        break;
      case "plate2":
        image = require("./plate2.png");
        break;
      case "plate3":
        image = require("./plate3.png");
        break;
      case "plate4":
        image = require("./plate4.png");
        break;
    }
  
    return image;
  };
  
  export default carouselImages;
  