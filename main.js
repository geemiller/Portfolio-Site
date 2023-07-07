let download = document.getElementById("CV");
let CVPath = 'GeorgiaMillerCVJuly23.pdf';

download.addEventListener('click', () => {
    let fileName = getFileName(CVPath);
    saveAs(CVPath, fileName);
});

function getFileName(str) {
    return str.substring(str.lastIndexOf('/') + 1);
}

function createStar() {
    const star = document.createElement("div");
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 5 + 2}s`; 
    return star;
  }
  
  const numStars = 70; 
  const starsContainers = document.querySelectorAll("#stars, #stars2, #stars3");
  
  starsContainers.forEach((container) => {
    for (let i = 0; i < numStars; i++) {
      const star = createStar();
      container.appendChild(star);
    }
  });
  