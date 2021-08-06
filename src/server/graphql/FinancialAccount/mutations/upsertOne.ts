import { mutationField, nonNull } from 'nexus'

export const FinancialAccountUpsertOneMutation = mutationField(
  'upsertOneFinancialAccount',
  {
    type: nonNull('FinancialAccount'),
    args: {
      where: nonNull('FinancialAccountWhereUniqueInput'),
      create: nonNull('FinancialAccountCreateInput'),
      update: nonNull('FinancialAccountUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.financialAccount.upsert({
        ...args,
        ...select,
      })
    },
  },
)
