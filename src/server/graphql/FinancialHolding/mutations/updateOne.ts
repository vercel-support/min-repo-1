import { mutationField, nonNull } from 'nexus'

export const FinancialHoldingUpdateOneMutation = mutationField(
  'updateOneFinancialHolding',
  {
    type: nonNull('FinancialHolding'),
    args: {
      where: nonNull('FinancialHoldingWhereUniqueInput'),
      data: nonNull('FinancialHoldingUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.financialHolding.update({
        where,
        data,
        ...select,
      })
    },
  },
)
