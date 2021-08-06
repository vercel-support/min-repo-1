import { mutationField, nonNull } from 'nexus'

export const FinancialAccountTypeDeleteOneMutation = mutationField(
  'deleteOneFinancialAccountType',
  {
    type: 'FinancialAccountType',
    args: {
      where: nonNull('FinancialAccountTypeWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.financialAccountType.delete({
        where,
        ...select,
      })
    },
  },
)
