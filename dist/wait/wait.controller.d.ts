import { WaitService } from '@wait/wait.service';
import { CreateWaitDto, QueryWaitDto } from '@wait/dto';
import { Wait } from '@wait/entities';
export declare class WaitController {
    private readonly waitService;
    constructor(waitService: WaitService);
    createWait(createWaitDto: CreateWaitDto): Promise<Wait>;
    findWaitAll(query: QueryWaitDto): Promise<Wait[]>;
    removeWait(wait_id: string): Promise<boolean>;
}
