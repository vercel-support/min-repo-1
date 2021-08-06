import { mutationField, nonNull } from 'nexus'

export const FinancialRoleTypeUpdateManyMutation = mutationField(
  'updateManyFinancialRoleType',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'FinancialRoleTypeWhereInput',
      data: nonNull('FinancialRoleTypeUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.financialRoleType.updateMany(args as any)
    },
  },
)
