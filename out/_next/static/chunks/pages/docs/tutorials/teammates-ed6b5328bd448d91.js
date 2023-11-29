(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1163],{9412:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/tutorials/teammates",function(){return l(430)}])},1370:function(e,n,l){"use strict";l.d(n,{c:function(){return i}});var t=l(5893),r=l(5675),a=l.n(r);function i(e){return(0,t.jsx)("div",{className:"w-full p-7 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md",children:(0,t.jsxs)("div",{className:"border border-zinc-300 dark:border-zinc-800 text-zinc-100 text-sm subpixel-antialiased rounded-lg leading-normal overflow-hidden shadow-lg",children:[(0,t.jsx)("div",{className:"p-0 bg-zinc-200 dark:bg-black border-b border-zinc-300 dark:border-zinc-800",children:(0,t.jsxs)("div",{className:"flex py-1 px-2",children:[(0,t.jsxs)("div",{className:"flex items-center space-x-1.5",children:[(0,t.jsx)("span",{className:"h-2 w-2 bg-red-500/70 dark:bg-red-500/30 rounded-full"}),(0,t.jsx)("span",{className:"h-2 w-2 bg-orange-300/70 dark:bg-orange-300/30 rounded-full"}),(0,t.jsx)("span",{className:"h-2 w-2 bg-green-500/70 dark:bg-green-500/30 rounded-full"})]}),(0,t.jsx)("div",{className:"text-right w-full text-zinc-400 text-xs",children:e.www})]})}),(0,t.jsx)("div",{className:"p-0",children:(0,t.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",className:"hover:brightness-105",children:(0,t.jsx)(a(),{src:e.url,width:"0",height:"0",alt:"",className:"p-0 m-0 w-full",unoptimized:!0})})})]})})}},430:function(e,n,l){"use strict";l.r(n),l.d(n,{__N_SSG:function(){return d}});var t=l(5893),r=l(1151),a=l(1370);function i(e){let n=Object.assign({h5:"h5",h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h5,{children:"Tutorials"}),"\n",(0,t.jsx)(n.h1,{children:"Adding Teammates"}),"\n",(0,t.jsx)(n.h2,{id:"run-dotenv-vault-open",children:"Run dotenv-vault open"}),"\n",(0,t.jsx)(n.p,{children:"Open terminal, enter your project's root directory (where your .env.vault file is), and run dotenv-vault open."}),"\n",(0,t.jsx)(n.pre,{code:"$ npx dotenv-vault open\n",children:(0,t.jsx)(n.code,{children:"$ npx dotenv-vault open\n"})}),"\n",(0,t.jsx)(a.c,{url:"/assets/img/cloudinary/Screen_Shot_2022-08-04_at_8.53.10_AM_cgkgkk.png"}),"\n",(0,t.jsx)("small",{children:"FYI: Not a developer? You can navigate to this page by visiting ui.dotenv.org."}),"\n",(0,t.jsx)(n.h2,{id:"click-team-dropdown",children:"Click Team Dropdown"}),"\n",(0,t.jsx)(n.p,{children:"Click the 'Team' dropdown button and then click 'Manage access'."}),"\n",(0,t.jsx)(a.c,{url:"/assets/img/cloudinary/Screen_Shot_2022-08-04_at_2.10.17_PM_bdiezm.png"}),"\n",(0,t.jsx)(n.h2,{id:"click-add-teammate",children:"Click Add Teammate"}),"\n",(0,t.jsx)(n.p,{children:"On the next page, click 'Add Teammate'."}),"\n",(0,t.jsx)(a.c,{url:"/assets/img/cloudinary/Screen_Shot_2022-08-04_at_2.13.27_PM_rxvyll.png"}),"\n",(0,t.jsx)(n.h2,{id:"enter-teammates-email-address",children:"Enter Teammate's Email Address"}),"\n",(0,t.jsx)(n.p,{children:"Enter your teammate's email address and click 'Add teammate'."}),"\n",(0,t.jsx)(a.c,{url:"/assets/img/cloudinary/Screen_Shot_2022-08-04_at_2.15.11_PM_l9rzrl.png"}),"\n",(0,t.jsx)(a.c,{url:"/assets/img/cloudinary/Screen_Shot_2022-08-04_at_4.58.59_PM_exusnj.png"}),"\n",(0,t.jsx)(n.h2,{id:"tell-your-teammate-to-check-their-email",children:"Tell Your Teammate to Check Their Email"}),"\n",(0,t.jsx)(n.p,{children:"They will receive an email with instructions to run dotenv-vault pull. They can also choose to log in."}),"\n",(0,t.jsx)(a.c,{url:"/assets/img/cloudinary/Screen_Shot_2022-08-04_at_2.17.49_PM_djym8s.png"}),"\n",(0,t.jsx)(n.h2,{id:"teammate-run-dotenv-vault-login",children:"Teammate: Run dotenv-vault login"}),"\n",(0,t.jsx)(n.p,{children:"Your teammate visits their terminal, enters the project directory (which they've already git-cloned via a service like GitHub or GitLab), and runs dotenv-vault login."}),"\n",(0,t.jsx)(n.pre,{code:"$ npx dotenv-vault login\n",children:(0,t.jsx)(n.code,{children:"$ npx dotenv-vault login\n"})}),"\n",(0,t.jsx)(n.h2,{id:"teammate-click-login",children:"Teammate: Click Login"}),"\n",(0,t.jsx)(n.p,{children:"On the next screen, your teammate should follow the login process and click 'Log in'."}),"\n",(0,t.jsx)(n.h2,{id:"teammate-view-env-me-file-optional",children:"Teammate: View .env.me file (optional)"}),"\n",(0,t.jsx)(n.p,{children:"Your teammate now has their own .env.me file (on their machine only) in the root of the project. The .env.me file uniquely authorizes them to access the project's shared .env file. Think of it like a unique SSH key at GitHub."}),"\n",(0,t.jsx)(n.p,{children:"Run ls -al to view it."}),"\n",(0,t.jsx)(n.pre,{code:"$ ls -al\nJul 28 17:54 .\nJul 27 13:46 ..\nJul 28 18:11 .env.me\nJul 28 18:09 .env.vault\nJul 28 17:54 .gitignore\nJul 27 14:49 index.js\n...\n",children:(0,t.jsx)(n.code,{children:"$ ls -al\nJul 28 17:54 .\nJul 27 13:46 ..\nJul 28 18:11 .env.me\nJul 28 18:09 .env.vault\nJul 28 17:54 .gitignore\nJul 27 14:49 index.js\n...\n"})}),"\n",(0,t.jsx)(a.c,{url:"/assets/img/cloudinary/dotenv-me_bsffi2.png"}),"\n",(0,t.jsx)(n.h2,{id:"teammate-run-dotenv-vault-pull",children:"Teammate: Run dotenv-vault pull"}),"\n",(0,t.jsx)(n.p,{children:"Your teammate returns to their terminal and runs dotenv-vault pull."}),"\n",(0,t.jsx)(n.pre,{code:"$ npx dotenv-vault pull\n\nremote:   Securely pulling... done\nremote:   Securely pulled development (.env)\n",children:(0,t.jsx)(n.code,{children:"$ npx dotenv-vault pull\n\nremote:   Securely pulling... done\nremote:   Securely pulled development (.env)\n"})}),"\n",(0,t.jsx)(a.c,{url:"/assets/img/cloudinary/teammate-pull_zlk3hr.gif"}),"\n",(0,t.jsx)(n.h2,{id:"teammate-run-dotenv-vault-push-optional",children:"Teammate: Run dotenv-vault push (optional)"}),"\n",(0,t.jsx)(n.p,{children:"Your teammate can edit the .env file and push changes with dotenv-vault push."}),"\n",(0,t.jsx)(n.pre,{code:"$ npx dotenv-vault push\n\nremote:   Securely pushing (.env)... done\nremote:   Securely pulled development (.env)\n",children:(0,t.jsx)(n.code,{children:"$ npx dotenv-vault push\n\nremote:   Securely pushing (.env)... done\nremote:   Securely pulled development (.env)\n"})}),"\n",(0,t.jsx)(a.c,{url:"/assets/img/cloudinary/teammate-push_m2r46u.gif"}),"\n",(0,t.jsx)(n.h2,{id:"you-run-dotenv-vault-pull-optional",children:"You: Run dotenv-vault pull (optional)"}),"\n",(0,t.jsx)(n.p,{children:"Pull the changes your teammate made with dotenv-vault pull."}),"\n",(0,t.jsx)(n.pre,{code:"$ npx dotenv-vault pull\n\nremote:   Securely pulling... done\nremote:   Securely pulled development (.env)\n",children:(0,t.jsx)(n.code,{children:"$ npx dotenv-vault pull\n\nremote:   Securely pulling... done\nremote:   Securely pulled development (.env)\n"})}),"\n",(0,t.jsx)(a.c,{url:"/assets/img/cloudinary/teammate-pull_g5o4px.gif"}),"\n",(0,t.jsx)(n.p,{children:"That's it! Thanks for using dotenv-vault with your teammates and friends."})]})}var d=!0;n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}}},function(e){e.O(0,[5675,9774,2888,179],function(){return e(e.s=9412)}),_N_E=e.O()}]);