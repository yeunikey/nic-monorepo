import { IsNumber, Min } from "@nestjs/class-validator";

export class TeamCreateDTO {

    private fullName: string;
    private position: string;
    private image: string;
    @IsNumber()
    @Min(0)
    private priority: number;

}