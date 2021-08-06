import { mutationField, nonNull } from 'nexus'

export const FinancialHoldingDeleteOneMutation = mutationField(
  'deleteOneFinancialHolding',
  {
    type: 'FinancialHolding',
    args: {
      where: nonNull('FinancialHoldingWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.financialHolding.delete({
        where,
        ...select,
      })
    },
  },
)
