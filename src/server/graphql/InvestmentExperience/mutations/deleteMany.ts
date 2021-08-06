import { mutationField, nonNull } from 'nexus'

export const InvestmentExperienceDeleteManyMutation = mutationField(
  'deleteManyInvestmentExperience',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'InvestmentExperienceWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.investmentExperience.deleteMany({ where } as any)
    },
  },
)
