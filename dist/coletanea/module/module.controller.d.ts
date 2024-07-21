import { ColetaneaDTO } from '../coletanea/coletanea.dto';
export declare class ModuleController {
    private readonly moduleService;
    constructor(moduleService: ModuleService);
    create(data: ColetaneaDTO): Promise<any>;
}
