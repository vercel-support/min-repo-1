import { mutationField, nonNull } from 'nexus'

export const InvestmentExperienceUpdateManyMutation = mutationField(
  'updateManyInvestmentExperience',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'InvestmentExperienceWhereInput',
      data: nonNull('InvestmentExperienceUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.investmentExperience.updateMany(args as any)
    },
  },
)
