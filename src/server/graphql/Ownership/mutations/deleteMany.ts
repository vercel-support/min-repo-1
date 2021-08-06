import { mutationField, nonNull } from 'nexus'

export const OwnershipDeleteManyMutation = mutationField(
  'deleteManyOwnership',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'OwnershipWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.ownership.deleteMany({ where } as any)
    },
  },
)
