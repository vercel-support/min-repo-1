import { mutationField, nonNull } from 'nexus'

export const InvestmentObjectivesUpsertOneMutation = mutationField(
  'upsertOneInvestmentObjectives',
  {
    type: nonNull('InvestmentObjectives'),
    args: {
      where: nonNull('InvestmentObjectivesWhereUniqueInput'),
      create: nonNull('InvestmentObjectivesCreateInput'),
      update: nonNull('InvestmentObjectivesUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.investmentObjectives.upsert({
        ...args,
        ...select,
      })
    },
  },
)
