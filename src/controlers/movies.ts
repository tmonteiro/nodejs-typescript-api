import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller('api/movies')
export class MoviesController {
  @Get('')
  public getMovies(_: Request, res: Response): void {
    res.sendStatus(200);
  }
}
