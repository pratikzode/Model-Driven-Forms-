import { Injectable } from "@angular/core";

@Injectable()
export class HelloService{
    //business method
     sayHello():string{
        return "Welcome to the world of Angular services";
    }

     convert(s:string):string{
            return s.toUpperCase();
     }

    
}