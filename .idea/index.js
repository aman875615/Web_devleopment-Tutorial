function changeText(){
    const fpara = document.getElementById('fpara');         
    fpara.textContent = "This is my updated first HTML document.";
    // const fheading = document.getElementById('fheading');   
    // fheading.textContent = "Hello, Universe!";
}
fpara.addEventListener('click',changeText);
// fpara.removeEventListener('click',changeText);
  