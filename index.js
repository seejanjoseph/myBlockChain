
const getHash = (data) => { 
    return (data = data +'#');
} 

class Block {
    constructor (data, hash,lastHash){
        this.data = data;
        this.hash = hash;
        this.lastHash = lastHash;
    };
}

class Blockchain {
    constructor (){
        
        const genesis = new Block('gen-data', 'gen-hash','gen-lasthash');
        this.chain = [genesis];
     };


    addBlock(data ) {
        const lastHash = this.chain[this.chain.length-1].hash;
        const hash = getHash(data + lastHash);
        const customBlock = new Block(data, hash, getHash);

        this.chain.push(customBlock);
    }
}

console.log ("-- Starting the App --");
const myBlockChain = new Blockchain();
myBlockChain.addBlock('One');
myBlockChain.addBlock('Two');
console.log("printing --" + myBlockChain);