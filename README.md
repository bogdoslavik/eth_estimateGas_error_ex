# FEVM eth_estimateGas Error Example 
Based on Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

1. Create `.env` file with the following content:
```
PRIVATE_KEY=........
```

Try running some of the following tasks:

```
npx hardhat test --network hardhat
```
Works well. But next two 

```
npx hardhat test --network local
npx hardhat test --network calibration
```

Fails with error `ProviderError: wrong param count (method 'eth_estimateGas'): 2 != 1`


