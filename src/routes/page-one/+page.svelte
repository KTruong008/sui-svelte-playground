<script lang="ts">
  import { walletAdapter } from '@builders-of-stuff/svelte-sui-wallet-adapter';
  import { Transaction } from '@mysten/sui/transactions';

  import Button from '$lib/components/ui/button/button.svelte';
  import { logWallet } from '$lib/shared/shared-tools';
  import { MY_FIRST_PACKAGE_ID } from '$lib/shared/shared.constant';

  const getOwnedObjects = async () => {
    let response = walletAdapter.suiClient
      .getOwnedObjects({
        owner: walletAdapter.currentAccount ? walletAdapter.currentAccount.address : ''
        // filter: {
        //   StructType: `${MY_FIRST_PACKAGE_ID}::my_module::Counter`
        // }
      })
      .then((res) => {
        console.log('res: ', res);
      });
  };

  const createCounter = async () => {
    // const walletFeature =
    //   walletAdapter.currentWallet!.features['sui:signAndExecuteTransactionBlock'];

    const tx = new Transaction();
    tx.moveCall({
      target: `${MY_FIRST_PACKAGE_ID}::my_module::create_counter`,
      arguments: []
    });

    // see useSignTransactionBlock for implementation details
    let what = await walletAdapter.signAndExecuteTransaction({
      transaction: tx as any,
      account: walletAdapter.currentAccount as any,
      chain: walletAdapter!.currentAccount!.chains[0],
      execute: async ({ bytes, signature }) =>
        await walletAdapter.suiClient.executeTransactionBlock({
          transactionBlock: bytes,
          signature,
          options: {
            // Raw effects are required so the effects can be reported back to the wallet
            showRawEffects: true,
            // Select additional data to return
            showObjectChanges: true
          }
        })
    });

    console.log('what: ', what);

    return what;
    // return suiClient
    //   .signAndExecuteTransactionBlock({
    //     signer: '',
    //     transactionBlock: tx,
    //     requestType: 'WaitForLocalExecution',
    //     options: {
    //       showObjectChanges: true,
    //       showEffects: true
    //     }
    //   })
    //   .then((resp) => {
    //     console.log('resp: ', resp);

    //     return resp;
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     return undefined;
    //   });
  };
</script>

<div class="relative isolate px-6 pt-14 lg:px-8">
  <div class="mx-auto max-w-2xl py-16">
    <div class="text-center">
      <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Page one
      </h1>
      <p class="mt-6 text-lg leading-8 text-gray-600">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
        commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
      </p>
      <!-- <div class="mt-10 flex items-center justify-center gap-x-6">
        <Button on:click={connectWallet}>Connect</Button>
        <Button on:click={disconnectWallet} variant="destructive">Disconnect</Button>
      </div> -->
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <Button on:click={() => logWallet(walletAdapter)} variant="secondary"
          >Log wallet data</Button
        >
      </div>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <Button on:click={createCounter}>createCounter</Button>
        <Button on:click={getOwnedObjects}>getObjects</Button>
      </div>
    </div>
  </div>
</div>
