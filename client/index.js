const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  // TODO: how do we prove to the server we're on the nice list? 
  let mt = new MerkleTree(niceList);
  console.log("root", mt.getRoot());
  let name = "Anna Stehr";
  let proof = mt.getProof(niceList.findIndex((n) => n === name));
  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    // TODO: add request body parameters here!
    proof,
    name,
  });

  console.log({ gift });
}

main();