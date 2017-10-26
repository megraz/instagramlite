export class Picture {
    constructor(public link:string, 
                public description:string,
                public owner:number,
                public likes:number[] = [],
                public id?:number) {}
}
