import { readFile as a } from "fs/promises";
import { dirname as i } from "path";
import { fileURLToPath as m } from "url";
var s=async(r,t=import.meta.url)=>JSON.parse((await a(`${i(m(t??import.meta.url))}/${r}`,"utf-8")).toString());export { s as default };

