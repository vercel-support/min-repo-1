import { mutationField, nonNull } from 'nexus'

export const FinancialAccountCreateOneMutation = mutationField(
  'createOneFinancialAccount',
  {
    type: nonNull('FinancialAccount'),
    args: {
      data: nonNull('FinancialAccountCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.financialAccount.create({
        data,
        ...select,
      })
    },
  },
)
