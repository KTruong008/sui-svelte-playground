<script lang="ts">
  import { getFullnodeUrl, SuiClient } from '@mysten/sui.js/client';
  import { walletState } from '@builders-of-stuff/svelte-sui-wallet-adapter';

  import Button from '$lib/components/ui/button/button.svelte';
  import { logWallet } from '$lib/shared/shared-tools';

  const suiClient = new SuiClient({ url: getFullnodeUrl('devnet') });

  const makeSuiCall = async (address: string) => {
    let balance = await suiClient.getCoins({
      owner: address
    });

    return balance;
  };

  const connectWallet = async () => {
    await walletState.connectWallet();
  };

  const disconnectWallet = async () => {
    await walletState.disconnectWallet();
  };

  const consoleLogWalletState = () => {
    logWallet(walletState);
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
        <Button on:click={connectWallet}>Connect</Button>
        <Button on:click={disconnectWallet} variant="destructive">Disconnect</Button>
      </div>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <Button on:click={consoleLogWalletState} variant="secondary"
          >Log wallet data</Button
        >
      </div>
    </div>
  </div>
</div>
