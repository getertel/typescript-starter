import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service'; // Certifique-se de que o caminho está correto
import { ColetaneaDTO } from '../coletanea.dto';

@Injectable()
export class ModuleService {
  constructor(private prisma: PrismaService) {}

  async create(data: ColetaneaDTO) {
    const coletaneaExists = await this.prisma.coletanea.findFirst({
      where: {
        bar_code: data.bar_code,
      },
    });

    if (coletaneaExists) {
      throw new Error('Coletanea already exists');
    }

    const coletanea = await this.prisma.coletanea.create({
      data,
    });

    return coletanea;
  }
}
