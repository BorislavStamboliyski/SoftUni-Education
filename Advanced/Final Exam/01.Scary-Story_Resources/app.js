window.addEventListener("load", solve);

function solve() {
  let fName = document.getElementById('first-name');
  let lName = document.getElementById('last-name');
  let age = document.getElementById('age');
  let storyTitle = document.getElementById('story-title');
  let genre = document.getElementById('genre');
  let storyText = document.getElementById('story');
  let publishBtn = document.getElementById('form-btn');
  publishBtn.addEventListener('click', ()=>{
      if(fName.value !=='' &&
      lName.value !== '' &&
      age.value !== '' &&
      storyTitle.value !== '' &&
      storyText.value !== '') {
          let ul = document.getElementById('preview-list');
          let li = document.createElement('li');
          let article = document.createElement('article');
          let h4 = document.createElement('h4');
          let pAge = document.createElement('p');
          let pTitle = document.createElement('p');
          let pGenre = document.createElement('p');
          let pText = document.createElement('p');
          let saveBTN = document.createElement('button');
          saveBTN.setAttribute('class', 'save-btn');
          saveBTN.textContent = 'Save Story';
          let editBTN = document.createElement('button');
          editBTN.setAttribute('class', 'edit-btn');
          editBTN.textContent = 'Edit Story';
          let deleteBTN = document.createElement('button');
          deleteBTN.setAttribute('class', 'delete-btn');
          deleteBTN.textContent = 'Delete Story';
          let firstName = fName.value;
          let lastName = lName.value;
          let newAge = age.value;
          let titleStory = storyTitle.value;
          let oldgenre = genre.value
          h4.textContent = `Name: ${firstName} ${lastName}`;
          pAge.textContent = `Age: ${newAge}`;
          pTitle.textContent = `Title: ${titleStory}`;
          pGenre.textContent = `Genre: ${oldgenre}`;
          pText.textContent = storyText.value;
          article.appendChild(h4);
          article.appendChild(pAge);
          article.appendChild(pTitle);
          article.appendChild(pGenre);
          article.appendChild(pText);
          li.appendChild(article);
          li.appendChild(saveBTN);
          li.appendChild(editBTN);
          li.appendChild(deleteBTN);
          ul.appendChild(li);
          fName.value = '';
          lName.value = '';
          age.value = '';
          storyTitle.value = '';
          storyText.value = '';
          publishBtn.disabled = true;
          editBTN.disabled = false;
          saveBTN.disabled = false;
          deleteBTN.disabled = false;
          editBTN.addEventListener('click', ()=>{
            fName.value = firstName;
            lName.value = lastName;
            age.value = newAge;
            storyTitle.value = titleStory;
            genre.value = oldgenre;
            storyText.value = pText.textContent;
            editBTN.disabled = true;
            saveBTN.disabled = true;
           deleteBTN.disabled = true;
           publishBtn.disabled = false;
           ul.removeChild(li);
          });
          deleteBTN.addEventListener('click', ()=>{
            publishBtn.disabled = false;
            ul.removeChild(li);
          });
          saveBTN.addEventListener('click', ()=>{
            let div = document.getElementById('main');
            div.innerHTML = '<h1>Your scary story is saved!</h1';
          })
      }
  })
}
