import Tamagotchi from './Tamagotchi';

((): void => {
  const pet = new Tamagotchi();

  const populateStats = (): void => {
    const { name, type } = pet.getPet();
    const setName = document.getElementById('name');
    const setHappiness = document.getElementById('happiness');
    const setHunger = document.getElementById('hunger');
    const setTamaImage = document.getElementById('tamaimg');
    const image: HTMLImageElement = document.createElement('img');
    setName.innerHTML = `Name: ${name}<br /> Type: ${type} `;

    image.src = new URL(`img/pets/${name}.png`, import.meta.url).href;
    image.setAttribute('alt', `${name}`);
    setTamaImage.append(image);

    const updateStats = (): void => {
      if (pet.isPetAlive() === true) {
        setHappiness.innerHTML = `Happiness: ${pet.getHappiness()}`;
        setHunger.innerHTML = `Hunger: ${pet.getHunger()}`;
      } else {
        setHappiness.innerHTML = `Happiness: Dead`;
        setHunger.innerHTML = `Hunger: Dead`;
        image.src = new URL('img/skull.png', import.meta.url).href;
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
      pet.setPoopBool(true);
    };

    const addPoop = (): void => {
      pet.setPoopBool(false);
      const poopImage = document.querySelector('.poopimage');
      poopImage.classList.toggle('hidden');

      const addOne = (): void => {
        const poopImage = document.querySelector('.poopimage');
        if (pet.isPoopgone()) {
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
