import {Body, Controller, Get, Post} from '@nestjs/common';
import {AppService} from './app.service';


@Controller()
export class AppController {

    constructor(private appService: AppService) {}

    @Get()
    async getHello() {
        return this.appService.getHello();
    }

    @Get('two')
    async two() {
        return this.appService.getHelloFromTwo()
    }

    @Get('three')
    async three() {
        return this.appService.getHelloFromThree()
    }

    @Post()
    createPost(@Body('text')text: string, @Body('title')title: string) {
        return this.appService.createPost({title, text})
    }

    @Get('posts')
    getPosts() {
        return this.appService.getPosts();
    }

}
