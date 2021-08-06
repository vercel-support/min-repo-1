import { queryField, nonNull } from 'nexus'

export const FinancialRoleTypeFindUniqueQuery = queryField(
  'findUniqueFinancialRoleType',
  {
    type: 'FinancialRoleType',
    args: {
      where: nonNull('FinancialRoleTypeWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.financialRoleType.findUnique({
        where,
        ...select,
      })
    },
  },
)
