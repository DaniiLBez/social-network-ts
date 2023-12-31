import {AuthDocument} from "../adapters/mongo/schema/auth";
export default class AuthData{
    constructor(
       public id: number,
       public email: string,
       public password: string
    ) {}

    static AuthFromAuthDocument(authDoc: AuthDocument){
        return new AuthData(
            authDoc.id,
            authDoc.email,
            authDoc.password,
        )
    }
}