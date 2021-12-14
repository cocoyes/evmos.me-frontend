(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[746],{336:function(e,t,n){"use strict";n.d(t,{X:function(){return d}});var s=n(63),a=n(3793),i=n(5284),o=n(1440),r=n(4461),l=n(3808),c=n(7294);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}var d=(0,s.G)(((e,t)=>{var n=(0,a.m)("Heading",e),s=function(e,t){if(null==e)return{};var n,s,a={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}((0,i.Lr)(e),["className"]);return c.createElement(o.m$.h2,h({ref:t,className:(0,r.cx)("chakra-heading",e.className)},s,{__css:n}))}));l.Ts&&(d.displayName="Heading")},4160:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faq",function(){return n(7139)}])},7139:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var s=n(5893),a=n(5079),i=n(336),o=n(4115),r=n(9444),l=n(5902),c=function(){return(0,s.jsxs)(a.gC,{w:"fit-content",children:[(0,s.jsx)(i.X,{mt:10,children:"Frequently Asked Questions"}),(0,s.jsxs)(a.gC,{textAlign:"left",alignItems:"left",px:10,children:[(0,s.jsx)(l.Z,{content:(0,s.jsx)(i.X,{textAlign:"center",children:"Why does it ask me to sign a 0x00000... message when login with Metamask?"},"q1")}),(0,s.jsx)(o.x,{pt:3,children:"To send cosmos transactions using Metamask the wallet needs the public key information."}),(0,s.jsx)(o.x,{children:"If your account has never sent a transaction in the Evmos network, requesting the public key to the evmos network will return an empty response."}),(0,s.jsx)(o.x,{children:"In order to allow the user to send transactions in this case, evmos.me will request the user to sign an empty transaction and extract the public key using that signature."})]}),(0,s.jsxs)(a.gC,{textAlign:"left",alignItems:"left",pt:10,px:10,children:[(0,s.jsx)(l.Z,{content:(0,s.jsx)(i.X,{textAlign:"center",children:"Metamask wallet is not updating the balance"},"q1")}),(0,s.jsx)(o.x,{pt:3,children:"This is a known issue after the network upgrade because the pokt's (ethereum rpc endpoint provider) nodes are not currently updated, it should be fixed in a couple of days."}),(0,s.jsx)(o.x,{children:"To use metamask in the meanwhile you can go to Settings/Networks/Evmos Testnet and change the rpc endpoint for the evmos public one: https://ethereum.rpc.evmos.dev/"})]}),(0,s.jsxs)(a.gC,{textAlign:"left",alignItems:"left",pt:10,px:10,children:[(0,s.jsx)(l.Z,{content:(0,s.jsx)(i.X,{textAlign:"center",children:"Why is my transaction on a pending state?"},"q1")}),(0,s.jsx)(o.x,{pt:3,children:"The gas and fees were calculated to work with most validators, but sometimes it can be too low."}),(0,s.jsx)(o.x,{children:"There's two ways to fix this, one is using metamask integrated button to hurry up the transaction. The other one is manually changing the fees value on the form (Make sure your transaction was dropped before resending to avoid double spends)"})]}),(0,s.jsxs)(a.gC,{textAlign:"left",alignItems:"left",pt:10,px:10,children:[(0,s.jsx)(l.Z,{content:(0,s.jsx)(i.X,{textAlign:"center",children:"Why can not I create and send ERC20 using the Keplr wallet?"},"q1")}),(0,s.jsx)(o.x,{pt:3,children:"Evmos supports two kinds of transactions: cosmos and ethereum. The cosmos transactions can be signed using eth_secp256k1 (metamask) and secp256k1 (keplr), but the ethereum transactions can only be signed by eth_secp256k1."}),(0,s.jsx)(o.x,{children:"The tharsis team is working on supporting secp256k1 / add eth_sec256k1 to Keplr in order to allow to sign ethereum transaction, but at the moment is impossible to interact with eth contracts using Keplr."})]}),(0,s.jsxs)(a.gC,{textAlign:"left",alignItems:"left",pt:10,px:10,children:[(0,s.jsx)(l.Z,{content:(0,s.jsx)(i.X,{textAlign:"center",children:"Why is there a warning message when sending transactions on Metamask?"},"q1")}),(0,s.jsx)(o.x,{pt:3,children:"To sign and send cosmos transactions with Metamask, evmos.me can not send the complete cosmos information to Metamask because the wallet doesn't support cosmos. The only way to send cosmos transactions is directly is to sign the hashed message."}),(0,s.jsx)(o.x,{children:"I'm working on displaying detailed information on each of these messages to show the user how the hash was generated, so it can be reviewed before signing the message."})]}),(0,s.jsxs)(a.gC,{textAlign:"left",alignItems:"left",pt:10,px:10,children:[(0,s.jsx)(l.Z,{content:(0,s.jsx)(i.X,{textAlign:"center",children:"Why is my ERC20 token not showing in the ERC20 page?"},"q1")}),(0,s.jsxs)(o.x,{pt:3,children:["The ERC20 page will only display by default the hardcoded contracts on the backend, more contracts can be added at any time. If you want your contract to be listed, just message me"," ",(0,s.jsx)(r.r,{href:"https://twitter.com/gepaoletti",children:"[@gepaoletti]"})," ","on twitter or"," ",(0,s.jsx)(r.r,{href:"https://github.com/hanchon",children:"[hanchon]"})," on github."]}),(0,s.jsx)(o.x,{children:"I have plans to move the listed tokens to governance proposals but that will be for the next version."}),(0,s.jsx)(o.x,{children:"The balance of any ERC20 wallet can be manually queried using the Utils/Wallet section."})]}),(0,s.jsxs)(a.gC,{textAlign:"left",alignItems:"left",pt:10,px:10,children:[(0,s.jsx)(l.Z,{content:(0,s.jsx)(i.X,{textAlign:"center",children:"Notes:"},"q1")}),(0,s.jsx)(o.x,{pt:3,children:"Changing the fees and gas limit may result on your transaction running out of gas, the current values are not optimal but they work. If you have better gas/fees calculations feel free to reach out."}),(0,s.jsx)(o.x,{children:"This project was developed as part of the HackAtom2021, it can be improved and refined for mainnet usage but with the current state is meant to be only used on testnet."}),(0,s.jsx)(o.x,{children:"Any transaction sent to the network can not be reverted, use the app as your own risk."}),(0,s.jsxs)(o.x,{children:["All the code is open source and can be found on"," ",(0,s.jsx)(r.r,{href:"github.com/hanchon-live/evmos.me-frontend",children:"Frontend Github"})," ","and"," ",(0,s.jsx)(r.r,{href:"github.com/hanchon-live/evmos.me-backend",children:"Backend Github"})]})]}),(0,s.jsxs)(a.gC,{textAlign:"left",alignItems:"left",pt:10,px:10,children:[(0,s.jsx)(l.Z,{content:(0,s.jsx)(i.X,{textAlign:"center",children:"TODOs:"},"q1")}),(0,s.jsx)(o.x,{pt:3,children:"Add an animation to show that the webpage is waiting for a backend response."}),(0,s.jsx)(o.x,{children:"List all the intrarelayer coins without the need to remember the complete assigned name. Display the correct value for the intrarelayer coins because the GRPC response list the balances, for example, as PHOTON, but it should be displayed as BALANCE/DECIMALS PHOTONS."}),(0,s.jsx)(o.x,{children:"List all the current active proposals and allow the user to vote using his wallet."}),(0,s.jsx)(o.x,{children:"List all the validator and simplify the delegate photons process."}),(0,s.jsx)(o.x,{children:"Read the ERC20 registered tokens from the gov proposals instead of manually adding the contract addresses."}),(0,s.jsx)(o.x,{children:"Add a display cosmos message info option for each message before signing it with Metamask. (This information is already displayed on Keplr when sending the same transaction)"})]})]})},h=n(7150),d=function(){return(0,s.jsx)(h.Z,{section:"faq",element:[(0,s.jsx)(c,{},"faqsection")]})}}},function(e){e.O(0,[774,415,228,445,937,13,617,874,876,797,550,525,888,179],(function(){return t=4160,e(e.s=t);var t}));var t=e.O();_N_E=t}]);