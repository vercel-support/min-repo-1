import { queryField, nonNull, list } from 'nexus'

export const OpportunityStageNameFindManyQuery = queryField(
  'findManyOpportunityStageName',
  {
    type: nonNull(list(nonNull('OpportunityStageName'))),
    args: {
      where: 'OpportunityStageNameWhereInput',
      orderBy: list('OpportunityStageNameOrderByInput'),
      cursor: 'OpportunityStageNameWhereUniqueInput',
      distinct: 'OpportunityStageNameScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.opportunityStageName.findMany({
        ...args,
        ...select,
      })
    },
  },
)
