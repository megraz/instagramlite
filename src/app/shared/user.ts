export class User {
    token:string;
    //La date doit être fournie au format dd/mm/YYYY
    birthdate:Date;
    //l'email doit être au format bloup@bloup.bloup
    mail:string;
    //le username doit être unique (validation asynchrone
    //vous pouvez cherchez par vous même, sinon on verra
    //ensemble)
    constructor(public username:string,
                //le password doit faire 3+ caractères
                public password:string,
                public id?:number){}
    
}