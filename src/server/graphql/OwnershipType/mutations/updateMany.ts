import { mutationField, nonNull } from 'nexus'

export const OwnershipTypeUpdateManyMutation = mutationField(
  'updateManyOwnershipType',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'OwnershipTypeWhereInput',
      data: nonNull('OwnershipTypeUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.ownershipType.updateMany(args as any)
    },
  },
)
