import { IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { Scores } from './scores';
import { OptionalScores } from './optional-scores';
import { ObjectID } from 'mongodb';
import { MongoHelper } from '../../_shared/mongo-helper';

export class CreateScorecardDto {

  @IsNumber()
  year: number;

  @IsOptional()
  @Type(() => ObjectID)
  @Transform(MongoHelper.toObjectId, { toClassOnly: true })
  teamId: ObjectID;

  @IsOptional()
  @Type(() => ObjectID)
  @Transform(MongoHelper.toObjectId, { toClassOnly: true })
  courseId: ObjectID;

  @IsOptional()
  @ValidateNested()
  @Type(() => OptionalScores)
  playerANetScores?: OptionalScores;

  @IsOptional()
  @ValidateNested()
  @Type(() => OptionalScores)
  playerBNetScores?: OptionalScores;

  @ValidateNested()
  @Type(() => Scores)
  teamNetScores: Scores;

  @IsNumber()
  frontNineNetScore: number;

  @IsNumber()
  backNineNetScore: number;

  @IsNumber()
  totalNetScore: number;

}
