import { mutationField, nonNull } from 'nexus'

export const FinancialAccountUpdateManyMutation = mutationField(
  'updateManyFinancialAccount',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'FinancialAccountWhereInput',
      data: nonNull('FinancialAccountUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.financialAccount.updateMany(args as any)
    },
  },
)
