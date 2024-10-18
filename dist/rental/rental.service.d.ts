import { Repository } from 'typeorm';
import { CreateRentalDto, QueryRentalDto } from '@rental/dto';
import { Rental, Return } from '@rental/entities';
export declare class RentalService {
    private readonly rentalRepository;
    private readonly returnRepository;
    private readonly logger;
    constructor(rentalRepository: Repository<Rental>, returnRepository: Repository<Return>);
    create(createRentalDto: CreateRentalDto): Promise<Rental>;
    findOne({ book_id, user_id }: QueryRentalDto): Promise<Rental | null>;
    remove(rental_id: string): Promise<boolean>;
}
