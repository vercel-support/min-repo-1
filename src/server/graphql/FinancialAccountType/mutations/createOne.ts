import { mutationField, nonNull } from 'nexus'

export const FinancialAccountTypeCreateOneMutation = mutationField(
  'createOneFinancialAccountType',
  {
    type: nonNull('FinancialAccountType'),
    args: {
      data: nonNull('FinancialAccountTypeCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.financialAccountType.create({
        data,
        ...select,
      })
    },
  },
)
