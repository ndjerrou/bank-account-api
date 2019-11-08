const mongoose = require('mongoose');

const BankAccount = mongoose.model('BankAccount', {
  name: String,
  typeAccount: {
    type: String,
    enum: ['compte courant', 'epargne', 'credit']
  },
  operations: {
    type: Array,
    payload: Number,
    natureOperation: {
      type: String,
      enum: ['debit', 'credit']
    }
  }
});

module.exports = BankAccount;
