import mongoose from 'mongoose';

const { Schema } = mongoose;

const transactionSchema = mongoose.Schema({
  amount: Number,
  summary: String,
  type: {
    type: String,
    enum: ['Income', 'Expense'],
    required: true
  },
  tags: [{ type: String }],
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date
});

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;
