import { queryField, nonNull } from 'nexus'

export const FinancialAccountRoleFindUniqueQuery = queryField(
  'findUniqueFinancialAccountRole',
  {
    type: 'FinancialAccountRole',
    args: {
      where: nonNull('FinancialAccountRoleWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.financialAccountRole.findUnique({
        where,
        ...select,
      })
    },
  },
)
