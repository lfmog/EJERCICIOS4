import { Schema, model } from 'mongoose';
import { ProjectModel } from './project';
import { UserModel } from './user';

interface Avance {
  date: Date;
  description: string;
  observations: [string];
  proyect: Schema.Types.ObjectId;
  createBy: Schema.Types.ObjectId;
}

const advancementSchema = new Schema<Avance>({
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  observations: [
    {
      type: String,
    },
  ],
  proyect: {
    type: Schema.Types.ObjectId,
    ref: ProjectModel,
    required: true,
  },
  createBy: {
    type: Schema.Types.ObjectId,
    ref: UserModel,
    required: true,
  },
});

const AdvancementModel = model('Avance', advancementSchema);

export { AdvancementModel };
