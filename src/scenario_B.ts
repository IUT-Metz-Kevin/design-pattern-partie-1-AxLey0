interface OrganisationPattern {
    name: string;
    address: string;
    display(indent?:string): void;
}

export class Department implements OrganisationPattern {
    name: string;
    address: string;
    private cDeps: ChildDepartment[] = [];

    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }

    addEmployee(cDeps: ChildDepartment) {
    }

    display(indent?:string): void {
        
    }
}

export class ChildDepartment extends Department {
    private subDepartments: Department[] = [];

    constructor(name: string, address: string) {
        super(name, address);
    }

    addSubDepartment(subDepartment: Department) {
    }

    display(indent?:string): void {
    }
}