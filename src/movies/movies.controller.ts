import { Controller, Get } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll() {
        return "this will Return All Movies";
    }
}
