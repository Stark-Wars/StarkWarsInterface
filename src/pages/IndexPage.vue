<template>
  <div>
    <div class="main">
      <div class="leftMenu">
        <ul>
          <li>
            <h2 class="h2tit"><a href="#"><img src="images/home-32.svg" alt=""></a></h2>
            <div class="slide">Home</div>
          </li>
          <li>
            <h2 class="h2tit"><a href="#"><img src="images/marketplace-32.svg" alt=""></a></h2>
            <div class="slide">Market Place</div>
          </li>
          <li>
            <h2 class="h2tit"><a href="#"><img src="images/graphic-novel-32.svg" alt=""></a></h2>
            <div class="slide">Guild</div>
          </li>
          <li>
            <h2 class="h2tit"><a href="#"><img src="images/dao-32.svg" alt=""></a></h2>
            <div class="slide">Dao</div>
          </li>
          <!-- <li>
            <h2 class="h2tit"><a href="#"><img src="images/claim-stake-32.svg" alt=""></a></h2>
            <div class="slide">claim</div>
          </li>
          <li>
            <h2 class="h2tit"><a href="#"><img src="images/faction-fleet-32.svg" alt=""></a></h2>
            <div class="slide">faction</div>
          </li>
          <li>
            <h2 class="h2tit"><a href="#"><img src="images/inventory-32.svg" alt=""></a></h2>
            <div class="slide">inventory</div>
          </li>
          <li>
            <h2 class="h2tit"><a href="#"><img src="images/leaderboards-32.svg" alt=""></a></h2>
            <div class="slide">leaderboards</div>
          </li>
          <li>
            <h2 class="h2tit"><a href="#"><img src="images/profile-32.svg" alt=""></a></h2>
            <div class="slide">profile</div>
          </li> -->
          <li class="last" @click="connect_wallet">
            <h2 class="h2tit"><a href="#"><img src="images/wallet-not-connected-32.svg" alt=""></a></h2>
            <div class="slide">
              {{ showWalletAddress() }}
            </div>
          </li>
        </ul>
      </div>

      <div class="right">
        <div class="tabImg">
          <div class="item current">
            <div class="imgbox"><img src="images/1.png" alt=""></div>
            <div class="linetitle">STARKWARS</div>
            <div class="content">
              <div class='le'><a href="#" class="more"><span class='s1'>Play now/coming soon</span></a>
                <!--               <a href='#' class='more2'>Read the <span class='lines'>SAGE Pre-Alpha Game Manual</span></a>-->
              </div>
              <div class="ri">
                <!-- <div class="title1">Episode 6: Live Now</div> -->
                <div class="title2">StarkWars</div>
                <div class="dec">Elvin's home planet civilization has a pure spirit and form, so his home planet was
                  selected as the last pure land of the universe. But in the billions of years of his sleep, his mother
                  civilization has long since perished, so he is saddened and angry about the failure to revive his
                  mother
                  civilization! In the end, he was forever separated from the outside world. In the endless
                  reincarnation,
                  he could only look at the development of the universe as a bystander. Over time, he had a grudge
                  against
                  the universe...
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="imgbox"><img src="images/2.webp" alt=""></div>
            <div class="linetitle">Eternal night</div>
            <div class="content">
              <div class='le'>
                <div class="limit"><img src="images/mh1.png" alt=""></div>
                <div class="text">
                  Role Package includes a random Character NFT and an airdrop of 10,000 WARS.
                </div>
                <div class="line"><i :style=styleObjectA></i></div>
                <div class="link">
                  <a href="#" class="more btn">
                    <span class='s1' @click="mint('mint_a','500000000000000')">Mint</span>
                  </a>
                  <a href="#" class="more btn">
                    <span class='s1' @click="invite()">Invite</span>
                  </a>
                </div>
                <div class=" floatingImgs2">
                  <div class="list">
                    <div class="swiper-container">
                      <div class="swiper-wrapper">
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group2_1.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group2_2.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group2_3.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group2_4.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group2_5.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group2_6.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group2_7.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group2_8.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group2_9.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group2_10.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group2_11.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group2_12.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group2_13.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group2_14.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group2_15.png" alt=""></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ri">
                <div class="title1">Episode1</div>
                <div class="title2">Eternal night</div>
                <div class="dec">"As darkness descends, a battle looms. Heroes gather, destinies entwined. In the eve of
                  Eternal Night, courage ignites. Prepare for an epic clash, where legends are born, and the light shall
                  prevail."
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="imgbox"><img src="images/3.webp" alt=""></div>
            <div class="linetitle">Return from exile</div>
            <div class="content">
              <div class='le'>


                <div class="limit"><img src="images/mh2.png" alt=""></div>
                <div class="text">
                  Aircraft Package includes a random Aircraft NFT and an airdrop of 42,000 WARS.
                </div>
                <div class="line"><i :style=styleObjectB></i></div>
                <div class="link">
                  <a href="#" class="more btn">
                    <span class='s1' @click="mint('mint_b','2000000000000000')">Mint</span>
                  </a>
                  <a href="#" class="more btn">
                    <span class='s1' @click="invite()">Invite</span>
                  </a>
                </div>
                <div class="floatingImgs">
                  <div class="list">
                    <div class="swiper-container">
                      <div class="swiper-wrapper">
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group3_1.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group3_2.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group3_3.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group3_4.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group3_5.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group3_6.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group3_7.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group3_8.png" alt=""></div>
                        </div>
                        <!-- <div class="swiper-slide">
                          <div class="img"><img src="images/group3_9.png" alt=""></div>
                        </div> -->
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group3_10.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group3_11.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group3_12.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group3_13.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group3_14.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group3_15.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group3_16.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group3_17.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group3_18.png" alt=""></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
              <div class="ri">
                <div class="title1">Episode2</div>
                <div class="title2">Return from exile</div>
                <div class="dec">"From exile they return, battle defeated. Yet scars bear witness to their resilience.
                  With unwavering spirit, they rise again. Redemption awaits as they reclaim what was lost.
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="imgbox"><img src="images/4.webp" alt=""></div>
            <div class="linetitle">The Battle of the Nine galaxies</div>
            <div class="content">
              <div class='le'>


                <div class="limit"><img src="images/mh3.png" alt=""></div>
                <div class="text">
                  Starship Package includes a random Starship NFT and an airdrop of 220,000 WARS.
                </div>
                <div class="line"><i :style=styleObjectC></i></div>
                <div class="link">
                  <a href="#" class="more btn">
                    <span class='s1' @click="mint('mint_c','10000000000000000')">Mint</span>
                  </a>
                  <a href="#" class="more btn">
                    <span class='s1' @click="invite()">Invite</span>
                  </a>
                </div>
                <div class="floatingImgs">
                  <div class="list">
                    <div class="swiper-container">
                      <div class="swiper-wrapper">
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group4_1.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group4_2.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group4_3.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group4_4.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group4_5.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group4_6.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group4_7.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group4_8.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group4_9.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group4_10.png" alt=""></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
              <div class="ri">
                <div class="title1">Episode3</div>
                <div class="title2 type4">The Battle of the Nine galaxies</div>
                <div class="dec">"Across galaxies, a battle ignites. Courage clashes, stars collide. Witness the cosmic
                  spectacle, as nine galaxies unite. Epic warfare, boundless might. Brace yourself for the interstellar
                  fight!"
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="imgbox"><img src="images/5.webp" alt=""></div>
            <div class="linetitle">Star Overlord</div>
            <div class="content">
              <div class='le'>


                <div class="limit"><img src="images/mh4.png" alt=""></div>
                <div class="text">
                  Base Package includes a random Base NFT and an airdrop of 1,200,000 WARS.
                </div>
                <div class="line"><i :style=styleObjectD></i></div>
                <div class="link">
                  <a href="#" class="more btn">
                    <span class='s1' @click="mint('mint_d','50000000000000000')">Mint</span>
                  </a>
                  <a href="#" class="more btn">
                    <span class='s1' @click="invite()">Invite</span>
                  </a>
                </div>
                <div class="floatingImgs">
                  <div class="list">
                    <div class="swiper-container">
                      <div class="swiper-wrapper">

                        <div class="swiper-slide">
                          <div class="img"><img src="images/group5_1.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group5_2.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group5_3.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group5_4.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group5_5.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group5_6.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group5_7.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group5_8.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group5_9.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group5_10.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group5_11.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group5_12.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group5_13.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group5_14.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group5_15.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group5_16.png" alt=""></div>
                        </div>
                        <div class="swiper-slide">
                          <div class="img"><img src="images/group5_17.png" alt=""></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
              <div class="ri">
                <div class="title1">Episode4</div>
                <div class="title2">Star Overlord</div>
                <div class="dec">"As the battle concludes, the Star Overlord reigns supreme. Defeating all adversaries,
                  a
                  new era dawns. The galaxy bows to the might of the conqueror. Witness the rise of an unstoppable
                  force,
                  as the Star Overlord claims dominion over the cosmos."
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottomFooter">
          <div class="lef">
            <div class="title"><span>PLAYER RESOURCES</span></div>
            <div class="link">
              <a href="https://twitter.com/starknet_wars"><img src="images/tt.png" alt=""></a>
              <a href="https://t.me/starknet_wars"><img src="images/telegram.png" alt=""></a>
            </div>
          </div>
          <div class="ri">
            <div class="title"><span>Partners</span></div>
            <div class="link">
              <a href="javascript:;"><img src="images/partner_1.png" alt=""></a>
              <a href="javascript:;"><img src="images/partner_2.png" alt=""></a>
              <a href="javascript:;"><img src="images/partner_3.png" alt=""></a>
              <a href="javascript:;"><img src="images/partner_4.png" alt=""></a>
              <a href="javascript:;"><img src="images/partner_5.png" alt=""></a>
              <a href="javascript:;"><img src="images/partner_6.png" alt=""></a>
              <a href="javascript:;"><img src="images/partner_7.png" alt=""></a>
              <a href="javascript:;"><img src="images/partner_8.png" alt=""></a>
              <a href="javascript:;"><img src="images/partner_9.png" alt=""></a>
              <a href="javascript:;"><img src="images/partner_10.png" alt=""></a>
              <a href="javascript:;"><img src="images/partner_11.png" alt=""></a>
              <a href="javascript:;"><img src="images/partner_12.png" alt=""></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="alertModel" v-show="show_invite">
      <div class="center">
        <div class="title">Invite Friends</div>
        <div class="dec">Invite your friends to win a generous 300 WARS reward, and embark on an exciting and
          adventurous journey together! Take action now! Please note that there is no limit to the number of referral
          rewards! You can invite as many friends as possible to earn more rewards, creating a win-win opportunity for
          you and your friends to dominate the battlefield together!
        </div>
        <div class="inputs">

          <!--          <div class="words">-->
          <!--            <input type="text" :placeholder="wallet_address" class="words" disabled>-->
          <!--          </div>-->
          <div class="words type2">
            <input type="text" :placeholder="copyText" class="words" disabled style="width: 90%">
            <button @click="copy">Copy</button>
          </div>

        </div>
        <div style="text-align:center;padding: 5px">
          {{ msg }}
        </div>
        <!--        <input type="submit" value="Close" class="send" @click="close_inviter_modal">-->
        <button class="send" @click="close_inviter_modal"><span>Close</span></button>

        <!--        <a data-v-7e76ac0d="" href="#" class="more btn"><span data-v-7e76ac0d="" class="s1">Invite</span></a>-->
        <!--        <input type="submit" value="Copy" class="send" @click="copy">-->

      </div>
    </div>
  </div>
</template>

<script>
import {toBN} from "starknet/dist/utils/number";

const eth_address = "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7";
const dragon_address = "0x17bcbb8fca1ca93ed677a88609682106e2a1104bbffb7749a25afe837a77f21";
const NEXT_PUBLIC_NAMING_CONTRACT = "0x013e13b71de66832b5d22360579a225896c8ddb49631169b16e49c6e6b480288";
// const wars_erc20_address = "0x07f7c292c2e4377170966c3e8d72a1f9e6903c690d2ce4cdb311c3f839429d3d";
import dragon_abi from "./war_nft_abi.json";
import erc20_abi from "./erc20_abi.json";

import {connect, disconnect} from "@argent/get-starknet"
import {Contract, Provider, stark} from "starknet";
import {CallData} from "starknet5";
import {uint256ToBN} from "starknet/dist/utils/uint256";
import {decodeDomain} from "starknetid.js/packages/core/dist/utils";


export default {
  name: "IndexPage",
  data() {
    return {
      msg: '',
      copyText: '',
      show_invite: false,
      wallet_address: null,
      provider: null,
      account: null,
      queryString: window.location.search,
      queryParams: {},
      styleObjectA: {
        width: '0%',
      },
      styleObjectB: {
        width: '0%',
      },
      styleObjectC: {
        width: '0%',
      },
      styleObjectD: {
        width: '0%',
      },
      stringDomain: ""
    }
  },
  mounted() {
    this.getProcess();
  },
  methods: {
    async getName() {

      let calldata = CallData.compile({
        address: this.account.address,
      });
      console.log("calldata", calldata)

      try {
        const hexDomain = await this.provider.callContract({
          contractAddress: NEXT_PUBLIC_NAMING_CONTRACT,
          entrypoint: "address_to_domain",
          calldata: calldata
        });

        console.log("hexDomain", hexDomain)

        /* eslint-disable */
        const decimalDomain = hexDomain.result
            .map((element) => BigInt(element))
            .slice(1);

        this.stringDomain = decodeDomain(decimalDomain).replace(".stark", ".stk");

        console.log("stringDomain", this.stringDomain)

      } catch (e) {
        console.log("error", e)
      }
    },
    showWalletAddress() {
      console.log("showWalletAddress")
      // let this.wallet_address == null ? "Connect Wallet" : wallet_address.toString().substr(0, 10) + "..." + wallet_address.toString().substr(wallet_address.length - 4, 4)

      if (this.wallet_address == null) {
        return "Connect Wallet";
      }
      if (this.stringDomain !== "") {
        return this.stringDomain;
      }

      let wallet_address = this.wallet_address;

      return wallet_address.toString().substr(0, 10) + "..." + wallet_address.toString().substr(wallet_address.length - 4, 4);


    },
    test() {
      alert("string");
    },
    async getProcess() {

      console.log('getProcess a')
      let defaultProvider = new Provider({network: 'mainnet-alpha'});
      console.log('getProcess b', defaultProvider)
      const dragon_contract = new Contract(dragon_abi, dragon_address, this.provider == null ? defaultProvider : this.provider);
      console.log('getProcess c', dragon_contract)

      const balance_res_a = await dragon_contract.getMintBalanceA();
      console.log("a", uint256ToBN(balance_res_a.balance).toString());
      this.styleObjectA = {
        width: ((Number)(uint256ToBN(balance_res_a.balance).toString()) / 80000) * 100 + '%',
      }
      console.log(this.styleObjectA);


      const balance_res_b = await dragon_contract.getMintBalanceB();
      console.log("b", uint256ToBN(balance_res_b.balance).toString());
      this.styleObjectB = {
        width: ((Number)(uint256ToBN(balance_res_b.balance).toString()) / 17000) * 100 + '%',
      }
      console.log(this.styleObjectB);

      const balance_res_c = await dragon_contract.getMintBalanceC();
      console.log("c", uint256ToBN(balance_res_c.balance).toString());
      this.styleObjectC = {
        width: ((Number)(uint256ToBN(balance_res_c.balance).toString()) / 2500) * 100 + '%',
      }
      console.log(this.styleObjectC);


      const balance_res_d = await dragon_contract.getMintBalanceD();
      console.log("d", uint256ToBN(balance_res_d.balance).toString());
      this.styleObjectD = {
        width: ((Number)(uint256ToBN(balance_res_d.balance).toString()) / 500) * 100 + '%',
      }
      console.log(this.styleObjectD);

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
        console.log("Please connect wallet first");
        await this.connect_wallet();
      }

      if (this.account === null) {
        return;
      }

      const inviter_address = this.getQueryParam("inviter");
      console.log("inviter_address", inviter_address);

      let inviter = {type: 'felt', value: 0};
      if (inviter_address !== undefined && inviter_address !== null && inviter_address !== "") {
        inviter = {type: 'felt', value: inviter_address};
      }

      console.log("inviter", inviter);

      const eth_contract = new Contract(erc20_abi, eth_address, this.provider);
      const eth_balance_res = await eth_contract.balanceOf(this.wallet_address);
      const eth_balance = uint256ToBN(eth_balance_res.balance);
      console.log(eth_balance.toString());
      if (eth_balance.lt(toBN(amount))) {
        alert("Please deposit enough ETH to mint");
        return;
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
    close_inviter_modal() {
      this.show_invite = false;
    },
    copy() {
      let that = this;
      const save = function (e) {
        e.clipboardData.setData('text/plain', that.copyText)
        e.preventDefault() // 阻止默认行为
      }
      document.addEventListener('copy', save) // 添加一个copy事件
      document.execCommand('copy') // 执行copy方法
      // this.$message({ message: '复制成功', type: 'success' })
      that.msg = "Copy Success"
    },
    async invite() {
      if (this.account === null) {
        console.log("Please connect wallet first");
        await this.connect_wallet();
      }

      if (this.account === null) {
        return;
      }

      this.show_invite = true;
      this.copyText = 'https://www.starkwars.org/?inviter=' + this.wallet_address;
      // this.$notify({
      //   title: '成功',
      //   message: '这是一条成功的提示消息',
      //   type: 'success',
      //   duration: 0
      // });
    },
    async connect_wallet() {
      if (this.wallet_address != null) {
        return this.disconnect_wallet();
      }
      const a = await connect({
        modalMode: "alwaysAsk"
      });
      console.log(a.account);
      this.wallet_address = this.address_format(a.account.address);
      console.log(this.wallet_address)
      this.provider = a.provider;
      this.account = a.account;

      this.getProcess();
      this.getName();
    },
    async disconnect_wallet() {
      await disconnect();
      this.wallet_address = null;
      this.provider = null;
    },
    address_format(address) {
      if (address.length < 66) {
        return '0x' + address.substring(2, address.length).padStart(64, '0');
      } else {
        return address;
      }
    }
  }
}
</script>

<style scoped>

</style>