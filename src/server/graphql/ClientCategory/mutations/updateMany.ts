import { mutationField, nonNull } from 'nexus'

export const ClientCategoryUpdateManyMutation = mutationField(
  'updateManyClientCategory',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'ClientCategoryWhereInput',
      data: nonNull('ClientCategoryUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.clientCategory.updateMany(args as any)
    },
  },
)
