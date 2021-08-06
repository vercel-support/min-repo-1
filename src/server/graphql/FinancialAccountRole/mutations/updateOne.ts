import { mutationField, nonNull } from 'nexus'

export const FinancialAccountRoleUpdateOneMutation = mutationField(
  'updateOneFinancialAccountRole',
  {
    type: nonNull('FinancialAccountRole'),
    args: {
      where: nonNull('FinancialAccountRoleWhereUniqueInput'),
      data: nonNull('FinancialAccountRoleUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.financialAccountRole.update({
        where,
        data,
        ...select,
      })
    },
  },
)
