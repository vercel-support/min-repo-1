import { mutationField, nonNull } from 'nexus'

export const FinancialAccountRoleCreateOneMutation = mutationField(
  'createOneFinancialAccountRole',
  {
    type: nonNull('FinancialAccountRole'),
    args: {
      data: nonNull('FinancialAccountRoleCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.financialAccountRole.create({
        data,
        ...select,
      })
    },
  },
)
