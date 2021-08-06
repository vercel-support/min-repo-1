import { mutationField, nonNull } from 'nexus'

export const FinancialAccountTypeDeleteManyMutation = mutationField(
  'deleteManyFinancialAccountType',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'FinancialAccountTypeWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.financialAccountType.deleteMany({ where } as any)
    },
  },
)
