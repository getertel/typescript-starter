
//atualização em conjunto
// src/coletanea/module/module.module.ts
import { Module } from '@nestjs/common';
import { ModuleController } from './module.controller';
import { ColetaneaService } from './module.service';
import { ModuleService } from './module.service';
import { PrismaService } from '../../database/PrismaService';


@Module({
    controllers: [ModuleController],
    providers: [ModuleService, PrismaService],
    })
export class ModuleModule {}    