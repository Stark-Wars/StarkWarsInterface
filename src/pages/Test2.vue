<template>
  <div>
    <button @click="connect_wallet">conn</button>
    <button @click="sign">sign</button>
    <button @click="check">check</button>

  </div>
</template>

<script>
import {Contract} from "starknet"
import {connect} from "@argent/get-starknet";
import abi from "./NftExchange.json";
import {pedersen} from "starknet/dist/utils/hash";
import {toHex} from "starknet/dist/utils/number";

export default {
  name: "TestPage",
  data() {
    return {
      wallet_address: null,
      provider: null,
      account: null,
      queryString: window.location.search,
      queryParams: {},
      order: {
        key: {
          owner: "0x138aefdb281051e0cb93199bc88f133c2ba83cbd50fe6fc984b5588b087917c",
          salt: 3,
          sellAsset: {
            token: "4",
            tokenId: {low: '5', high: '6'},
            assetType: 7,
          },
          buyAsset: {
            token: "8",
            tokenId: {low: '0x9', high: '0x10'},
            assetType: '0xa',
          }
        },
        selling: {low: '1', high: '0'},
        buying: {low: '1', high: '0'},
        sellerFee: {low: '1', high: '0'},
      }
    }
  },
  methods: {
    async connect_wallet() {
      // if (this.wallet_address != null) {
      //   return this.disconnect_wallet();
      // }
      const a = await connect();
      console.log(a.account);
      this.wallet_address = a.account.address;
      console.log(this.wallet_address)
      this.provider = a.provider;
      this.account = a.account;
      this.nft_market_address = "0x00a76fdf521e3d6af98d9f24d24bde251366918180f2a33421ebf2b26ab5df37";
    },
    check: async function () {

      this.order.owner = this.wallet_address;
      console.log(this.order);

      const nft_market_contract = new Contract(abi, this.nft_market_address, this.provider);

      let res = await nft_market_contract.prepareMessage(this.order);
      console.log(toHex(res.res));

      let res2 = await nft_market_contract.prepareMessage2(this.order);
      console.log(toHex(res2.res));

    },
    test: async function () {
      let hash = pedersen([0, this.order.key.owner]);

      console.log(hash.toString());

    },
    sign: async function () {
      const typedDataValidate = {
        types: {
          StarkNetDomain: [
            {name: "name", type: "string"},
            {name: "version", type: "felt"},
            {name: "chainId", type: "felt"},
          ],
          Uint256: [
            {name: "low", type: "felt"},
            {name: "high", type: "felt"},
          ],
          Asset: [
            {name: "token", type: "felt"},
            {name: "tokenId", type: "Uint256"},
            {name: "assetType", type: "felt"}
          ],
          OrderKey: [
            {name: "owner", type: "felt"},
            {name: "salt", type: "felt"},
            {name: "sellAsset", type: "Asset"},
            {name: "buyAsset", type: "Asset"},
          ],
          Order: [
            {name: "key", type: "OrderKey"},
            {name: "selling", type: "Uint256"},
            {name: "buying", type: "Uint256"},
            {name: "sellerFee", type: "Uint256"},
          ],
          Validate: [
            // {name: "order", type: "Order"},
            {name: "order_key_owner", type: "felt"},
            {name: "order_key_salt", type: "felt"},
            {name: "order_key_sellAsset_token", type: "felt"},
            {name: "order_key_sellAsset_tokenId_low", type: "felt"},
            {name: "order_key_sellAsset_tokenId_high", type: "felt"},
            {name: "order_key_sellAsset_assetType", type: "felt"},
            {name: "order_key_buyAsset_token", type: "felt"},
            {name: "order_key_buyAsset_tokenId_low", type: "felt"},
            {name: "order_key_buyAsset_tokenId_high", type: "felt"},
            {name: "order_key_buyAsset_assetType", type: "felt"},
            {name: "order_selling_low", type: "felt"},
            {name: "order_selling_high", type: "felt"},
            {name: "order_buying_low", type: "felt"},
            {name: "order_buying_high", type: "felt"},
            {name: "order_sellerFee_low", type: "felt"},
            {name: "order_sellerFee_high", type: "felt"},
          ]
        },
        primaryType: "Validate",
        domain: {
          name: "StarkNft", // put the name of your dapp to ensure that the signatures will not be used by other DAPP
          version: "1",
          chainId: "SN_MAIN", // shortString of 'SN_GOERLI' (or 'SN_MAIN' or 'SN_GOERLI2'), to be sure that signature can't be used by other network.
        },
        message: {
          order_key_owner: this.wallet_address,//this.order.key.owner,
          order_key_salt: this.order.key.salt,
          order_key_sellAsset_token: this.order.key.sellAsset.token,
          order_key_sellAsset_tokenId_low: this.order.key.sellAsset.tokenId.low,
          order_key_sellAsset_tokenId_high: this.order.key.sellAsset.tokenId.high,
          order_key_sellAsset_assetType: this.order.key.sellAsset.assetType,
          order_key_buyAsset_token: this.order.key.buyAsset.token,
          order_key_buyAsset_tokenId_low: this.order.key.buyAsset.tokenId.low,
          order_key_buyAsset_tokenId_high: this.order.key.buyAsset.tokenId.high,
          order_key_buyAsset_assetType: this.order.key.buyAsset.assetType,
          order_selling_low: this.order.selling.low,
          order_selling_high: this.order.selling.high,
          order_buying_low: this.order.buying.low,
          order_buying_high: this.order.buying.high,
          order_sellerFee_low: this.order.sellerFee.low,
          order_sellerFee_high: this.order.sellerFee.high,
        }
      };


      const signature2 = await this.account.signMessage(typedDataValidate);
      console.log("signature2", signature2);

      const nft_market_contract = new Contract(abi, this.nft_market_address, this.provider);
      const check = await nft_market_contract.validateOrderSig(this.order, signature2);

      console.log(check)

    },
  },
}
</script>

<style scoped>

</style>