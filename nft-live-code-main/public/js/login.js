const web3 = new Web3(window.ethereum);

const Bomb_Address = "0x1587B873F85CC1F7dab5b24ff93F0C5A7b6911db";
const Bomb_Abi = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }];
const contract_Bomb = web3.eth.Contract(Bomb_Abi, Bomb_Address);

const price_per_hero = 1000;

const hero_Address = "0xA7a0A6F9D6fA7056f282330A90e01a9E2af97E9F";
const hero_Abi = [{ "inputs": [{ "internalType": "string", "name": "_name", "type": "string" }, { "internalType": "string", "name": "_symbol", "type": "string" }, { "internalType": "string", "name": "_domain", "type": "string" }, { "internalType": "address", "name": "_tokenBomb", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256[]", "name": "heroIds", "type": "uint256[]" }], "name": "Player_buy_hero", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "TokenBomb", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_tokenIds", "outputs": [{ "internalType": "uint256", "name": "_value", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "buyhero_By_Token", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "domain", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "boxTokenId", "type": "uint256" }], "name": "getBoxInfo", "outputs": [{ "internalType": "uint256", "name": "__boxTokenId", "type": "uint256" }, { "internalType": "uint256", "name": "__boxType", "type": "uint256" }, { "internalType": "uint256", "name": "__heroAmount", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "boxTokenId", "type": "uint256" }], "name": "getBoxInfo2", "outputs": [{ "internalType": "uint256", "name": "__heroAmount", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "price_token_per_hero", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
const contract_Hero = web3.eth.Contract(hero_Abi, hero_Address);
var currentAccount = null;
console.log(contract_Bomb);
const filePath = './metadata/scripts/bananaGreen_dragon.json';
// module.exports = {
//     filePath: filePath
// }
// const serverUrl = 'http://localhost:3000';
// fetch('${serverUrl}/getJsonData')
//     .then(response => response.json())
//     .then(data => {
//         const imageUri = data.image;
//         console.log(imageUri);
//     })
$(document).ready(function () {
    check_Metamask();
    deleteAllCookies();
});

$("#buyHero").click(function () {
    var total = parseInt($("#totalHero").val()) * price_per_hero;
    // Grant Permission to Hero
    //Note: Value to approve is string, not a number. Bcs js can't load large num
    contract_Bomb.methods.approve(hero_Address, total + "000000000000000000").send({
        //Set extra fee
        from: currentAccount, value: 0
    }, (err, hash) => {
        if (err) {
            console.log(err);
        } else {
            console.log(hash);
            CheckTransaction_ApproveBomb(hash);
        }
    })
});

function CheckTransaction_ApproveBomb(hash) {
    web3.eth.getTransactionReceipt(hash).then((data) => {
        // console.log(data);
        if (data == null) {
            CheckTransaction_ApproveBomb(hash);
        } else {
            console.log(data.status);
            console.log("Approved done!");
            var amount = parseInt($("#totalHero").val());
            contract_Hero.methods.buyhero_By_Token(amount).send({
                from: currentAccount, value: 0
            }, (err, hash) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Done!");
                }
            });
        }
    });
}

function LoginMetaMask() {
    connect_Metamask().then((data) => {
        currentAccount = data[0];
        web3.eth.net.getId().then((net) => {
            if (net != 97) {
                alert("Please connect BSC Mainnet");
                window.location = "./";
            } else {
                //Secret random key
                var randS = "SecretNumber:" + RandomString(24);
                console.log(randS);

                web3.eth.personal.sign(randS, currentAccount, (err, sign) => {
                    setCookie("RAND", randS, 1);
                    setCookie("HASH", sign, 1);
                    //window.location="./game";
                    $.post("./verifyAccount", { hashString: getCookie("HASH"), randS: getCookie("RAND") }, function (data) {
                        if (data.result != "1") {
                            alert("Wrong authentication!");
                            window.location = "./";
                        } else {
                            currentAccount = data.account;
                            $("#btn_connect_MM").fadeOut(500);
                            $(".txt").html("..." + data.account.slice(-10));
                        }
                    });
                });
            }
        });

    });
}

var getETH = function (address) {
    return new Promise((resolve, reject) => {
        web3.eth.getBalance(address).then((data) => {
            resolve(parseFloat(web3.utils.fromWei(data, "ether")).toFixed(4));
        });
    });
}

window.ethereum.on("accountsChanged", function (accounts) {
    window.location = "./";
});

async function connect_Metamask() {
    const accounts = ethereum.request({ method: 'eth_requestAccounts' });
    return accounts;
}

function check_Metamask() {
    if (typeof window.ethereum !== 'undefined') {
        $("#btn_connect_MM").show();
        $("#installMM").hide();
        $("#btn_connect_MM").fadeOut(0, function () {
            $("#btn_connect_MM").fadeIn(3000);
        });
    } else {
        $("#btn_connect_MM").hide();
        $("#installMM").show();
    }
}

function RandomString(dai) {

    var mang = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "m", "n", "p", "q", "r", "s", "y", "u", "v", "x", "y", "z", "w",
        "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "M", "N", "P", "Q", "R", "S", "Y", "U", "V", "X", "Y", "Z", "W",
        "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    //[i, l, I, L, o, 0, O]

    var kq = "";
    for (var i = 0; i < dai; i++) {
        kq = kq + mang[Math.floor(Math.random() * mang.length)]
    }

    return kq;
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}



function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}