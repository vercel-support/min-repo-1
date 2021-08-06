import { mutationField, nonNull } from 'nexus'

export const InvestmentExperienceCreateOneMutation = mutationField(
  'createOneInvestmentExperience',
  {
    type: nonNull('InvestmentExperience'),
    args: {
      data: nonNull('InvestmentExperienceCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.investmentExperience.create({
        data,
        ...select,
      })
    },
  },
)
