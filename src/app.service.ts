import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from "@nestjs/microservices";

@Injectable()
export class AppService {
    constructor(@Inject('SERVICE')private client:ClientProxy) {
    }

    async getHello() {
      const cmd = {cmd: 'hello'}
      return await this.client.send(cmd, {data:"world"}).toPromise();
    }
    async getHelloFromTwo(){
        const cmd = {cmd:'helloFromTwo'}
        return  await this.client.send(cmd, {data:"world"}).toPromise();
    }
    async getHelloFromThree(){
        const cmd = {cmd:'sayHello'}
        return await this.client.send(cmd, {data:"world"}).toPromise();
    }
    async createPost(data:{text:string,title:string}){
        const cmd = {cmd:'create-post'}
        return await this.client.send(cmd, data).toPromise();
    }
    async getPosts(){
        const cmd = {cmd:'get-posts'}
        return await this.client.send(cmd, {}).toPromise();
    }
}
