import { Injectable } from '@angular/core';

@Injectable()
export class CacheService {
    session : any[] = new Array<any>();
    constructor() { }

    public async getSession (sessionKey:string){
        return await this.session[sessionKey];
    }

    public SetSession (sessionKey:string, sessionValue : any){

        this.DeleteSession(sessionKey);
        return this.session[sessionKey] = sessionValue;
    }

    public DeleteSession (sessionKey:string) {
        delete this.session[sessionKey];
    }



}