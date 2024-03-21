import notesPNG from '../assets/notes.png';
import bannerPNG from '../assets/banner-image.png';
import renderProjects from '../modules/renderProjects.js';

export default function homeContent() {
    const hero = document.createElement('div');
    const heroTitle = document.createElement('h1');
    const slogan = document.createElement('p');
    const heroImage = new Image();
    const bannerImage = new Image();
    const banner = document.createElement('div')
    const userName = document.createElement('h1')
    const getStartedBtn = document.createElement('button');
    const usernameModal = document.createElement('dialog');

    bannerImage.src = bannerPNG;
    heroImage.src = notesPNG;
    banner.className = 'banner';
    userName.className = 'greeting';
    usernameModal.className = 'user-modal';
    hero.className = 'hero';
    getStartedBtn.textContent = 'Add Notes';
    heroTitle.textContent = 'Task-O\'-Matic';
    slogan.textContent = 'Effortless Note-taking, Anytime, Anywhere with Task-O\'-Matic';
    document.body.append(usernameModal);

    getStartedBtn.addEventListener('click', renderProjects);
    

    function checkUsername() { //on initial page load, this function is called
        if (!localStorage.getItem('username')) { //then checks if a username already exists in local storage, if not
        getNameModal(); //calls the getNameModal function to get an input from the user
        } else { // if a username already exists, set the username text content to a greeting
            userName.textContent = `Hello, ${localStorage.getItem('username')}, let's get started!`;
        }
    }

    function getNameModal() { 
        usernameModal.showModal();
        const usernameInput = document.createElement('input');
        const confirmBtn = document.createElement('button');

        confirmBtn.textContent = 'Confirm';

        confirmBtn.addEventListener('click', (event) => {
            event.preventDefault();
            const username = usernameInput.value

            if (username.trim() !== '') {
                localStorage.setItem('username', username); //after setting the username in the local storage,
                usernameModal.close();
            } else {
                alert('Please enter a username.');
            }

            checkUsername(); //call the checkUsername again to display the userName textContent with the user's name
        })

        usernameModal.append(usernameInput, confirmBtn)
    }

    checkUsername();
    banner.append(userName, getStartedBtn, bannerImage)
    hero.append(banner, heroTitle, slogan, heroImage)

    return hero;
}