A quick example of using the `svelte-sui-wallet-adapter` to:

- Connect to sui wallet
- Sign & execute transaction against smart contract located at `my_first_package`
- Retrieving owned objects from connected wallet

Contract is deployed on `devnet`, may need to be re-deployed periodically as `devnet` gets wiped.

## Running

`npm insall`

`npm run dev`

## Publishing smart contract

https://docs.sui.io/guides/developer/first-app/publish

After publishing, update constants in `src/lib/shared/shared.constant.ts`
