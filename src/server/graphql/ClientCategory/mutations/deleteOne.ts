import { mutationField, nonNull } from 'nexus'

export const ClientCategoryDeleteOneMutation = mutationField(
  'deleteOneClientCategory',
  {
    type: 'ClientCategory',
    args: {
      where: nonNull('ClientCategoryWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.clientCategory.delete({
        where,
        ...select,
      })
    },
  },
)
