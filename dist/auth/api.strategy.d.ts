import { ConfigService } from '@nestjs/config';
export declare class ApiStrategy {
    private configService;
    constructor(configService: ConfigService);
    validate(req: Request): boolean;
}
