import { queryField, nonNull, list } from 'nexus'

export const FinancialAccountRoleFindCountQuery = queryField(
  'findManyFinancialAccountRoleCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'FinancialAccountRoleWhereInput',
      orderBy: list('FinancialAccountRoleOrderByInput'),
      cursor: 'FinancialAccountRoleWhereUniqueInput',
      distinct: 'FinancialAccountRoleScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.financialAccountRole.count(args as any)
    },
  },
)
