import { queryField, nonNull } from 'nexus'

export const FinancialHoldingFindUniqueQuery = queryField(
  'findUniqueFinancialHolding',
  {
    type: 'FinancialHolding',
    args: {
      where: nonNull('FinancialHoldingWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.financialHolding.findUnique({
        where,
        ...select,
      })
    },
  },
)
