import { NestMiddleware } from '@nestjs/common';
import { ApiStrategy } from './api.strategy';
export declare class ApiMiddleware implements NestMiddleware {
    private apiKeyStrategy;
    private readonly logger;
    constructor(apiKeyStrategy: ApiStrategy);
    use(req: Request, res: Response, next: () => void): void;
}
