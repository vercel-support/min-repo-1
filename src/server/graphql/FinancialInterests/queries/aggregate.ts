import { queryField, list } from 'nexus'

export const FinancialInterestsAggregateQuery = queryField(
  'aggregateFinancialInterests',
  {
    type: 'AggregateFinancialInterests',
    args: {
      where: 'FinancialInterestsWhereInput',
      orderBy: list('FinancialInterestsOrderByInput'),
      cursor: 'FinancialInterestsWhereUniqueInput',
      distinct: 'FinancialInterestsScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.financialInterests.aggregate({ ...args, ...select }) as any
    },
  },
)
