import { queryField, list } from 'nexus'

export const FinancialAccountAggregateQuery = queryField(
  'aggregateFinancialAccount',
  {
    type: 'AggregateFinancialAccount',
    args: {
      where: 'FinancialAccountWhereInput',
      orderBy: list('FinancialAccountOrderByInput'),
      cursor: 'FinancialAccountWhereUniqueInput',
      distinct: 'FinancialAccountScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.financialAccount.aggregate({ ...args, ...select }) as any
    },
  },
)
