import { mutationField, nonNull } from 'nexus'

export const FinancialRoleTypeCreateOneMutation = mutationField(
  'createOneFinancialRoleType',
  {
    type: nonNull('FinancialRoleType'),
    args: {
      data: nonNull('FinancialRoleTypeCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.financialRoleType.create({
        data,
        ...select,
      })
    },
  },
)
