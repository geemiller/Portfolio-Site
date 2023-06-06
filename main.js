let download = document.getElementById("CV");
let CVPath = 'GeorgiaMillerCV.pdf';

download.addEventListener('click', () => {
    let fileName = getFileName(CVPath);
    saveAs(CVPath, fileName);
});

function getFileName(str) {
    return str.substring(str.lastIndexOf('/') + 1);
}