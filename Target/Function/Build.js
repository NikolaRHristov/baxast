var n=async(...[p,e])=>{const i=[];p.forEach(async t=>(await(await import("fast-glob")).default(t.replaceAll("'","").replaceAll('"',""))).forEach(l=>i.push(l))),i.reverse();const a=r((await import("../Object/ESBuild.js")).default,{entryPoints:Object.fromEntries(i.map(t=>[t.replace("Source/","").split(".").slice(0,-1).join("."),t]))}),s=await(await import("esbuild")).build(e?.ESBuild?r(a,await(await import("../Function/File.js")).default(e?.ESBuild)):a);console.log(s.metafile?await(await import("esbuild")).analyzeMetafile(s.metafile,{verbose:!0}):{}),e?.TypeScript?o(`tsc -p ${e?.TypeScript}`):o("tsc"),o(`typedoc 			--customCss ./Source/Sheet/TypeDoc.css 			--includeVersion 			--out ./Documentation 			--plugin typedoc-plugin-mdn-links 			--plugin typedoc-plugin-zod 			--plugin @mxssfd/typedoc-theme 			--plugin typedoc-plugin-merge-modules 			--theme my-theme 			--entryPointStrategy expand 			--mergeModulesRenameDefaults 			--mergeModulesMergeMode module 			--entryPoints ${Object.values(a.entryPoints).join(" --entryPoints ")}`)};const{default:o}=await import("../Function/Exec.js"),{deepmerge:r}=await import("deepmerge-ts");export{o as Exec,r as deepmerge,n as default};
