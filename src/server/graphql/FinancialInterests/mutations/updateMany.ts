import { mutationField, nonNull } from 'nexus'

export const FinancialInterestsUpdateManyMutation = mutationField(
  'updateManyFinancialInterests',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'FinancialInterestsWhereInput',
      data: nonNull('FinancialInterestsUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.financialInterests.updateMany(args as any)
    },
  },
)
