import { mutationField, nonNull } from 'nexus'

export const FinancialAccountTypeUpdateOneMutation = mutationField(
  'updateOneFinancialAccountType',
  {
    type: nonNull('FinancialAccountType'),
    args: {
      where: nonNull('FinancialAccountTypeWhereUniqueInput'),
      data: nonNull('FinancialAccountTypeUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.financialAccountType.update({
        where,
        data,
        ...select,
      })
    },
  },
)
