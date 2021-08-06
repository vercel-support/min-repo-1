import { queryField, list } from 'nexus'

export const FinancialRoleTypeAggregateQuery = queryField(
  'aggregateFinancialRoleType',
  {
    type: 'AggregateFinancialRoleType',
    args: {
      where: 'FinancialRoleTypeWhereInput',
      orderBy: list('FinancialRoleTypeOrderByInput'),
      cursor: 'FinancialRoleTypeWhereUniqueInput',
      distinct: 'FinancialRoleTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.financialRoleType.aggregate({ ...args, ...select }) as any
    },
  },
)
