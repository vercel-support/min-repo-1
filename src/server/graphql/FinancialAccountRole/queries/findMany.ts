import { queryField, nonNull, list } from 'nexus'

export const FinancialAccountRoleFindManyQuery = queryField(
  'findManyFinancialAccountRole',
  {
    type: nonNull(list(nonNull('FinancialAccountRole'))),
    args: {
      where: 'FinancialAccountRoleWhereInput',
      orderBy: list('FinancialAccountRoleOrderByInput'),
      cursor: 'FinancialAccountRoleWhereUniqueInput',
      distinct: 'FinancialAccountRoleScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.financialAccountRole.findMany({
        ...args,
        ...select,
      })
    },
  },
)
