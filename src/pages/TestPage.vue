<template>
  <div>
    <button @click="connect_wallet">Connect Wallet</button>
    <br/>
    <button @click="mint('mint_a','500000000000000')">Mint A</button>
    <br/>
    <button @click="mint('mint_b','2000000000000000')">Mint B</button>
    <br/>
    <button @click="mint('mint_c','10000000000000000')">Mint C</button>
    <br/>
    <button @click="mint('mint_e','50000000000000000')">Mint D</button>
    <br/>

    <button @click="mint5('mint_b','140000000000000000')">Mint B5</button>
    <br/>
  </div>
</template>

<script>

import {toBN} from "starknet/dist/utils/number";

const eth_address = "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7";
const dragon_address = "0x1be7b1f3139a7fbba6d975632a9e3bc94d9ea9006f76dee17a7fa97987326c7";
// const wars_erc20_address = "0x31a72ac8f17dad44005aec8712f1b567fb7e0e195875d33235523fcdb06e093";
import dragon_abi from "./war_nft_abi.json";

import {connect, disconnect} from "@argent/get-starknet"
import {Contract, Provider, stark} from "starknet";
import {uint256ToBN} from "starknet/dist/utils/uint256";

export default {
  name: "TestPage",
  data() {
    return {
      wallet_address: null,
      provider: null,
      account: null,
      queryString: window.location.search,
      queryParams: {},
    }
  },
  methods: {
    async getProcess() {
      const decimal = toBN("1000000000000000000");

      console.log('getProcess a')
      let defaultProvider = new Provider({network: 'mainnet-alpha'});
      console.log('getProcess b', defaultProvider)
      const dragon_contract = new Contract(dragon_abi, dragon_address, defaultProvider);
      console.log('getProcess c', dragon_contract)
      const balance_res = await dragon_contract.balanceOf(dragon_address);
      const balance = uint256ToBN(balance_res.balance).div(decimal);
      const max = (toBN("6500000000000000000000000000000000")).div(decimal);
      const delta = max.sub(balance);
      console.log("balance", balance.toString());
      console.log("max", max.toString());
      console.log("delta", delta.toString());
      let process = ((Number)(delta.toString()) / (Number)(max.toString())) * 100;
      console.log("process", process);
      if (process < 5) {
        process = 5;
      }
      this.styleObject = {
        width: process + '%',
      }

    },
    getQueryParam: function (keyname) {
      if (!this.queryParams[keyname]) {
        const query = decodeURIComponent(this.queryString).substr(1);
        const queryParams = query.split("&");
        queryParams.forEach(param => {
          const key = param.split("=")[0];
          this.queryParams[key] = param.split("=")[1];
        });
      }
      return this.queryParams[keyname];
    },
    ////////////////////////////////////////////////////////
    async mint(entrypoint, amount) {

      if (this.account === null) {
        alert("Please connect wallet first");
        return;
      }

      const inviter_address = this.getQueryParam("inviter");
      console.log(inviter_address);

      let inviter = {type: 'felt', value: 0};
      if (inviter_address !== undefined) {
        inviter = {type: 'felt', value: inviter};
      }

      const multiCall = await this.account.execute(
          [
            {
              contractAddress: eth_address,
              entrypoint: "approve",
              calldata: stark.compileCalldata({
                spender: dragon_address,
                amount: {type: 'struct', low: amount, high: '0'},
              })
            },
            {
              contractAddress: dragon_address,
              entrypoint: entrypoint,
              calldata: stark.compileCalldata({
                inviter: inviter,
              })
            }
          ]
      )
      console.log(multiCall);
      await this.provider.waitForTransaction(multiCall.transaction_hash);
      console.log("mint")
    },
    async mint5(entrypoint, amount) {

      if (this.account === null) {
        alert("Please connect wallet first");
        return;
      }

      const inviter_address = this.getQueryParam("inviter");
      console.log(inviter_address);

      let inviter = {type: 'felt', value: 0};
      if (inviter_address !== undefined) {
        inviter = {type: 'felt', value: inviter};
      }

      const multiCall = await this.account.execute(
          [
            {
              contractAddress: eth_address,
              entrypoint: "approve",
              calldata: stark.compileCalldata({
                spender: dragon_address,
                amount: {type: 'struct', low: amount, high: '0'},
              })
            },
            {
              contractAddress: dragon_address,
              entrypoint: entrypoint,
              calldata: stark.compileCalldata({
                inviter: inviter,
              })
            },
            {
              contractAddress: dragon_address,
              entrypoint: entrypoint,
              calldata: stark.compileCalldata({
                inviter: inviter,
              })
            },
            {
              contractAddress: dragon_address,
              entrypoint: entrypoint,
              calldata: stark.compileCalldata({
                inviter: inviter,
              })
            },
            {
              contractAddress: dragon_address,
              entrypoint: entrypoint,
              calldata: stark.compileCalldata({
                inviter: inviter,
              })
            },{
            contractAddress: dragon_address,
            entrypoint: entrypoint,
            calldata: stark.compileCalldata({
              inviter: inviter,
            })
          },

          //   {
            //   contractAddress: dragon_address,
            //   entrypoint: entrypoint,
            //   calldata: stark.compileCalldata({
            //     inviter: inviter,
            //   })
            // },
          ]
      )
      console.log(multiCall);
      await this.provider.waitForTransaction(multiCall.transaction_hash);
      console.log("mint")
    },
    async connect_wallet() {
      if (this.wallet_address != null) {
        return this.disconnect_wallet();
      }
      const a = await connect();
      console.log(a.account);
      this.wallet_address = a.account.address;
      console.log(this.wallet_address)
      this.provider = a.provider;
      this.account = a.account;
    },
    async disconnect_wallet() {
      await disconnect();
      this.wallet_address = null;
      this.provider = null;
    },
  }
}
</script>

<style scoped>

</style>