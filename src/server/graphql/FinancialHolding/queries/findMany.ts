import { queryField, nonNull, list } from 'nexus'

export const FinancialHoldingFindManyQuery = queryField(
  'findManyFinancialHolding',
  {
    type: nonNull(list(nonNull('FinancialHolding'))),
    args: {
      where: 'FinancialHoldingWhereInput',
      orderBy: list('FinancialHoldingOrderByInput'),
      cursor: 'FinancialHoldingWhereUniqueInput',
      distinct: 'FinancialHoldingScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.financialHolding.findMany({
        ...args,
        ...select,
      })
    },
  },
)
