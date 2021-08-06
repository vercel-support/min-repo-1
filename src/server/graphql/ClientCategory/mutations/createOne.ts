import { mutationField, nonNull } from 'nexus'

export const ClientCategoryCreateOneMutation = mutationField(
  'createOneClientCategory',
  {
    type: nonNull('ClientCategory'),
    args: {
      data: nonNull('ClientCategoryCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.clientCategory.create({
        data,
        ...select,
      })
    },
  },
)
