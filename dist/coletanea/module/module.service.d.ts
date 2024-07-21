import { PrismaService } from '../../prisma.service';
import { ColetaneaDTO } from '../coletanea.dto';
export declare class ModuleService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: ColetaneaDTO): Promise<any>;
}
