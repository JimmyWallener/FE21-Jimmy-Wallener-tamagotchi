interface Animal {
  name: string;
  type: string;
}

export default class Tamagotchi {
  private happy: number;
  private hungry: number;
  private readonly type: Animal[];
  private hungerTimer: number;
  private happyTimer: number;
  private isAlive: boolean;
  private readonly startOfGame: number;
  private isPoopGone: boolean;
  private lastFeed: number;
  private lastPlay: number;

  constructor() {
    this.happy = 5;
    this.hungry = 5;
    this.type = [
      { name: 'chichi', type: 'sheep' },
      { name: 'chobitchi', type: 'chinchilla' },
      { name: 'doremitchi', type: 'chinchilla' },
      { name: 'doyakentchi', type: 'dog' },
      { name: 'furi', type: 'octopus' },
      { name: 'hanatarezotchi', type: 'teapot' },
      { name: 'kizunatchi', type: 'cat' },
      { name: 'makimo', type: 'hermitcrab' },
      { name: 'onsenmoguratchi', type: 'groundhog' },
      { name: 'rinsutchi', type: 'dog' },
      { name: 'sopratchi', type: 'chinchilla' },
      { name: 'taiyaki', type: 'fish' },
      { name: 'yumecantchi', type: 'sheep' },
    ];
    this.hungerTimer = setInterval(this.increaseHunger.bind(this), 25000);
    this.happyTimer = setInterval(this.lowerHappiness.bind(this), 25000);
    this.isAlive = true;
    this.isPoopGone = false;
    this.lastFeed = -1;
    this.lastPlay = -1;
  }
  feedPet(): void {
    const timer = performance.now();
    const diff = Math.round((timer - this.lastFeed) / 1000);

    if (this.happy === 0 || this.hungry === 10) {
      clearInterval(this.hungerTimer);
      this.isAlive = false;
    }
    if (this.lastFeed !== -1) {
      if (
        diff <= 10 &&
        this.happy >= 0 &&
        this.happy <= 10 &&
        this.hungry < 10
      ) {
        this.happy--;
        this.lastFeed = timer;
      }
    }
    if (this.hungry > 0 && this.hungry < 10) {
      this.hungry--;
      this.lastFeed = timer;
    }
  }
  playWithPet(): void {
    const timer = performance.now();
    const diff = Math.round((timer - this.lastPlay) / 1000);
    if (this.happy === 0 || this.hungry === 10) {
      clearInterval(this.hungerTimer);
      this.isAlive = false;
    }
    if (this.lastPlay !== -1) {
      if (
        diff <= 10 &&
        this.hungry <= 10 &&
        this.hungry >= 0 &&
        this.happy <= 10
      ) {
        this.hungry++;
        this.lastPlay = timer;
      }
    }
    if (this.happy > 0 && this.happy < 10) {
      this.happy++;
      this.lastPlay = timer;
    }
  }
  reset(): void {
    clearInterval(this.hungerTimer);
    clearInterval(this.happyTimer);
    this.isAlive = true;
    location.reload();
  }

  private lowerHappiness(): void {
    if (this.happy === 0) {
      this.isAlive = false;
      clearInterval(this.hungerTimer);
      clearInterval(this.happyTimer);
    } else {
      this.happy--;
    }
  }
  private increaseHunger(): void {
    if (this.hungry === 10) {
      this.isAlive = false;
      clearInterval(this.hungerTimer);
      clearInterval(this.happyTimer);
    } else {
      this.hungry++;
    }
  }
  get happiness(): number {
    return this.happy;
  }
  get hunger(): number {
    return this.hungry;
  }
  get pet(): Animal {
    return this.type[Math.round(Math.random() * 12)];
  }
  get isPetAlive(): boolean {
    return this.isAlive;
  }
  lowerJoy(): void {
    this.happy--;
  }
  get isPoopgone(): boolean {
    return this.isPoopGone;
  }
  set PoopBool(bool: boolean) {
    this.isPoopGone = bool;
  }
}
