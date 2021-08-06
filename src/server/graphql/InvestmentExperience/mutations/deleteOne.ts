import { mutationField, nonNull } from 'nexus'

export const InvestmentExperienceDeleteOneMutation = mutationField(
  'deleteOneInvestmentExperience',
  {
    type: 'InvestmentExperience',
    args: {
      where: nonNull('InvestmentExperienceWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.investmentExperience.delete({
        where,
        ...select,
      })
    },
  },
)
