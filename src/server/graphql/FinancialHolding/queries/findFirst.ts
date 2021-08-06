import { queryField, list } from 'nexus'

export const FinancialHoldingFindFirstQuery = queryField(
  'findFirstFinancialHolding',
  {
    type: 'FinancialHolding',
    args: {
      where: 'FinancialHoldingWhereInput',
      orderBy: list('FinancialHoldingOrderByInput'),
      cursor: 'FinancialHoldingWhereUniqueInput',
      distinct: 'FinancialHoldingScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.financialHolding.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
