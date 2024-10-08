import { Context, Router, send } from "@oak";
import { join } from "@path";
import { booksTemplate } from "./src/view/books.ts";

export { mainRoute };

const mainRoute = new Router()
    // Rota de envio dos arquivos estáticos
    .get("/static/:path+", async (ctx: Context) => {
        await send(ctx, ctx.request.url.pathname, {
            root: join(Deno.cwd(), "src/public"),
        });
    })
    // Rota principal
    .get("/", async ({ response }) => {
        response.body = await Deno.readTextFile("./src/view/index.html")
    })
    .get("/book", ({response})=>{
        response.body = booksTemplate({id:"1", author:"Stallone LS", price: 123, title:"Adventures of Code"});
    })