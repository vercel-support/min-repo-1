import { queryField, list } from 'nexus'

export const FinancialRoleTypeFindFirstQuery = queryField(
  'findFirstFinancialRoleType',
  {
    type: 'FinancialRoleType',
    args: {
      where: 'FinancialRoleTypeWhereInput',
      orderBy: list('FinancialRoleTypeOrderByInput'),
      cursor: 'FinancialRoleTypeWhereUniqueInput',
      distinct: 'FinancialRoleTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.financialRoleType.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
