import { mutationField, nonNull } from 'nexus'

export const SalutationDeleteManyMutation = mutationField(
  'deleteManySalutation',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'SalutationWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.salutation.deleteMany({ where } as any)
    },
  },
)
