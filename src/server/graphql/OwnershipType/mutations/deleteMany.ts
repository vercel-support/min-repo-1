import { mutationField, nonNull } from 'nexus'

export const OwnershipTypeDeleteManyMutation = mutationField(
  'deleteManyOwnershipType',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'OwnershipTypeWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.ownershipType.deleteMany({ where } as any)
    },
  },
)
