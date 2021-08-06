import { mutationField, nonNull } from 'nexus'

export const FinancialAccountTypeUpsertOneMutation = mutationField(
  'upsertOneFinancialAccountType',
  {
    type: nonNull('FinancialAccountType'),
    args: {
      where: nonNull('FinancialAccountTypeWhereUniqueInput'),
      create: nonNull('FinancialAccountTypeCreateInput'),
      update: nonNull('FinancialAccountTypeUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.financialAccountType.upsert({
        ...args,
        ...select,
      })
    },
  },
)
