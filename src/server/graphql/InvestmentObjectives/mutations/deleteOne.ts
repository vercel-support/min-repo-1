import { mutationField, nonNull } from 'nexus'

export const InvestmentObjectivesDeleteOneMutation = mutationField(
  'deleteOneInvestmentObjectives',
  {
    type: 'InvestmentObjectives',
    args: {
      where: nonNull('InvestmentObjectivesWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.investmentObjectives.delete({
        where,
        ...select,
      })
    },
  },
)
