import { BaseError } from "./BaseError";

export class BadRequestError extends BaseError {

    constructor(
        message: string = "Requisicao Invalida"
    ) 
    {
        super(400,message)
    }
}