import { mutationField, nonNull } from 'nexus'

export const FinancialRoleTypeDeleteManyMutation = mutationField(
  'deleteManyFinancialRoleType',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'FinancialRoleTypeWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.financialRoleType.deleteMany({ where } as any)
    },
  },
)
