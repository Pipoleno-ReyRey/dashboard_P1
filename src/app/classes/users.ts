export class user{
    username!: string;
    role!: string;
    modules!: string[];

    constructor(username: string, role: string, modules: string[]){
        this.username = username;
        this.role = role;
        this.modules = modules;
    }
}