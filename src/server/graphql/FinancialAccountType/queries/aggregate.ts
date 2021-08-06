import { queryField, list } from 'nexus'

export const FinancialAccountTypeAggregateQuery = queryField(
  'aggregateFinancialAccountType',
  {
    type: 'AggregateFinancialAccountType',
    args: {
      where: 'FinancialAccountTypeWhereInput',
      orderBy: list('FinancialAccountTypeOrderByInput'),
      cursor: 'FinancialAccountTypeWhereUniqueInput',
      distinct: 'FinancialAccountTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.financialAccountType.aggregate({
        ...args,
        ...select,
      }) as any
    },
  },
)
