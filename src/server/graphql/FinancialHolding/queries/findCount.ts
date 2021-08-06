import { queryField, nonNull, list } from 'nexus'

export const FinancialHoldingFindCountQuery = queryField(
  'findManyFinancialHoldingCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'FinancialHoldingWhereInput',
      orderBy: list('FinancialHoldingOrderByInput'),
      cursor: 'FinancialHoldingWhereUniqueInput',
      distinct: 'FinancialHoldingScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.financialHolding.count(args as any)
    },
  },
)
