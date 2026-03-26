import { Module } from "@nestjs/common";
import { ProdutoController } from "./produto.controlle";

@Module({
    imports:[],
    controllers:[ProdutoController],
    providers:[],
})
export class ProdutoModule{}