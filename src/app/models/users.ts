import { ModulePermission } from "./module-permission";

export class user{
    username!: string;
    role!: string;
    modules!: ModulePermission[];

    constructor(username: string, role: string, modules: ModulePermission[]){
        this.username = username;
        this.role = role;
        this.modules = modules;
    }
}