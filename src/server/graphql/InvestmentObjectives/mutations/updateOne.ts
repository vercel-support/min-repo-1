import { mutationField, nonNull } from 'nexus'

export const InvestmentObjectivesUpdateOneMutation = mutationField(
  'updateOneInvestmentObjectives',
  {
    type: nonNull('InvestmentObjectives'),
    args: {
      where: nonNull('InvestmentObjectivesWhereUniqueInput'),
      data: nonNull('InvestmentObjectivesUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.investmentObjectives.update({
        where,
        data,
        ...select,
      })
    },
  },
)
