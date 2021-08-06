import { mutationField, nonNull } from 'nexus'

export const FinancialAccountRoleUpdateManyMutation = mutationField(
  'updateManyFinancialAccountRole',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'FinancialAccountRoleWhereInput',
      data: nonNull('FinancialAccountRoleUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.financialAccountRole.updateMany(args as any)
    },
  },
)
