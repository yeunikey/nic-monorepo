import { IsNumber } from "@nestjs/class-validator";

export class FindTeamParam {
    @IsNumber()
    id: number;
}