var u=async(...[l,t])=>{l.forEach(async i=>(await(await import("fast-glob")).default(i.replaceAll("'","").replaceAll('"',""))).forEach(c=>a.push(c))),a.reverse();const o=r((await import("../Object/ESBuild.js")).default,{entryPoints:Object.fromEntries(a.map(i=>[i.replace("Source/","").split(".").slice(0,-1).join("."),i]))}),n=await(await import("esbuild")).build(t?.ESBuild?r(o,await(await import("../Function/File.js")).default(t?.ESBuild)):o);console.log(n.metafile?await(await import("esbuild")).analyzeMetafile(n.metafile,{verbose:!0}):{}),t?.TypeScript?e(`tsc -p ${t?.TypeScript}`):e("tsc"),e(`typedoc 			--commentStyle all 			--gitRevision main 			--customCss ${p(`${s}/../Sheet/TypeDoc.css`)} 			--includeVersion 			--out ./Documentation 			--plugin typedoc-plugin-remove-references 			--plugin typedoc-plugin-rename-defaults 			--plugin typedoc-plugin-mdn-links 			--plugin typedoc-plugin-zod 			--plugin @mxssfd/typedoc-theme 			--plugin typedoc-plugin-merge-modules 			--plugin ${p(`${s}/../../Target/Function/TypeDoc.js`)} 			--theme my-theme 			--entryPointStrategy expand 			--mergeModulesRenameDefaults 			--mergeModulesMergeMode module 			--entryPoints ${Object.values(o.entryPoints).join(" --entryPoints ")}`),setTimeout(()=>{e("mv ./Documentation/functions ./Documentation/Function"),e(`find ./Documentation -type f -name '*.html' 					| xargs sed -i '' -e --regexp-extended 's:(href="([^"]+)?)functions/:\\1Function/:g'`)},1e4)};const{default:e}=await import("../Function/Exec.js"),{deepmerge:r}=await import("deepmerge-ts"),{resolve:p}=await import("path"),a=[],s=(await import("url")).fileURLToPath((await import("path")).dirname(import.meta.url));export{s as Current,e as Exec,a as Pipe,r as deepmerge,u as default,p as resolve};
