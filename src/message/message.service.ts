import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message } from 'src/message/message.model';

@Injectable()
export class MessageService {
  constructor(
    @InjectModel(Message.name)
    private readonly userModel: Model<Message>,
  ) {}

  async create(createMessageDto: CreateMessageDto) {
    try {
      return await this.userModel.create(createMessageDto);
    } catch (error) {
      Logger.error(error, 'MessageService.create');
      throw new BadRequestException(error);
    }
  }

  async getMessages(
    loveCode: string,
    limit: number,
    offset: number,
    search?: string,
  ) {
    try {
      const query = {
        loveCode,
        ...(search && { message: { $regex: search, $options: 'i' } }),
      };
      return await this.userModel
        .find(query)
        .limit(limit)
        .skip(offset)
        .sort({ time: -1 });
    } catch (error) {
      Logger.error(error, 'MessageService.getMessages');
      throw new BadRequestException(error);
    }
  }

  findAll() {
    return `This action returns all message`;
  }

  findOne(id: number) {
    return `This action returns a #${id} message`;
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
