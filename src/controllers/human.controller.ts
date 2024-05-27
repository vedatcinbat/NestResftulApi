import {Body, Controller, Get, Post} from '@nestjs/common';
import {HumanService} from '../services/human.service';
import { Human } from '../interfaces/human.interfaces';

@Controller('humans')
export class HumanController {
    constructor(private humanService: HumanService) {}

    @Get('')
    getHumans(): Human[] {
        return this.humanService.getHumans();
    }

    @Get('/alive-humans')
    getAliveHumans(): Human[] {
        return this.humanService.getAliveHumans();
    }

    @Get('/human')
    getOneHuman(@Body() email: string) : Human {
        return this.humanService.getOneHuman(email);
    }

    @Post('/add-human')
    addHuman(@Body() createHuman: Human): string {
        this.humanService.addHuman(createHuman);
        return 'Human added successfully';
    }
}