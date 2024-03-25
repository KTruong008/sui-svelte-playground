export const logWallet = (walletState) => {
  const wallets = walletState.wallets;
  const accounts = walletState.accounts;
  const currentWallet = walletState.currentWallet;
  const currentAccount = walletState.currentAccount;
  const lastConnectedAccountAddress = walletState.lastConnectedAccountAddress;
  const lastConnectedWalletName = walletState.lastConnectedWalletName;
  const connectionStatus = walletState.connectionStatus;
  const isConnected = walletState.isConnected;
  const isConnecting = walletState.isConnecting;
  const isDisconnected = walletState.isDisconnected;

  console.log('');
  console.log('--Wallets');
  console.log(wallets);
  wallets.forEach((wallet) => {
    console.log(wallet.name);
  });

  console.log('');
  console.log('--Accounts');
  console.log(accounts);
  accounts.forEach((account) => {
    console.log(account.address);
  });

  console.log('');
  console.log('--Current wallet');
  console.log(currentWallet?.name);

  console.log('');
  console.log('--Current account');
  console.log(currentAccount?.address);

  console.log('');
  console.log('--Last connected account address');
  console.log(lastConnectedAccountAddress);

  console.log('');
  console.log('--Last connected wallet name');
  console.log(lastConnectedWalletName);

  console.log('');
  console.log('--Connection status');
  console.log(connectionStatus);

  console.log('');
  console.log('--Is connected');
  console.log(isConnected);

  console.log('');
  console.log('--Is connecting');
  console.log(isConnecting);

  console.log('');
  console.log('--Is disconnected');
  console.log(isDisconnected);
};
