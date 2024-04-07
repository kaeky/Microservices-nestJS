import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {

  constructor(@Inject('ORGANIZATION_SERVICE') private client: ClientProxy) {
  }
  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  newOrganization(data: any) {
    console.log('Send', data);
    this.client.emit('new_organization', data);
    return 'se ha enviado el evento new_organization'
  }
}
