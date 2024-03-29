import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

//export class ReqUpdateChannelInfoDtoOnlyText {
//    @ApiProperty({ required: true, example: 'channel 이름' })
//    @IsString()
//    @IsOptional()
//    channelName: string;

//    @ApiProperty({ required: true, example: 'channel 설명' })
//    @IsString()
//    @IsOptional()
//    description: string;
//}

export class ReqUpdateChannelInfoDto {
    @ApiProperty({ required: true, example: 'channel 이름' })
    @IsString()
    @IsOptional()
    channelName: string;

    @ApiProperty({ required: true, example: 'channel 설명' })
    @IsString()
    @IsOptional()
    description: string;

    @ApiProperty({ required: true, example: 'channel ImageUrl' })
    @IsString()
    @IsOptional()
    channelImage: string;
}

export class ReqUpdateChannelImageDto {
    @ApiProperty({ required: true, example: 'TestImageUrl', description: '이미지경로' })
    @IsString()
    imageUrl: string;

    @ApiProperty({ required: true, default: true, example: 'true', description: 'true: update / false: default image' })
    @IsBoolean()
    reset: boolean;
}
