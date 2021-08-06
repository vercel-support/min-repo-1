import { mutationField, nonNull } from 'nexus'

export const FinancialAccountDeleteOneMutation = mutationField(
  'deleteOneFinancialAccount',
  {
    type: 'FinancialAccount',
    args: {
      where: nonNull('FinancialAccountWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.financialAccount.delete({
        where,
        ...select,
      })
    },
  },
)
