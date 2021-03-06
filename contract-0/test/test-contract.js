// @ts-check
import { test } from '@agoric/zoe/tools/prepare-test-env-ava.js';

// NOTE: tests initially pass to avoid excessive logging from Ava.
// Remove the t.pass('...') line when you start coding the test


// ERTP docs: https://agoric.com/documentation/ertp/guide/
// 1. create an Issuer kit: brand, issuer, mint for a Moola token
// 2. Define an amount of 20 moolas (note: an amount has no value, it's a description of value)
// 3. Mint a payment of 20 moolas (this payment holds value)
// 4. Check if the payment amount is exactly what we asked, use t.deepEqual
test('issuers, amounts, payments', async (t) => {
    t.pass('write the test!');
})

// 1. create an issuer kit, define an amount of 20 moola and mint a payment
// 2. define a purse for Moola (purse only holds one type of asset) and deposit the payment into the purse
// 3. try to deposit the payment again and see what happens
test('payments and purses', async (t) => {
    t.pass('write the test!');
})

// 1. create an issuer kit for moolas and use AmountMath to add 20 + 30 moolas
//    use AssetKind.NAT (this indicates fungible tokens)
// 2. 20 + 30 moolas has to come out to 50 moolas, test this usint t.deepEqual
test('Fungible issuer and AmountMath', async (t) => {
    t.pass('write the test!');
})

// 1. create an issuer kit for Awesomez, which are like a collection of master NFTs
//    that can have multiple prints. E.g. cryptopunk1/2, cryptopunk2/2, etc.
//    Use the kind: AssetKind.COPY_BAG 
// 2. how does AmountMath work here? create two different NFTs and try to add them together,
//    use the function makeCopyBag to create the actual amounts
// 3. what is the result? create the equivalent amount and test equality using t.deepEqual
test('Semi-fungible issuer and AmountMath - adding', async (t) => {
    t.pass('write the test!');
})


// 1. create an issuer kit for Awesomez, which are like a collection of master NFTs
//    that can have multiple prints. E.g. cryptopunk1/2, cryptopunk2/2, etc.
//    Use the kind: AssetKind.COPY_BAG 
// 2. create an empty purse for this AssetKind
//    create 3 "items" of value "cryptopunk4551" and 4 "items" of value "cryptopunk376"
//    use the function makeCopyBag to create the actual amounts
// 3. deposit each amount into the purse
// 4. compare the amount to the expected amount using t.deepEqual
test('Depositing Semi-fungible assets to a purse', async (t) => {
    t.pass('write the test!');
})