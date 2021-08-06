import { mutationField, nonNull } from 'nexus'

export const InvestmentExperienceUpdateOneMutation = mutationField(
  'updateOneInvestmentExperience',
  {
    type: nonNull('InvestmentExperience'),
    args: {
      where: nonNull('InvestmentExperienceWhereUniqueInput'),
      data: nonNull('InvestmentExperienceUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.investmentExperience.update({
        where,
        data,
        ...select,
      })
    },
  },
)
