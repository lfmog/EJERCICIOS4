import { Schema, model } from 'mongoose';
import { Enum_SubscriptionStatus } from './enums';
import { ProjectModel } from './project';
import { UserModel } from './user';

interface Inscription {
  status: Enum_SubscriptionStatus;
  startDate: Date;
  finishDate: Date;
  proyect: Schema.Types.ObjectId;
  student: Schema.Types.ObjectId;
}

const inscriptionSchema = new Schema<Inscription>({
  status: {
    type: String,
    enum: Enum_SubscriptionStatus,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  finishDate: {
    type: Date,
    required: true,
  },
  proyect: {
    type: Schema.Types.ObjectId,
    ref: ProjectModel,
    required: true,
  },
  student: {
    type: Schema.Types.ObjectId,
    ref: UserModel,
    required: true,
  },
});

const InscriptionModel = model('Inscription', inscriptionSchema);

export { InscriptionModel };
