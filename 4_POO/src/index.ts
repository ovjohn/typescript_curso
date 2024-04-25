import { v4 as uuid } from 'uuid';

//CLASE BASE O GENERIC
abstract class User{
    private id: string = uuid();
    protected name!: string;
    protected role!: 'teacher' | 'student'

    abstract getDataUser(): void
}

//CLASE TEACHER
class Teacher extends User {

    private readonly IsDirector: boolean = true;
    private course!:string;
    
    constructor(name:string, course:string){
        super()
        this.name = name;
        this.role = "teacher";
        this.course = course;
    }
    
    getDataUser(): void {  
        console.log({
            ...this
        })      
    }
}

//CLASE STUDENT
class Student extends User{

    private course: Array<String> = [];

    constructor(name:string){
        super();
        this.name = name;
        this.role = "student";
    }    

    public addCourse(value:string){
        this.course.push(value)
    }

    getDataUser(): void { 
        console.log({
            ...this
        })       
    }
}

const teacher = new Teacher("john","Course TypeScript")
teacher.getDataUser()

const student = new Student("John. Estudiante_TypeScript")
student.addCourse('1er Level - TypeScript')
student.getDataUser()