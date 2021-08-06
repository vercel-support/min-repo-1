import { mutationField, nonNull } from 'nexus'

export const HomeOwnershipDeleteManyMutation = mutationField(
  'deleteManyHomeOwnership',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'HomeOwnershipWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.homeOwnership.deleteMany({ where } as any)
    },
  },
)
