import { Repository } from 'typeorm';
import { CreateWaitDto, QueryWaitDto } from '@wait/dto';
import { Wait } from '@wait/entities';
export declare class WaitService {
    private readonly waitRepository;
    private readonly logger;
    constructor(waitRepository: Repository<Wait>);
    create(createWaitDto: CreateWaitDto): Promise<Wait>;
    findAll({ book_id, user_id }: QueryWaitDto): Promise<Wait[] | null>;
    remove(wait_id: string): Promise<boolean>;
}
