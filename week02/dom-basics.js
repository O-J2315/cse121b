const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement('img');
newImage.setAttribute('src','https://picsum.photos/200');
newImage.setAttribute('alt',"Random Image");
document.body.appendChild(newImage);


const newh3 =  document.createElement('h3');
newh3.textContent = 'Relief Society';

const newSection = document.createElement('section');
newSection.innerHTML = "<h2>CSE 121b</h2><p>Welcome to Javascript language</p>";
newSection.appendChild(newh3);
document.body.appendChild(newSection);

