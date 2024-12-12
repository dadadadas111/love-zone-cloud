import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/about')
  getAbout(): string {
    return 'About page';
  }

  @Get('/health')
  getHealth(): string {
    return 'OK';
  }

  @Get('/send-email')
  async sendEmailTest() {
    return await this.appService.sendEmailTest();
  }

  @Post('/send-stars')
  async sendStars() {
    return await this.appService.sendStars();
  }

  @Get('/get-stars')
  async getStars() {
    const stars = await this.appService.getStars();
    return { stars: stars || 0 };
  }
}
