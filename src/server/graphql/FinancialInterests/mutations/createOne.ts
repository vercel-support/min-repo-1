import { mutationField, nonNull } from 'nexus'

export const FinancialInterestsCreateOneMutation = mutationField(
  'createOneFinancialInterests',
  {
    type: nonNull('FinancialInterests'),
    args: {
      data: nonNull('FinancialInterestsCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.financialInterests.create({
        data,
        ...select,
      })
    },
  },
)
