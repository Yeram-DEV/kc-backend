import { CreateRentalDto, QueryRentalDto } from '@rental/dto';
import { Rental } from '@rental/entities';
import { RentalService } from '@rental/rental.service';
export declare class RentalController {
    private readonly rentalService;
    constructor(rentalService: RentalService);
    createRental(createRentalDto: CreateRentalDto): Promise<Rental>;
    findRentalOne(query: QueryRentalDto): Promise<Rental>;
    removeRental(rental_id: string): Promise<boolean>;
}
