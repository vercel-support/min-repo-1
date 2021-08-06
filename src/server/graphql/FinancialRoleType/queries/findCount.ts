import { queryField, nonNull, list } from 'nexus'

export const FinancialRoleTypeFindCountQuery = queryField(
  'findManyFinancialRoleTypeCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'FinancialRoleTypeWhereInput',
      orderBy: list('FinancialRoleTypeOrderByInput'),
      cursor: 'FinancialRoleTypeWhereUniqueInput',
      distinct: 'FinancialRoleTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.financialRoleType.count(args as any)
    },
  },
)
