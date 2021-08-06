import { mutationField, nonNull } from 'nexus'

export const FinancialAccountTypeUpdateManyMutation = mutationField(
  'updateManyFinancialAccountType',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'FinancialAccountTypeWhereInput',
      data: nonNull('FinancialAccountTypeUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.financialAccountType.updateMany(args as any)
    },
  },
)
