import { mutationField, nonNull } from 'nexus'

export const FinancialAccountRoleDeleteManyMutation = mutationField(
  'deleteManyFinancialAccountRole',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'FinancialAccountRoleWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.financialAccountRole.deleteMany({ where } as any)
    },
  },
)
