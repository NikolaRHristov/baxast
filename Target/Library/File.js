import { writeFile as e, readFile as o } from "fs/promises";
import r from "typescript";
import { pathToFileURL as p } from "url";
import a from "./JSON.js";
var c=async t=>{if(t.split(".").pop()==="ts"){const{options:i}=r.convertCompilerOptionsFromJson((await a("../Configuration/TypeScript.json",import.meta.url))?.compilerOptions,".");r.createProgram([t],i,r.createCompilerHost(i)).emit(),await e(t.replace(".ts",".js"),r.transpile((await o(t,"utf-8")).toString(),i))}return(await import(p(t).toString().replace(".ts",".js"))).default};export { c as default };

