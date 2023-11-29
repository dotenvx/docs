(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3718],{5707:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/dotenv-vault/pull",function(){return l(8324)}])},1370:function(e,n,l){"use strict";l.d(n,{c:function(){return d}});var r=l(5893),t=l(5675),o=l.n(t);function d(e){return(0,r.jsx)("div",{className:"w-full p-7 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md",children:(0,r.jsxs)("div",{className:"border border-zinc-300 dark:border-zinc-800 text-zinc-100 text-sm subpixel-antialiased rounded-lg leading-normal overflow-hidden shadow-lg",children:[(0,r.jsx)("div",{className:"p-0 bg-zinc-200 dark:bg-black border-b border-zinc-300 dark:border-zinc-800",children:(0,r.jsxs)("div",{className:"flex py-1 px-2",children:[(0,r.jsxs)("div",{className:"flex items-center space-x-1.5",children:[(0,r.jsx)("span",{className:"h-2 w-2 bg-red-500/70 dark:bg-red-500/30 rounded-full"}),(0,r.jsx)("span",{className:"h-2 w-2 bg-orange-300/70 dark:bg-orange-300/30 rounded-full"}),(0,r.jsx)("span",{className:"h-2 w-2 bg-green-500/70 dark:bg-green-500/30 rounded-full"})]}),(0,r.jsx)("div",{className:"text-right w-full text-zinc-400 text-xs",children:e.www})]})}),(0,r.jsx)("div",{className:"p-0",children:(0,r.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",className:"hover:brightness-105",children:(0,r.jsx)(o(),{src:e.url,width:"0",height:"0",alt:"",className:"p-0 m-0 w-full",unoptimized:!0})})})]})})}},8324:function(e,n,l){"use strict";l.r(n),l.d(n,{__N_SSG:function(){return s}});var r=l(5893),t=l(1151),o=l(1370);function d(e){let n=Object.assign({h5:"h5",a:"a",h1:"h1",p:"p",h2:"h2",h4:"h4",pre:"pre",code:"code",hr:"hr",em:"em"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h5,{children:(0,r.jsx)(n.a,{href:"/docs/dotenv-vault",children:"CLI"})}),"\n",(0,r.jsx)(n.h1,{children:"dotenv-vault pull"}),"\n",(0,r.jsx)(n.p,{children:"Pull .env securely with dotenv-vault."}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.h4,{children:"1. Run pull command"}),"\n",(0,r.jsx)(n.pre,{code:"$ npx dotenv-vault pull\n\nremote:   Securely pulling... done\nremote:   Securely pulled development (.env)\n",children:(0,r.jsx)(n.code,{children:"$ npx dotenv-vault pull\n\nremote:   Securely pulling... done\nremote:   Securely pulled development (.env)\n"})}),"\n",(0,r.jsx)(n.h4,{children:"2. View .env (optional)"}),"\n",(0,r.jsx)(n.p,{children:"You now have a .env file in the root of your project. The .env file holds your environment variables - their names and secrets."}),"\n",(0,r.jsx)(n.p,{children:"Run ls -al to view it."}),"\n",(0,r.jsx)(n.pre,{code:"$ ls -al\nJul 28 17:54 .\nJul 27 13:46 ..\nJul 27 14:51 .env\nJul 28 18:11 .env.me\nJul 28 18:09 .env.vault\nJul 28 17:54 .gitignore\n...\n",children:(0,r.jsx)(n.code,{children:"$ ls -al\nJul 28 17:54 .\nJul 27 13:46 ..\nJul 27 14:51 .env\nJul 28 18:11 .env.me\nJul 28 18:09 .env.vault\nJul 28 17:54 .gitignore\n...\n"})}),"\n",(0,r.jsx)(o.c,{url:"/assets/img/cloudinary/Screen_Shot_2022-08-04_at_10.00.34_AM_jg9dzq.png"}),"\n",(0,r.jsx)(n.p,{children:"That's it!"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"command-details",children:"Command Details"}),"\n",(0,r.jsx)(n.p,{children:"For more information on the pull command, run dotenv-vault help pull."}),"\n",(0,r.jsx)(n.pre,{code:"$ npx dotenv-vault help pull\nPull .env securely\n\nUSAGE\n  $ dotenv-vault pull [ENVIRONMENT] [FILENAME] [-m ] [-y]\n\nARGUMENTS\n  ENVIRONMENT  Set environment to pull from. Defaults to development\n  FILENAME     Set output filename. Defaults to .env for development and .env.{environment} for other environments\n\nFLAGS\n  -m, --dotenvMe=         Pass .env.me (DOTENV_ME) credential directly (rather than reading from .env.me file)\n  -y, --yes               Automatic yes to prompts. Assume yes to all prompts and run non-interactively.\n\nDESCRIPTION\n  Pull .env securely\n\nEXAMPLES\n  $ dotenv-vault pull\n",children:(0,r.jsx)(n.code,{children:"$ npx dotenv-vault help pull\nPull .env securely\n\nUSAGE\n  $ dotenv-vault pull [ENVIRONMENT] [FILENAME] [-m ] [-y]\n\nARGUMENTS\n  ENVIRONMENT  Set environment to pull from. Defaults to development\n  FILENAME     Set output filename. Defaults to .env for development and .env.{environment} for other environments\n\nFLAGS\n  -m, --dotenvMe=         Pass .env.me (DOTENV_ME) credential directly (rather than reading from .env.me file)\n  -y, --yes               Automatic yes to prompts. Assume yes to all prompts and run non-interactively.\n\nDESCRIPTION\n  Pull .env securely\n\nEXAMPLES\n  $ dotenv-vault pull\n"})}),"\n",(0,r.jsx)(n.h5,{children:"ARGUMENTS"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"[ENVIRONMENT]"})}),"\n",(0,r.jsx)(n.p,{children:"Set environment to pull from. Defaults to development"}),"\n",(0,r.jsx)(n.pre,{code:"$ npx dotenv-vault pull production\n",children:(0,r.jsx)(n.code,{children:"$ npx dotenv-vault pull production\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"[FILENAME]"})}),"\n",(0,r.jsx)(n.p,{children:"Set output filename. Defaults to .env for development and .env.[ENVIRONMENT] for other environments"}),"\n",(0,r.jsx)(n.pre,{code:"$ npx dotenv-vault pull production .env.production\n",children:(0,r.jsx)(n.code,{children:"$ npx dotenv-vault pull production .env.production\n"})}),"\n",(0,r.jsx)(n.h5,{children:"FLAGS"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"-m, --dotenvMe"})}),"\n",(0,r.jsx)(n.p,{children:"Pass .env.me (DOTENV_ME) credential directly (rather than reading from .env.me file)"}),"\n",(0,r.jsx)(n.pre,{code:"$ npx dotenv-vault pull --dotenvMe=me_b1831e‚\xc4\xb6\n",children:(0,r.jsx)(n.code,{children:"$ npx dotenv-vault pull --dotenvMe=me_b1831e‚\xc4\xb6\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"-y, --yes"})}),"\n",(0,r.jsx)(n.p,{children:"Automatic yes to prompts. Assume yes to all prompts and run non-interactively."}),"\n",(0,r.jsx)(n.pre,{code:"$ npx dotenv-vault pull -y\n",children:(0,r.jsx)(n.code,{children:"$ npx dotenv-vault pull -y\n"})})]})}var s=!0;n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}}},function(e){e.O(0,[5675,9774,2888,179],function(){return e(e.s=5707)}),_N_E=e.O()}]);