import { mutationField, nonNull } from 'nexus'

export const TaxStatusDeleteManyMutation = mutationField(
  'deleteManyTaxStatus',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'TaxStatusWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.taxStatus.deleteMany({ where } as any)
    },
  },
)
