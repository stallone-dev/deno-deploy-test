import { Application, Router } from "@oak";
import { mainRoute } from "./router.ts";

const PORT = 8080;

const app = new Application();
const router = new Router();

router.use(mainRoute.routes());

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: PORT });
