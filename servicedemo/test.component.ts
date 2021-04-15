import { Component } from "@angular/core";
import { HelloService } from "./hello.service";

@Component({
    selector:'test-comp',
    templateUrl:'./test.component.html',
    styleUrls:['./test.component.css'],
    providers:[HelloService]
})
export class TestComponent{
    output1:string="";  
    data:string="";
    output2:string="";
    

    constructor(private hs:HelloService){
    }

    method1():void{
        this.output1=this.hs.sayHello();
    }
    method2():void{
       this.output2=this.hs.convert(this.data);
    }
    
}