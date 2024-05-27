import { Injectable } from '@nestjs/common';
import { Human } from '../interfaces/human.interfaces';

@Injectable()
export class HumanService {
  private humans: Human[] = [];

    getHumans(): Human[] {
        return this.humans;
    }

    addHuman(newHuman: Human): Human {
        this.humans.push(newHuman);
        return newHuman;
    }

    getAliveHumans(): Human[] {
        return this.humans.filter(human => !human.isDead);
    }

    getOneHuman(email: string): Human {
      return this.humans.filter(human => human.email === email)[0];
    }
    
}
