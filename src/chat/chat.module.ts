import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Chat, ChatSchema,  } from './Schema/chat';
import { ChatGateway } from 'chat.gateway';

@Module({
  imports:[MongooseModule.forFeature([{name:Chat.name, schema:ChatSchema}])],
  controllers: [ChatController],
  providers: [ChatService, ChatGateway],
})
export class ChatModule {}
