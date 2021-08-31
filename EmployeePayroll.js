class EmployeePayrollData{

    id;
    salary;
    gender;
    startDate;

    constructor (id,name,salary){
        this.id=id;
        this.name=name;
        this.salary=salary;
    }
    get name(){
        return this._name;
    }
    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        const newLocal = this;
        if(nameRegex.test(name))
            this._name=name;
        else throw "Name is inccorect";
    }
    
    toString(){
        return "id"+this.id ,"name"+this.name ,"salary"+this.salary;
    }
}
let employeepayrollData= new EmployeePayrollData(1,"Soma",30000);
console.log(employeepayrollData);
employeepayrollData.salary=40000;





