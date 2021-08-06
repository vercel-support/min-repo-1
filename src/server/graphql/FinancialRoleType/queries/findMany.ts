import { queryField, nonNull, list } from 'nexus'

export const FinancialRoleTypeFindManyQuery = queryField(
  'findManyFinancialRoleType',
  {
    type: nonNull(list(nonNull('FinancialRoleType'))),
    args: {
      where: 'FinancialRoleTypeWhereInput',
      orderBy: list('FinancialRoleTypeOrderByInput'),
      cursor: 'FinancialRoleTypeWhereUniqueInput',
      distinct: 'FinancialRoleTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.financialRoleType.findMany({
        ...args,
        ...select,
      })
    },
  },
)
