<script lang="ts">
  import {
    ConnectButton,
    walletAdapter
  } from '@builders-of-stuff/svelte-sui-wallet-adapter';

  import { Button } from '$lib/components/ui/button/index.js';

  import { logWallet } from '$lib/shared/shared-tools';

  const makeSuiCall = async (address: string) => {
    let balance = await walletAdapter.suiClient.getCoins({
      owner: address
    });

    return balance;
  };

  const connectWallet = async () => {
    await walletAdapter.connectWallet();
  };

  const disconnectWallet = async () => {
    await walletAdapter.disconnectWallet();
  };

  const consoleLogWalletAdapter = () => {
    logWallet(walletAdapter);
  };
</script>

<div class="relative isolate px-6 pt-14 lg:px-8">
  <div class="mx-auto max-w-2xl py-16">
    <div class="text-center">
      <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Home</h1>
      <p class="mt-6 text-lg leading-8 text-gray-600">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
        commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <!-- <Button on:click={connectWallet}>Connect</Button> -->
        <ConnectButton {walletAdapter} />
        <Button on:click={disconnectWallet} variant="destructive">Disconnect</Button>
      </div>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <Button on:click={consoleLogWalletAdapter} variant="secondary"
          >Log wallet data</Button
        >
      </div>
    </div>
  </div>
</div>
