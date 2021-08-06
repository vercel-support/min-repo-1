import { queryField, list } from 'nexus'

export const FinancialHoldingAggregateQuery = queryField(
  'aggregateFinancialHolding',
  {
    type: 'AggregateFinancialHolding',
    args: {
      where: 'FinancialHoldingWhereInput',
      orderBy: list('FinancialHoldingOrderByInput'),
      cursor: 'FinancialHoldingWhereUniqueInput',
      distinct: 'FinancialHoldingScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.financialHolding.aggregate({ ...args, ...select }) as any
    },
  },
)
