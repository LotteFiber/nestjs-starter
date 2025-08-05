import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LoggerService } from './core/logger/logger.service';

@Injectable()
export class AppService {
  private context = 'AppService';
  constructor(
    private readonly configService: ConfigService,
    private readonly logger: LoggerService,
  ) {}

  getHello(): string {
    const environmentVariable = this.configService.get<string>('environment');
    console.log(`Current environment: ${environmentVariable}`);
    this.logger.log('calling log from inside getHello method', this.context, {
      userId: 123,
      isPremium: true,
    });
    return 'Hello World!';
  }
}
