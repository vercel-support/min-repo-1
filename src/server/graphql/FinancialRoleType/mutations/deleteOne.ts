import { mutationField, nonNull } from 'nexus'

export const FinancialRoleTypeDeleteOneMutation = mutationField(
  'deleteOneFinancialRoleType',
  {
    type: 'FinancialRoleType',
    args: {
      where: nonNull('FinancialRoleTypeWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.financialRoleType.delete({
        where,
        ...select,
      })
    },
  },
)
