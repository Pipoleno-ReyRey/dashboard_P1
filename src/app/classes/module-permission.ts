export class ModulePermission {
    iconSrc!: string;
    module!: string;
    available!: boolean;

    constructor(icon: string, module: string){
        this.module = module;
        this.available = true;
    }
}
