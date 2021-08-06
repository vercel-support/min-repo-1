import { mutationField, nonNull } from 'nexus'

export const OwnershipUpdateManyMutation = mutationField(
  'updateManyOwnership',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'OwnershipWhereInput',
      data: nonNull('OwnershipUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.ownership.updateMany(args as any)
    },
  },
)
