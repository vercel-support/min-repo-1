import { queryField, list } from 'nexus'

export const FinancialAccountRoleFindFirstQuery = queryField(
  'findFirstFinancialAccountRole',
  {
    type: 'FinancialAccountRole',
    args: {
      where: 'FinancialAccountRoleWhereInput',
      orderBy: list('FinancialAccountRoleOrderByInput'),
      cursor: 'FinancialAccountRoleWhereUniqueInput',
      distinct: 'FinancialAccountRoleScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.financialAccountRole.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
