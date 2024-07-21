//atualização 21/7/24
// src/coletanea/module/module.controller.ts
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ColetaneaService } from './module.service';
import { ColetaneaDTO } from '../coletanea/coletanea.dto';

Controller('Module')
export class ModuleController {
  constructor(private readonly moduleService: ModuleService){}

  @Post()
  async create(@Body() data: ColetaneaDTO) {
    return this.moduleService.create(data)
  }
}


