import { queryField, list } from 'nexus'

export const FinancialAccountRoleAggregateQuery = queryField(
  'aggregateFinancialAccountRole',
  {
    type: 'AggregateFinancialAccountRole',
    args: {
      where: 'FinancialAccountRoleWhereInput',
      orderBy: list('FinancialAccountRoleOrderByInput'),
      cursor: 'FinancialAccountRoleWhereUniqueInput',
      distinct: 'FinancialAccountRoleScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.financialAccountRole.aggregate({
        ...args,
        ...select,
      }) as any
    },
  },
)
