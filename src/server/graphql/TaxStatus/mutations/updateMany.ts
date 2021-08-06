import { mutationField, nonNull } from 'nexus'

export const TaxStatusUpdateManyMutation = mutationField(
  'updateManyTaxStatus',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'TaxStatusWhereInput',
      data: nonNull('TaxStatusUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.taxStatus.updateMany(args as any)
    },
  },
)
