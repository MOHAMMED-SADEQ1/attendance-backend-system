import { IsOptional, IsString, IsEnum, IsNumber, IsDateString } from 'class-validator';

export class UpdateAttendanceDto {
  @IsOptional()
  @IsEnum(['PRESENT', 'ABSENT', 'LATE', 'EARLY_LEAVE', 'VACATION'])
  status?: string;

  @IsOptional()
  @IsString()
  notes?: string;

  @IsOptional()
  @IsNumber()
  calculatedHours?: number;

  @IsOptional()
  @IsNumber()
  overtimeHours?: number;

  @IsOptional()
  @IsDateString()
  checkInTime?: string;

  @IsOptional()
  @IsDateString()
  checkOutTime?: string;
}
