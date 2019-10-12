import { body, param } from 'express-validator';
import mongoose from 'mongoose';

const editPostSchema = [
  param('id')
    .custom((value) => mongoose.Types.ObjectId.isValid(value))
    .withMessage('Invalid blog-post id'),
  body('content')
    .not()
    .isEmpty({ ignore_whitespace: true })
    .withMessage('Content should not be empty')
];

const createPostSchema = [
  body('content')
    .not()
    .isEmpty({ ignore_whitespace: true })
    .withMessage('Content should not be empty')
];

export { editPostSchema, createPostSchema };
