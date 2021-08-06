import { mutationField, nonNull } from 'nexus'

export const SalutationUpdateManyMutation = mutationField(
  'updateManySalutation',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'SalutationWhereInput',
      data: nonNull('SalutationUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.salutation.updateMany(args as any)
    },
  },
)
