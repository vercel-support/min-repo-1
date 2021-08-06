import { mutationField, nonNull } from 'nexus'

export const FinancialAccountDeleteManyMutation = mutationField(
  'deleteManyFinancialAccount',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'FinancialAccountWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.financialAccount.deleteMany({ where } as any)
    },
  },
)
