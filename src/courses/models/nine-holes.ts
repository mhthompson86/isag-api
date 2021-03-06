import { Hole } from './hole';
import { IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class NineHoles {
  @ValidateNested()
  @Type()
  1: Hole;

  @ValidateNested()
  @Type()
  2: Hole;

  @ValidateNested()
  @Type()
  3: Hole;

  @ValidateNested()
  @Type()
  4: Hole;

  @ValidateNested()
  @Type()
  5: Hole;

  @ValidateNested()
  @Type()
  6: Hole;

  @ValidateNested()
  @Type()
  7: Hole;

  @ValidateNested()
  @Type()
  8: Hole;

  @ValidateNested()
  @Type()
  9: Hole;
}
