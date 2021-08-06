import { mutationField, nonNull } from 'nexus'

export const FinancialHoldingUpsertOneMutation = mutationField(
  'upsertOneFinancialHolding',
  {
    type: nonNull('FinancialHolding'),
    args: {
      where: nonNull('FinancialHoldingWhereUniqueInput'),
      create: nonNull('FinancialHoldingCreateInput'),
      update: nonNull('FinancialHoldingUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.financialHolding.upsert({
        ...args,
        ...select,
      })
    },
  },
)
