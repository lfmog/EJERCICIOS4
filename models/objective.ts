import { Schema, model } from 'mongoose';
import { Enum_ObjectiveType } from './enums';
import { ProjectModel } from './project';

interface Objective {
  descripcion: string;
  tipo: Enum_ObjectiveType;
}

const objectiveSchema = new Schema<Objective>({
  descripcion: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    enum: Enum_ObjectiveType,
    required: true,
  },

  // proyect:{
  //   type: Schema.Types.ObjectId,
  //   ref: ProjectModel,
  // },
});

const ObjectiveModel = model('Objetivo', objectiveSchema);

export { ObjectiveModel };
