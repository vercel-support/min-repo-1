import { mutationField, nonNull } from 'nexus'

export const InvestmentExperienceUpsertOneMutation = mutationField(
  'upsertOneInvestmentExperience',
  {
    type: nonNull('InvestmentExperience'),
    args: {
      where: nonNull('InvestmentExperienceWhereUniqueInput'),
      create: nonNull('InvestmentExperienceCreateInput'),
      update: nonNull('InvestmentExperienceUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.investmentExperience.upsert({
        ...args,
        ...select,
      })
    },
  },
)
