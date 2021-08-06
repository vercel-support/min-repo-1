import { mutationField, nonNull } from 'nexus'

export const HomeOwnershipUpdateManyMutation = mutationField(
  'updateManyHomeOwnership',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'HomeOwnershipWhereInput',
      data: nonNull('HomeOwnershipUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.homeOwnership.updateMany(args as any)
    },
  },
)
