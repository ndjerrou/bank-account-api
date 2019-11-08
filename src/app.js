const express = require('express');
const app = require('express')();

const BankAccount = require('../db/models/BankAccount');
require('../db/connexion/connect');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/accounts', async (req, res) => {
  try {
    const accounts = await BankAccount.find({});
    res.send(accounts);
  } catch (e) {
    res.status(500).send(e);
  }
});

// app.get('/accounts/:id', async (req, res) => {
//   const _id = req.params.id;
//   try {
//     const account = await BankAccount.findById(_id);
//     if (!account) {
//       return res.status(404).send();
//     }
//     res.send(account);
//   } catch (e) {
//     res.status(500).send(e);
//   }
// });

app.get('/accounts/:id/operations', async (req, res) => {
  const _id = req.params.id;
  console.log('ID : ', _id);
  try {
    const account = await BankAccount.findById(_id);
    if (!account) {
      return res.status(404).send();
    }
    console.log(account);
    res.send(account.operations);
  } catch (e) {
    res.status(500).send();
  }
});

app.post('/accounts', async (req, res) => {
  try {
    const newAccount = await new BankAccount(req.body).save();
    res.status(201).send(newAccount);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.patch('/accounts/:id/operations', async (req, res) => {
  const _id = req.params.id;
  const updates = req.body;
  try {
    const account = await BankAccount.findById(_id);

    if (!account) {
      return res.status(404).send();
    }

    account.operations.push(updates);
    const updatedAccount = await BankAccount.updateOne(
      account,
      {
        operations: account.operations
      },
      {
        new: true
      }
    );

    res.send(account);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

app.listen(process.env.PORT || 3000);
