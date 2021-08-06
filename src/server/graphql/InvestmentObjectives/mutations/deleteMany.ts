import { mutationField, nonNull } from 'nexus'

export const InvestmentObjectivesDeleteManyMutation = mutationField(
  'deleteManyInvestmentObjectives',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'InvestmentObjectivesWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.investmentObjectives.deleteMany({ where } as any)
    },
  },
)
