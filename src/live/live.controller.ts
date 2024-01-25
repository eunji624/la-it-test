import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LiveService } from './live.service';
import { ReqCreateLiveDto, ReqUpdateLiveDto } from './dto/req.live.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Live')
@Controller('/api/live')
export class LiveController {
    constructor(private readonly liveService: LiveService) {}

    @ApiOperation({
        summary: '라이브 등록',
        description: '라이브 등록',
    })
    @Post('create')
    create(@Body() { title, thumbnail, description }: ReqCreateLiveDto, channelName: string, hlsUrl: string) {
        return this.liveService.create(title, thumbnail, description, channelName, hlsUrl);
    }

    @ApiOperation({
        summary: '라이브 종료',
        description: '라이브 종료',
    })
    @Post('end/:liveId')
    end(@Param('liveId') liveId: string) {
        return this.liveService.end(+liveId);
    }

    @Get()
    findAll() {
        return this.liveService.findAll();
    }

    @Get(':liveId')
    findOne(@Param('liveId') liveId: string) {
        return this.liveService.findOne(+liveId);
    }

    @Patch(':liveId')
    update(@Param('liveId') liveId: string, @Body() { title, thumbnail }: ReqUpdateLiveDto) {
        return this.liveService.update(+liveId, title, thumbnail);
    }

    @Delete(':liveId')
    remove(@Param('liveId') liveId: string) {
        return this.liveService.remove(+liveId);
    }
}
