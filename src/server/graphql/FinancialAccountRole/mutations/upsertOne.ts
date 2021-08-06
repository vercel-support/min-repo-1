import { mutationField, nonNull } from 'nexus'

export const FinancialAccountRoleUpsertOneMutation = mutationField(
  'upsertOneFinancialAccountRole',
  {
    type: nonNull('FinancialAccountRole'),
    args: {
      where: nonNull('FinancialAccountRoleWhereUniqueInput'),
      create: nonNull('FinancialAccountRoleCreateInput'),
      update: nonNull('FinancialAccountRoleUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.financialAccountRole.upsert({
        ...args,
        ...select,
      })
    },
  },
)
