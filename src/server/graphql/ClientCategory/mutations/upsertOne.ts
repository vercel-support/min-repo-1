import { mutationField, nonNull } from 'nexus'

export const ClientCategoryUpsertOneMutation = mutationField(
  'upsertOneClientCategory',
  {
    type: nonNull('ClientCategory'),
    args: {
      where: nonNull('ClientCategoryWhereUniqueInput'),
      create: nonNull('ClientCategoryCreateInput'),
      update: nonNull('ClientCategoryUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.clientCategory.upsert({
        ...args,
        ...select,
      })
    },
  },
)
