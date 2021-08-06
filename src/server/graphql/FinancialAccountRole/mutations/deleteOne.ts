import { mutationField, nonNull } from 'nexus'

export const FinancialAccountRoleDeleteOneMutation = mutationField(
  'deleteOneFinancialAccountRole',
  {
    type: 'FinancialAccountRole',
    args: {
      where: nonNull('FinancialAccountRoleWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.financialAccountRole.delete({
        where,
        ...select,
      })
    },
  },
)
