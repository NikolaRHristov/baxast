var n=async(...[l,e])=>{const i=[];l.forEach(async t=>(await(await import("fast-glob")).default(t.replaceAll("'","").replaceAll('"',""))).forEach(s=>i.push(s))),i.reverse();const a=p((await import("../Object/ESBuild.js")).default,{entryPoints:Object.fromEntries(i.map(t=>[t.replace("Source/","").split(".").slice(0,-1).join("."),t]))}),r=await(await import("esbuild")).build(e?.ESBuild?p(a,await(await import("../Function/File.js")).default(e?.ESBuild)):a);console.log(r.metafile?await(await import("esbuild")).analyzeMetafile(r.metafile,{verbose:!0}):{}),e?.TypeScript?o(`tsc -p ${e?.TypeScript}`):o("tsc"),o(`typedoc 			--customCss ${(await import("path")).resolve(`${(await import("url")).fileURLToPath((await import("path")).dirname(import.meta.url))}/../Sheet/TypeDoc.css`)} 			--includeVersion 			--out ./Documentation 			--plugin typedoc-plugin-remove-references 			--plugin typedoc-plugin-rename-defaults 			--plugin typedoc-plugin-mdn-links 			--plugin typedoc-plugin-zod 			--plugin @mxssfd/typedoc-theme 			--plugin typedoc-plugin-merge-modules 			--theme my-theme 			--entryPointStrategy expand Source/ 			--mergeModulesRenameDefaults 			--mergeModulesMergeMode module 			--entryPoints ${Object.values(a.entryPoints).join(" --entryPoints ")}`)};const{default:o}=await import("../Function/Exec.js"),{deepmerge:p}=await import("deepmerge-ts");export{o as Exec,p as deepmerge,n as default};
