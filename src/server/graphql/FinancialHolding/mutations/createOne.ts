import { mutationField, nonNull } from 'nexus'

export const FinancialHoldingCreateOneMutation = mutationField(
  'createOneFinancialHolding',
  {
    type: nonNull('FinancialHolding'),
    args: {
      data: nonNull('FinancialHoldingCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.financialHolding.create({
        data,
        ...select,
      })
    },
  },
)
