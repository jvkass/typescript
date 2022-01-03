import { Request ,Response} from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(request:Request, response:Response){
    CreateCourseService.execute({
        name:"Nodejs",
        educator:"Vitor",
        duration:10,
    });

    CreateCourseService.execute({
        name:"Reactjs",
        educator:"João"
    });

    return response.send();
}