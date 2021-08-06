import { mutationField, nonNull } from 'nexus'

export const ClientCategoryUpdateOneMutation = mutationField(
  'updateOneClientCategory',
  {
    type: nonNull('ClientCategory'),
    args: {
      where: nonNull('ClientCategoryWhereUniqueInput'),
      data: nonNull('ClientCategoryUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.clientCategory.update({
        where,
        data,
        ...select,
      })
    },
  },
)
