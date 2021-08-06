import { queryField, nonNull, list } from 'nexus'

export const OpportunityStageNameFindCountQuery = queryField(
  'findManyOpportunityStageNameCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'OpportunityStageNameWhereInput',
      orderBy: list('OpportunityStageNameOrderByInput'),
      cursor: 'OpportunityStageNameWhereUniqueInput',
      distinct: 'OpportunityStageNameScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.opportunityStageName.count(args as any)
    },
  },
)
