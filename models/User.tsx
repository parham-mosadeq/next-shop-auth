import { model, models, Schema } from 'mongoose';
import { Products } from '../types/types';
const userSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },

  shoppingCart: Array<Products>,

  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
});

const User = models.User || model('User', userSchema);

export default User;
