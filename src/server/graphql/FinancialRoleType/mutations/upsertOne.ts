import { mutationField, nonNull } from 'nexus'

export const FinancialRoleTypeUpsertOneMutation = mutationField(
  'upsertOneFinancialRoleType',
  {
    type: nonNull('FinancialRoleType'),
    args: {
      where: nonNull('FinancialRoleTypeWhereUniqueInput'),
      create: nonNull('FinancialRoleTypeCreateInput'),
      update: nonNull('FinancialRoleTypeUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.financialRoleType.upsert({
        ...args,
        ...select,
      })
    },
  },
)
