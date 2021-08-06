import { mutationField, nonNull } from 'nexus'

export const InvestmentObjectivesCreateOneMutation = mutationField(
  'createOneInvestmentObjectives',
  {
    type: nonNull('InvestmentObjectives'),
    args: {
      data: nonNull('InvestmentObjectivesCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.investmentObjectives.create({
        data,
        ...select,
      })
    },
  },
)
