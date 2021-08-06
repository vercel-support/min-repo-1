import { mutationField, nonNull } from 'nexus'

export const FinancialAccountUpdateOneMutation = mutationField(
  'updateOneFinancialAccount',
  {
    type: nonNull('FinancialAccount'),
    args: {
      where: nonNull('FinancialAccountWhereUniqueInput'),
      data: nonNull('FinancialAccountUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.financialAccount.update({
        where,
        data,
        ...select,
      })
    },
  },
)
