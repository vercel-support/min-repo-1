import { mutationField, nonNull } from 'nexus'

export const FinancialRoleTypeUpdateOneMutation = mutationField(
  'updateOneFinancialRoleType',
  {
    type: nonNull('FinancialRoleType'),
    args: {
      where: nonNull('FinancialRoleTypeWhereUniqueInput'),
      data: nonNull('FinancialRoleTypeUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.financialRoleType.update({
        where,
        data,
        ...select,
      })
    },
  },
)
