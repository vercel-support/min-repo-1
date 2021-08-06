import { mutationField, nonNull } from 'nexus'

export const FinancialHoldingUpdateManyMutation = mutationField(
  'updateManyFinancialHolding',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'FinancialHoldingWhereInput',
      data: nonNull('FinancialHoldingUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.financialHolding.updateMany(args as any)
    },
  },
)
