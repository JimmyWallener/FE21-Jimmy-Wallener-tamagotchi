import Tamagotchi from './Tamagotchi';

((): void => {
  const pet = new Tamagotchi();

  const populateStats = (): void => {
    const { name, type } = pet.pet;
    const setName = document.getElementById('name');
    const setHappiness = document.getElementById('happiness');
    const setHunger = document.getElementById('hunger');
    const setTamaImage = document.getElementById('tamaimg');
    const image = document.createElement('img');
    setName.innerHTML = `Name: ${name}<br /> Type: ${type} `;

    image.setAttribute('src', `./img/${name}.png`);
    image.setAttribute('alt', `${name}`);
    setTamaImage.append(image);

    const updateStats = (): void => {
      if (pet.isPetAlive === true) {
        setHappiness.innerHTML = `Happiness: ${pet.happiness}`;
        setHunger.innerHTML = `Hunger: ${pet.hunger}`;
      } else {
        setHappiness.innerHTML = `Happiness: Dead`;
        setHunger.innerHTML = `Hunger: Dead`;
        image.setAttribute('src', './img/skull.png');
        image.setAttribute('alt', 'Dead');
        clearInterval(refresh);
      }
    };
    const refresh = setInterval(updateStats, 500);

    const buttons = document.querySelectorAll('button');
    let addPopImage: number;
    buttons.forEach((button: HTMLButtonElement): void => {
      button.addEventListener('click', (btn: Event): void => {
        btn.preventDefault;

        switch (button.value) {
          case 'eat':
            pet.feedPet();
            addPopImage = setTimeout(addPoop, 1000);
            break;
          case 'play':
            pet.playWithPet();
            break;
          case 'scoop':
            scoopPoop();
            break;
          case 'restart':
            pet.reset();
            break;
          default:
            console.error('something went wrong');
        }
      });
    });

    const scoopPoop = (): void => {
      pet.PoopBool = true;
    };

    const addPoop = (): void => {
      pet.PoopBool = false;
      const poopImage = document.querySelector('.poopimage');
      poopImage.classList.toggle('hidden');

      const addOne = (): void => {
        const poopImage = document.querySelector('.poopimage');
        if (pet.isPoopgone) {
          clearTimeout(add);
          poopImage.classList.toggle('hidden');
        } else {
          pet.lowerJoy();

          poopImage.classList.toggle('hidden');
        }
      };
      const add = setTimeout(addOne, 3000);
    };
  };

  populateStats();
})();
