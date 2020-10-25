import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { Application } from 'express';
import { MoviesController } from './controlers/movies';
import './util/module-alias';

export class SetupServer extends Server {
  constructor(private port = 3100) {
    super();
  }

  public init(): void {
    this.setupExpress();
    this.setupControllers();
  }

  private setupExpress(): void {
    this.app.use(bodyParser.json());
  }

  private setupControllers(): void {
    const moviesController = new MoviesController();
    this.addControllers([moviesController]);
  }

  public getApp(): Application {
    return this.app;
  }
}
