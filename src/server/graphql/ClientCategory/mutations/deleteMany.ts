import { mutationField, nonNull } from 'nexus'

export const ClientCategoryDeleteManyMutation = mutationField(
  'deleteManyClientCategory',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'ClientCategoryWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.clientCategory.deleteMany({ where } as any)
    },
  },
)
