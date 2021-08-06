import { mutationField, nonNull } from 'nexus'

export const InvestmentObjectivesUpdateManyMutation = mutationField(
  'updateManyInvestmentObjectives',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'InvestmentObjectivesWhereInput',
      data: nonNull('InvestmentObjectivesUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.investmentObjectives.updateMany(args as any)
    },
  },
)
