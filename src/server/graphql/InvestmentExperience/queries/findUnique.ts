import { queryField, nonNull } from 'nexus'

export const InvestmentExperienceFindUniqueQuery = queryField(
  'findUniqueInvestmentExperience',
  {
    type: 'InvestmentExperience',
    args: {
      where: nonNull('InvestmentExperienceWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.investmentExperience.findUnique({
        where,
        ...select,
      })
    },
  },
)
