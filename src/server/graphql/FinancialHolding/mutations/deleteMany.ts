import { mutationField, nonNull } from 'nexus'

export const FinancialHoldingDeleteManyMutation = mutationField(
  'deleteManyFinancialHolding',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'FinancialHoldingWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.financialHolding.deleteMany({ where } as any)
    },
  },
)
