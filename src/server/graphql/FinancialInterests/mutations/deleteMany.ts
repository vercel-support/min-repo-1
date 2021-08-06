import { mutationField, nonNull } from 'nexus'

export const FinancialInterestsDeleteManyMutation = mutationField(
  'deleteManyFinancialInterests',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'FinancialInterestsWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.financialInterests.deleteMany({ where } as any)
    },
  },
)
